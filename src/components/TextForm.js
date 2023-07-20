import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLowClick = () =>{
        console.log("Lowercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleClearClick = () =>{
        setText("")
        props.showAlert("Text Cleared", "success")
    }
    const handleExtraSpacesClick = () =>{
        let newText = text.split(" ").filter((a)=>{return a!==""}).join(" ")
        setText(newText)
        props.showAlert("Extra Spaces Cleared", "success")
    }
    const handleOnChange = (event) =>{
        console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
  return (
    <>
        <div className="container">
            <h2>{props.heading}</h2>
            <div className="mb-3 my-3">
                <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"white":"rgb(76 85 94)",color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-secondary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-secondary mx-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container">
            <h2>Your Text Summary Here</h2>

            <p>{text.split(" ").filter((a)=>{return a!==""}).length} words and {text.length} character</p>

            <p>{0.008*text.split(" ").filter((a)=>{return a!==""}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text || "Enter Text in above box to preview here"}</p> 
        </div>
    </>
  )
}
