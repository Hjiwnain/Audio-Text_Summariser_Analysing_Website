import React, { Component } from "react";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Route } from 'react-router-dom'
import name from "./AISTAM.png"
import mic1  from "./mic (1).png"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const navigation = [
    { name: 'SumarizeIT', href: "/summarizeIT" },
    { name: 'Summarys', href: '#',class: 'hower: top-6 top-4' },
    { name: 'Github', href: '#' },
    { name: 'Contact Us', href: '/Contact' },
  ]

const SumarizeIT = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const{transcript,listening,resetTranscript,browserSupportsSpeechRecognition,} = useSpeechRecognition()

    if(!browserSupportsSpeechRecognition){
        return(
          <span> Your Browser dosen't support Speech to Text</span>
        )
      }
    const styles1 = {
        container: {
          display: 'flex',
          justifyContent: 'center',
        //   alignItems: 'center',
          paddingTop: '320px',
          height: '100vh',
          paddingleft: '500px',
          
        },
        microphone: {
          backgroundColor: isActive ? 'red' : 'limegreen',
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease-in-out',
          position: 'relative',
          left: isActive ? '-410px' : 0
        },
        microphoneIcon: {
          color: isActive ? 'white' : 'black',
          fontSize: '40px'
        },
        img: {
            height: "90px",
            width: "90px",
        }
      };

    return(
     <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-auto blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12" src={name} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12  ">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        </div>
        <main>
            {/* <div style={styles1.container}>
                <div style={styles1.microphone} onClick={() => setIsActive(!isActive)}>
                    <i className="fas fa-microphone" style={styles1.microphoneIcon}><img src={mic1} style={styles1.img} /></i>
                </div>
            </div> */}
            <div>
                <p>MicroPhone : {listening ? 'on' : 'off'}</p>
                <button onClick={SpeechRecognition.startListening}>
                    <div style={styles1.container}>
                        <div style={styles1.microphone} onClick={() => setIsActive(!isActive)}>
                            <i className="fas fa-microphone" style={styles1.microphoneIcon}><img src={mic1} style={styles1.img} /></i>
                        </div>
                    </div>
                </button>
                <button onClick={SpeechRecognition.stopListening}>
                    <div style={styles1.container}>
                        <div style={styles1.microphone} onClick={() => setIsActive(!isActive)}>
                            <i className="fas fa-microphone" style={styles1.microphoneIcon}><img src={mic1} style={styles1.img} /></i>
                        </div>
                    </div>
                </button>
                <button onClick={resetTranscript}> 
                    <div style={styles1.container}>
                        <div style={styles1.microphone} onClick={() => setIsActive(!isActive)}>
                            <i className="fas fa-microphone" style={styles1.microphoneIcon}><img src={mic1} style={styles1.img} /></i>
                        </div>
                    </div> 
                </button>
                <p>{transcript}</p>
            </div>
        </main>
        </div>
        
    )
}

export default SumarizeIT