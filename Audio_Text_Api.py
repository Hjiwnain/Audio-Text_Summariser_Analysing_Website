import os
from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from fastapi.responses import JSONResponse
import speech_recognition as sr
import firebase_admin
from firebase_admin import credentials, db
from transformers import pipeline

app = FastAPI()

# Initialize the Firebase Admin SDK
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'databaseURL': os.env.url})

# Initialize the summarization pipeline
summarizer = pipeline("summarization")

class AudioInput(BaseModel):
    audio: UploadFile

@app.post("/convert_audio_to_text_and_summarize")
async def convert_audio_to_text_and_summarize(audio_input: AudioInput):
    try:
        with open("temp_audio.wav", "wb") as audio_file:
            audio_file.write(audio_input.audio.file.read())
        
        recognizer = sr.Recognizer()
        with sr.AudioFile("temp_audio.wav") as source:
            audio = recognizer.record(source)
            text = recognizer.recognize_google(audio)
        
        os.remove("temp_audio.wav")
        
        # Store the text in the Firebase database
        ref = db.reference('converted_texts')
        new_text_ref = ref.push()
        new_text_ref.set({'text': text})
        
        # Summarize the text using the summarization pipeline
        summarized_text = summarizer(text, max_length=150, min_length=30, do_sample=False)[0]['summary_text']
        
        return {"text": text, "summary": summarized_text}
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)
