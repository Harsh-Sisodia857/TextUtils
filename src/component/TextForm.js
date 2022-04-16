import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowercase","success");

    }
    const handleClearClick = () =>{
      let newText = "";
      setText(newText);
      props.showAlert("Text has been removed","success");

    }
    const Copy = () =>{
      let text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success");

    }
    const handleExtraSpace = () =>{
      let newtext = text.split(/[ ]+/).join(" ");
      setText(newtext);
      props.showAlert("Extra space removed","success");
    }
    const [text, setText] = useState('');
  return (
   <>
<div style={{color: props.mode==='dark'?'white':'black'}}>
<h2>{props.heading}</h2>
  <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: props.mode ==='dark'? 'Grey' : 'white', color:props.mode === 'dark'?'white': 'black'}}  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <textarea className="form-control" style={{backgroundColor: props.mode ==='dark'? 'Grey' : 'white' , color:props.mode === 'dark'?'white': 'black'}} id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<div className="container">
<button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary" onClick={handleLowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary" onClick={Copy}>Copy</button>
<button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>

</div>

<div>
  <h1 className='my-3'>Your Text Summary</h1>
  <p>No. of Words {text.split(" ").length}</p>
  <p>Time to read : {text.split(" ").length * 0.008}</p>
</div>
</div>
   </>
  )
}
