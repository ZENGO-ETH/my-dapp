//import "./style.css";
import { Button, Input} from "antd";
import { useState } from "react";
import { dotenv } from "dotenv";

export default function App(){
  const [blockNumber, setBlockNumber] = useState(null);

  const ethers = require('ethers')
  const API_KEY = process.env.REACT_APP_API_KEY;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const infuraProvider = new ethers.providers.InfuraProvider(
    'mainnet',
    API_KEY
  );
  
  const handleButton1 = async () => {
    const latest_block = await provider.getBlockNumber('latest');
    setBlockNumber(latest_block);
  }

  
  return (
   <div className="block">
    <h1>Get Ξther BlockNumber </h1>
    <Button onClick={handleButton1}> Latest_Block </Button>
    <p> {blockNumber} </p>
    <br />
   </div>
  );
}
