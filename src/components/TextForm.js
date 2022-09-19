import React , {useState} from 'react'
export default function TextForm(props) {
  const [text , setText] = useState("Enter Your Text Here...");
  function onClickHandle(){
      console.log("onClickHandle is clicked");
      let val = text.toUpperCase();
      setText(val);
      props.showAlert("Converted to UpperCase" , "success")
      
    // console.log()
  }
  function onChangeHandle(event){
    setText(event.target.value);
  }
  let words = text.split(" ").length;
  if(text==="" || text.endsWith(" ")){
    words = words-1;
  }
  return (
    <>  
      <div className="container">
        <div>
            <div className={`mb-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
                <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                <textarea className={`form-control bg-${props.mode} text-${props.mode === "dark" ? "light" : "dark"}`} id="myBox" rows="16" onChange={onChangeHandle}  value={text}></textarea>
            </div>
            <button className="btn btn-primary" onClick={onClickHandle}>Convert to UpperCase</button>
        </div>
        <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
            <h2>Text Summary</h2>
            <p> {words} world and {text.length} charachters</p>
            <p> {words * 0.008}  Time can take to read  </p>
        </div>
      </div>  
      

    </>
  )
}
