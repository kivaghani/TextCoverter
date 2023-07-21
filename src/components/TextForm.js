import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpClick = ()=>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success"); 
    // setText("You have clicked on handleUpClilcked ")
}    
const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success"); 
}

const handleClearClick = ()=>{
  let newText = '';
  setText(newText);
  props.showAlert("Text Cleared!", "success"); 
}


const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value)
}  

const handleCopy = () => {
  // var text = document.getElementById("myBox");
  // text.select();
  navigator.clipboard.writeText(text);
  // document.getSelection().removeAllRanges();
  props.showAlert("Copy to Clipboard!", "success"); 
}

const handleExtraSpaces = () => {
   let newText  = text.split(/[ ]+/);
   setText(newText.join(" "));
   props.showAlert("Extra Spaces Removed!", "success"); 
}

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
          
          <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
         </div> 
         <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the TextBox above to previewit here"}</p>
    </div>
    </>
  )
}
 