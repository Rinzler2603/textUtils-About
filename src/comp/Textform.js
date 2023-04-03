import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Your Text has been converted to uppercase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Your Text has been converted to lowercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState("");

    return (
        <>
        <div>
            <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea2" style={{height: 100}}></textarea>

                <button className="btn btn-primary my-2 mx-2"onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
            </div>

        </div>
        <div className="container " style={{color:props.mode==='light'?'black':'white'}}>
            <h2 style={{color:props.mode==='light'?'black':'white'}}>Your text summary</h2>
            <p >{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
            <br />
            <h3>Text Preview</h3>
            <p>{text.length>0?text:"Type Something to Preview Here"}</p>
        </div>
        </>
    )
}
