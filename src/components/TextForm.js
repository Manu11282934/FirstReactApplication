import React,{useState} from 'react'





function TextForm(props) { 
    
const change_text = (event)=>{
    setText(event.target.value)
}

const Upper_text = ()=>{
let Upper_text=Text.toUpperCase();
setText(Upper_text);
props.showAlert( "success","converted to Upper case");
}

const Lower_text = ()=>{
    let Lower_text=Text.toLowerCase();
setText(Lower_text);
props.showAlert( "success","converted to Lower case");
    
}
const Clear_text = ()=>{   
    let Clear_text="";
setText(Clear_text);
props.showAlert( "success","cleared the text");
    
}
const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert( "success","Copied to clip board");


}

const[Text,setText]=useState("")

    return (
        <>
        <div className="container" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        
        <div className="mb-3" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}>        
        <textarea style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}} className="form-control" onChange={change_text} value={Text} id="MyBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={Upper_text} >UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={Lower_text}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={Clear_text}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        
        <div className="container my-3" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{Text.split(" ").length} words and {Text.length} characters</p>
            <h2>PreView</h2>
            <p>{Text}</p>
        </div>
       
          
        
        </div>
        </>
    )
}

export default TextForm
