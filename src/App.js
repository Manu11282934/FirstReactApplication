import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';


function App() {
  const[Modeenabled,setModeEnabled]=useState('light');
  const [alert, setalert] = useState(null);
//
  const showAlert=(type,message)=>
  {
    setalert(
      {
        msg:message,
        type:type,
      });
      setTimeout(() => {
        setalert(null);
      },1500);
    
  }

 const DarkMode_handler=()=>
 {   
    if(Modeenabled ==='light')
    {
      document.body.style.backgroundColor='grey';
      setModeEnabled('dark');
      showAlert('success','Dark mode enabled')
    }
    else{
       document.body.style.backgroundColor='white';
      setModeEnabled('light');
      showAlert('success','Light mode enabled')
    }
 }

  return (   
    <>
       <Navbar title="ManoHari" HomeText="Home" AboutText="About" mode={Modeenabled} toggelhandler={DarkMode_handler}></Navbar>
       <div className="container my-3">
         <Alert alert={alert}/>
          <TextForm heading="enter text to analyze below" mode={Modeenabled} showAlert={showAlert}/>
          {/* <About/> */}
       </div>
      
    </>

  
  );
}

export default App;
