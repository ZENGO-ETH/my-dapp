import { Button, Input} from "antd";
import axios from "axios";
import { useState } from "react";
//import "./style.css";
const convert = require("ethereum-unit-converter");

function App() {
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const apikey = "CCJN4ZFFES6UJGZ9EAECF6DAYNIWPS8ZTF"
  const getBalance = async () => {
    const result = await axios(
      `https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apikey}`
    );

    const weiBalance = result.data.result;
    const etherBalance = convert(weiBalance, "wei", "ether");

    console.log(etherBalance)

    setBalance(`${etherBalance}`);
  };

  return (
   <div className="app">
    <br />
   <div className="balance">
    <h1>
     Get 💲 Balance 
    </h1>
   </div>
    <br />
    <div className="wrapper">
    <div className="credit-card w-full lg:w-1-2 sm:w-auto shadow-lg mx-auto ">
     <main className="mt-4 p-4">
       <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
         <div class="navbar-header">
	
        <h1>Get Ξther Balance</h1>

        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Enter the address"
          required={true}
        />
      <div className="fainal">
        <Button
          onClick={getBalance}
          disabled={!address || address.substring(0, 2) !== "0x"}
        >
          Find balance
        </Button>
       </div>
        <br />
        <div className="app__balance">
          <p> 🔎 Balance: {balance} </p>
           </div>
          <br />
         </div>
        </div>
       </nav>
      </main>
     </div>
    </div>
   </div>
  );
}

export default App;
