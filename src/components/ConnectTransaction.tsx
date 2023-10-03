import { Button, Input, Tooltip } from "antd";
import Blockies from "react-blockies";
import { SendOutlined } from "@ant-design/icons";
import { useState } from "react"; // storing data in the state
import { ethers } from "ethers";

export default function App() {
  const [address, setAddress] = useState();
  const [network, setNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [msg, setMsg] = useState();

  const connectButton = async () => {
    const { ethereum } = window;
    if (ethereum.isMetaMask) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      const { name, chainId } = await provider.getNetwork();

      setNetwork(name);
      setChainId(chainId);
      setAddress(accounts[0]);
    } else {
      setMsg("Install MetaMask");
    }
  };

    let blockie;
    if (address && typeof address.toLowerCase === "function") {
      blockie = <Blockies seed={address.toLowerCase()} size={8} scale={4} />;
    } else {
      blockie = <div />;
    }

   async function sendTransaction() {
     let params = [{
       from: "0xc759659E0E4B6207d522b7121742A5cC06C822b5",
       to: "0xc759659E0E4B6207d522b7121742A5cC06C822b5",
       gas: ethers.utils.parseEther("0.006"),
       gasPrice: ethers.utils.parseEther("0.004"),
       value: ethers.utils.parseEther("1"),
    }]

     let result = await window.ethereum.request({method: "eth_sendTransaction" ,params}).catch((err) => {
       console.log(err)
     })
   }  

  return(
    <div className="app">
     <div className="app-header">                        
      <div className="app-details">
      <h1>Connect MetaMask</h1>
      <br />
      <button onClick={connectButton}>Connect Wallet</button>
      <br />
      <div className="network">
      <br />
      <button>{chainId}</button>
      <br />
      <button>{network}</button>
      </div>
      {msg && <p>{msg}</p>}
      </div>
      </div>
      <div className="app-header">
      <div className="app-details">
      <br />
      <h1> 🌏 Flashbots 🔩</h1>
      <p> EYE && GO software group welcomes you to this project for the purpose of creating an Ethereum transaction without making any effort and also forgetting to develop it to the maximum stage. </p>
      <br />
      <Button
       onClick={() => {sendTransaction()}}
        shape="circle"
        icon={<SendOutlined />}
       />
      </div>
     </div>
    </div>
  )
}


