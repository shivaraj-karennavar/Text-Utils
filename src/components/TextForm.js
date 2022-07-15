import React, {useState} from 'react'


export default function TextForm(props) {
  
    let [text,setText]=useState("enter the text here");
    const handleUpClick=()=>{
        console.log("Uppper case was clickked"+text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log('on change');
        setText(event.target.value)
    }
    const handleLoClick=()=>{
      alert("converted to lowercase")
      let newTextToLower=text.toLowerCase();
      setText(newTextToLower)
    }
    
    

  return (
    <div>
     <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn-btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn-btn-primary' onClick={handleLoClick}>convert to lowercase</button>
</div>
    </div>
  )
}
