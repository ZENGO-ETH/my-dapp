import "./../App.css"
import { Button, Input, Tooltip } from "antd";
import Blockies from "react-blockies";
import { SendOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react"; // storing data in the state
import { ethers } from "ethers";

export default function App() {
 const block = function main(){ 
    <Blockies
      seed="Jeremy"
      size={10}
      scale={3}
      color="#dfe"
      bgColor="#ffe"
      spotColor="#abc"
      className="identicon"
    />
   }
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setSigner(provider.getSigner());
        setFcContract(faucetContract(provider));
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setSigner(provider.getSigner());
          setFcContract(faucetContract(provider));
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  return (
   <div>
    <nav className="navbar">
     <div className="container">
      <div className="navbar-brand">
       <h1 className="navbar-item is-size-4">Ocean Token (OCT)</h1>
        </div>
         <div id="navbarMenu" className="navbar-menu">
         <div className="navbar-end is-align-items-center">
          <h1> EYE && GO </h1>
           <Button
            className="button is-white connect-wallet"
            onClick={connectWallet}
            >
            <span className="is-link has-text-weight-bold">
            {walletAddress && walletAddress.length > 0
            ? `${block} ${walletAddress.substring(
            0,
            6
           )}...${walletAddress.substring(38)}`
           : "Connect Wallet"}
           </span>
          </Button>
         </div>
        </div>
       </div>
      </nav>
     </div>
  );
}


