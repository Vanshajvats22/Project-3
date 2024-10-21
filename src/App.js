import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import './App.css'

function App() {
  return (
    <div className='box'>
      <div className='left-box'>
        <Sidebar />
      </div>
      <div className='right-box'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
