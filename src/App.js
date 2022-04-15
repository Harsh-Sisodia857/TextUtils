import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  


  const handlemode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
  <div>
  <Navbar title = "TextUtils" mode = {mode} handlemode = {handlemode}/>
  <Alert alert = "This is alert"/>
  <div className="container my-3" >
  <TextForm heading = "Enter Text to Analyze below" mode = {mode} handlemode = {handlemode}/>
  </div>
  </div>
  );
}

export default App;
