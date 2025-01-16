import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase","Success ");
    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase","Success");
    }

    const handleClClick = ()=>{
        // console.log("UpperCase was clicked")
        let newText= "";
        setText(newText);
        props.showAlert("Clear Text","Success");
    }
    const handleSaveClick = () => {
        console.log("Text has been saved:");
        localStorage.setItem("savedText", text);
        props.showAlert("Save","Success");
    };
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleSpaceClick = ()=>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra spaces","Success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }

    // const [text, setText] = useState('Enter Text here');
    const [text, setText] = useState('');


    //text = new text        - wrong wAY
    //setText('new Text')     - Right way
  return (
    <>
    <div className = "container" style={{color :props.mode ==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
            
            <textarea className="form-control" value = {text} onChange ={handleOnChange} id="mybox" rows="6" style= {{backgroundColor:props.mode ==='dark'?'#474a5f':'white',color:props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled = {text.length ===0} className="btn btn-primary my-2" onClick ={handleUpClick}>Convert To UpperCase</button>
        <button disabled = {text.length ===0} className="btn btn-primary mx-2" onClick ={handleLoClick}>Convert To LowerCase</button>
        <button disabled = {text.length ===0} className="btn btn-danger mx-2" onClick ={handleClClick}>Clear All</button>
        <button disabled = {text.length ===0} className="btn btn-success my-2" onClick={handleSaveClick}>Save Text</button>
        {<button disabled = {text.length ===0} className="btn btn-success mx-2" onClick={handleCopy}>Copy Text</button>}
        <button disabled = {text.length ===0} className="btn btn-success mx-2" onClick={handleSpaceClick}> Remove Extra Space</button>




    </div>
    <div className="container mt-3" style={{color :props.mode ==='dark'? 'white':'black'}}>
        <h5>Your Text Summery</h5>
        <p>{text.split(/\s+/).filter((element) =>{return element.length !==0}).length} words, {text.length}characters</p>
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length !==0}).length} Minutes Read</p>
        <h5>Preview</h5>
        <p>{text.length>0 ?text :"Enter something the preview it here"}</p>
    </div>
    </>
  )
}
