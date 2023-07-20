import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link 
// }  from "react-router-dom";





function App() {
  const [mode,setMode]=useState("light")
  const [alert,setAlert]=useState(null)

  const showAlert = (msg,type)=>{
      setAlert({
        msg:msg,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
  }

  const toggleMode = () => {
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="rgb(50 56 62)"
      document.body.style.color="lightgrey"
      showAlert("Dark Mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light Mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
  <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Routes> */}
        {/* <Route exact path='/about' element={<About/>}/> */}
               
        {/* <Route exact path='/' element={ <TextForm heading="Enter Your text to analyze" showAlert={showAlert} mode={mode}/>}/> */}
        <TextForm heading="Enter Your text to analyze" showAlert={showAlert} mode={mode}/>
      {/* </Routes> */}
      </div>
    {/* </Router> */}
  </>
  );
}

export default App;
