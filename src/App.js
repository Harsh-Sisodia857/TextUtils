import './App.css';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
   setAlert({
    msg : message,
    type : type
   })
   setTimeout(() => {
     setAlert(null);
   }, 1500);
  }


  const handlemode = () => {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success")

    }
  }
  return (
    <BrowserRouter>
  <Navbar title = "TextUtils" mode = {mode} handlemode = {handlemode}/>
  <Alert alert = {alert}/>
  <div className="container my-3" >

      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = "Enter Text to Analyze below" mode = {mode} handlemode = {handlemode}/>} />
        <Route exact path="/about" element={<About />} />
      </Routes> 
  </div>         
  </BrowserRouter>
  );
}

export default App;
