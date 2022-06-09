import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("");
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUppercase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.alertMode(" Converted to Uppercase","success");
     }
     const handleLowercase=()=>{
         let newText=text.toLowerCase();
         setText(newText);
         props.alertMode(" Converted to Lowercase","success");
     }
     const handleClearText=()=>{
        let newText="";
        setText(newText);
        props.alertMode(" text cleared","success");
    }
    const handleCopyText=()=>{
        let copytext=document.getElementById("myBox");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
        props.alertMode(" text coppied","success");
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alertMode(" Removed extra space","success");
    }
  return(
    <>
        <div className="container mb-3"style={{color:props.Mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <textarea className="form-control mb-2" value={text} 
            style={{backgroundColor:props.Mode==='dark'?'gray':'white',color:props.Mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleUppercase}>Convert to UpperCase</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleLowercase}>Convert to LowerCase</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpace}>Remove Exta Space</button>
        </div>
        <div className="container" style={{color:props.Mode==='dark'?'white':'black'}}>
            <h3>Text Summary</h3>
            <p><b>{text.split(" ").length-1}</b> words and <b>{text.length}</b> Characters</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:<small>Enter something in text box to preview here</small>}</p>
        </div>
    </>
  );
}
