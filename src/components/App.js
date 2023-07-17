import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  function showPara(){
     document.getElementById('para').style.display = "block"
  }

  return (
    <div className="App" id="main">
       <p className="hide show" id="para" style={{display: "none"}}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
       <button id="click" onClick={showPara}>Click</button>
    </div>
  );
}

export default App
