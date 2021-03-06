import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

const App = () => {
    return (
       <div className="min-h-screen">
         <div className="gradient-bg-welcome">
           <Navbar />
           <Welcome />
         </div>
       </div>
    );
};

export default App;