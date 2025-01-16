// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react'


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode ,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);

  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type,
    });
    setTimeout(() => {
      setAlert(null);
    },2000);
  };

  const toggleMode = ()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = "#0b3a6a";
    showAlert("Dark mode has been enabled","success");

    // document.title = 'Textutils- Dark Mode';
    // setInterval(() => {
    //   document.title = 'Textutils is Amazing Mode';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install Tesxutils';
    // }, 1500);

    } else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }


  return (
    <>
    {/* <Router> */}
     <Navbar title = "Webpage" aboutText = "About webpage" mode ={mode} toggleMode={toggleMode} /> 

     <Alert alert={alert}/>
     
    <div className = "container">
      {/* <Routes>
            <Route exact path="/about"
            element={<About mode ={mode} />}
            />
            <Route exact path="/"
              element ={<TextForm  showAlert={showAlert} heading ="Enter the text analyze"  mode ={mode}/>}
            />
      </Routes> */}
      <TextForm  showAlert={showAlert} heading ="Enter the text analyze"  mode ={mode}/>
    </div>
   {/* </Router> */}

    </>
  );
}

export default App;


