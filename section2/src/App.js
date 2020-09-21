import React from 'react';
import NavBar from "./Components/NavBar";
//import BrowserRouter from "react-router-dom";
import './App.css';

class App extends React.Component{
  
  render(){
    return(
      <div className = "App">
        
          <NavBar/>
        
      </div>
    )
  }
}

export default App;
