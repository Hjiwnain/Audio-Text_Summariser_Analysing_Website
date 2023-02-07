import React, { Component } from "react";
// import { Example } from "./Example";
import SumarizeIT from "./SumarizeIT";
import Contact from "./Contact"
import Example from "./Example";
import MicrophoneButton from "./Summary";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'


const App = () => {
    return(
      // <Example />
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/index" element={<Example />} />
          <Route path="/summarize" element={<MicrophoneButton />}/>
          <Route path="/summarizeIT" element={<SumarizeIT />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    )
}

export default App