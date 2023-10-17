//import "./../App.css";
import Blockies from "react-blockies";
import { Button, Input} from "antd";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
//import { dotenv } from "dotenv";
//import { wretch } from "wretch";
//import { Web3 } from "web3";
//import  ethereum from "ethereumjs-tx";
//import { delay } from "delay";
//import { fetch } from "node-fetch";

export default function Home() {

  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();

  const URL = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
  }, [walletAddress]);

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_requestAccounts", []);
        /* get signer */
        setSigner(provider.getSigner());
        /* local contract instance */
        setFcContract(faucetContract(provider));
        /* set active wallet address */
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* get provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* get accounts */
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* get signer */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /* set active wallet address */
          setWalletAddress(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  const txhash = async function sendTransaction() {

  let params = [{
   "from":"0x4dd64C55C958Ba586263FB775AE6618171573E1d",
   "to":"0xc759659E0E4B6207d522b7121742A5cC06C822b5",
   "gas": ethers.utils.parseUnits("0.00021", "ether"),
   "gasPrice": ethers.utils.parseUnits("0.00025", "ether"),
   "value": ethers.utils.parseUnits("0.5", "ether"),
  }]

  let hash = await window.ethereum.request({metho: "eth_sendTransaction", params}).catch((err) => {
   console.log(err)
  })
}
  return (
     <div className="app">
      <div className="app-header">
       <h1>  ZENGO-ETH TOKEN </h1>
	<br />
        <Button
          onClick={connectWallet}
         >
         {walletAddress && walletAddress.length > 0
         ? `${walletAddress.substring(
         0,
         6
         )}...${walletAddress.substring(38)}`
         : "Connect Wallet"}
          </Button>
	    <br />
 	  <br />
          <Button> {URL} </Button>
          <br />
	  <br />
	  <Button onClick={txhash}> TX </Button>
             </div>
              </div>
   );
  }
