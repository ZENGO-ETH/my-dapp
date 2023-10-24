import "./App.css";
import axios from 'axios';
import React from 'react';
import { ethers } from "ethers";
import Connect from "./Components/ConnectWallet.tsx"

function App() {


  return (
   <div vlassName="body">
     <center>
      <Connect />
     </center>
   </div>
  );
}

export default App;
