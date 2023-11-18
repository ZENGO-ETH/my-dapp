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

    setBalance(`ETH ${etherBalance}`);
  };

  return (
    <div className="app">
      <main className="app__main">
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
          <p> {balance} </p>
        </div>
      </main>
    </div>
  );
}

export default App;
