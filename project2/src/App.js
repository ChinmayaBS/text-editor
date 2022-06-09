import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from './About';
import {HashRouter,Routes,Route} from 'react-router-dom';
import React,{useState} from 'react';
import Alert from './Alert';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      alertMode(" Dark mode enabled",'success');
      document.title="TextFormat-Dark Mode";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      alertMode(" Light mode enabled",'success');
      document.title="TextFormat-Light Mode";
    }
  }
  const alertMode=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <HashRouter>
      <Navbar Mode={Mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-lg-10 offset-1'>
            <Routes>
              <Route exact path="/" element={<TextForm alertMode={alertMode} heading="Enter the Text To Analyze below" Mode={Mode}/>}/>
              <Route exact path="/About" element={<About/>}/>
            </Routes>
            </div>
          </div>
        </div>
    </HashRouter>
    </>
  );
}

export default App;
