import React from "react";
import './App.css';
import Address from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";
import ProfilPhoto from "./Components/Profile/ProfilPhoto";


function App() {
  return (
    <div className="App">
   <ProfilPhoto />
    <FullName/>
    <Address/>

    </div>
  );
}

export default App;
