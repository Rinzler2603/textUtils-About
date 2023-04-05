// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './comp/About';
import Navbar from './comp/Navbar';
// import Textform from './comp/Textform';
import Alert from './comp/Alert';



// let name="Hardik";

function App() {
  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='rgb(23 33 88)';
      showAlert("dark Mode has been enabled","success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled","success")
    }
  }
  

  
    
  

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    <div className="container">
    <br />
    {/* <Textform showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/> */}
    <About mode={mode}/>
    </div>
   
    </>
  );
}

export default App;
