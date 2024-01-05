import React from 'react';
import { useState } from 'react';
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm({ mode }) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpperCase = () => {
        const newText = text.toUpperCase();
        setText(newText);
        toast("Text converted to uppercase");
    }
    const handleLowerCase = () => {
        const newText = text.toLowerCase();
        setText(newText);
        toast("Text converted to lowercase");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        toast("Text copied")
    }
    const handleClear = () => {
        setText('');
        toast("Text is Removed");
    }
  return (
      <div className='container mt-3'>
          <h3>Enter Text to Analyze below</h3>
          <div>
              <textarea id="textUtils" cols="150" rows="10" style={{
                  backgroundColor: mode === 'dark' ? '#003300' : 'white',
                  color: mode === 'dark' ?  'white' : "black"
              }} value = {text} onChange= {handleOnChange}></textarea>
          </div> 
          <button disabled= {text.length === 0} className={`btn btn-${mode === 'dark' ? 'primary' : 'dark'} m-2`} onClick={handleUpperCase}>
              Convert To UpperCase
          </button>
          <button disabled= {text.length === 0} className={`btn btn-${mode === 'dark' ? 'primary' : 'dark'} m-2`} onClick={handleLowerCase}>
              Convert To LowerCase
          </button>
          <button disabled= {text.length === 0} className={`btn btn-${mode === 'dark' ? 'primary' : 'dark'} m-2`} onClick={handleClear}>
              Clear Text
          </button>
          <button disabled= {text.length === 0} className={`btn btn-${mode === 'dark' ? 'primary' : 'dark'} m-2`} onClick={handleCopy}>
              Copy Text
          </button>
          <div className="Utilsfooter">
              <h3>Your text Summary</h3>
              {text.length !== 0 && 
              <div>
              <p>{text.trim().length} word </p>
                      <p>Time to read : {text.trim().length * 0.008} seconds</p>
              </div>
              }
          </div>
    </div>
  )
}
