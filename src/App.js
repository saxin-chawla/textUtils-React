import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
// import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() { 
  const [mode , setMode] = useState("light");
  // const [alert , setAlert] = useState(null);

  // function showAlert(message,type){
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  //   setTimeout(()=>{
  //     setAlert(" ")
  //   },2000)
  // }
  function toggleMode(){
    if(mode=== "light"){
      setMode("dark");
      document.body.style.backgroundColor="grey";
      // showAlert("Dark Mode Has Enabled", "success")
    }
    else{
      setMode("light"); 
      document.body.style.backgroundColor="white";
      // showAlert("Light Mode Has Enabled", "success")
    }
  }
  function bluish() {
    setMode("blue"); 
    document.body.style.backgroundColor="blue";
  }
  function redish() {
    setMode("red"); 
    document.body.style.backgroundColor="red";
  }
  function greyish() {
    setMode("grey"); 
    document.body.style.backgroundColor="grey";
  }
  function yellowish() {
    setMode("yellow"); 
    document.body.style.backgroundColor="yellow";
  }
  // function light() {
  //   setMode("light"); 
  //   document.body.style.backgroundColor="white";
  // }
  // function dark() {
  //   setMode("dark"); 
  //   document.body.style.backgroundColor="black";
  // }
  
  
  function cyanish() {
    setMode("cyan"); 
    document.body.style.backgroundColor="cyan";
  }
  function greenish() {
    setMode("green"); 
    document.body.style.backgroundColor="green";
  }
  return (
    <>
    {/* <Router> */}
      {/* <Alert alert={alert} /> */}
      
      {/* <Routes> */}
          {/* <Route exact path='/about' element={<About />}/> */}
          {/* <Route exact path='/' element={}/> */}
        {/* </Routes> */}
    {/* </Router>   */}
    <Navbar title='textUtils' mode={mode} togglemode={toggleMode} bluish={bluish} yellowish={yellowish} greyish={greyish} redish={redish} cyanish={cyanish} greenish={greenish} />
    <TextForm heading=" Enter the text to Analyze" mode={mode} />
    </>
  );
}

export default App;
