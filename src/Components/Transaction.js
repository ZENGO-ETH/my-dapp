import { useState } from "react";
import { Button, Input} from "antd";
//import ethers from "ethers";

export default function TX(){
   const ethers = require("ethers")
   const [txSent, setTxSent] = useState(null);
   const [txSentInfura, setTxSentInfura] = useState(null);
   

   const sendTransaction = async (address, amount, signer=null) => {
    console.log(address, amount);
    if (signer==null){
      if (!window.ethereum)
        console.error("No wallet found!");
      else {
        await window.ethereum.send("eth_requestAccounts");
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
          to: address,
          value: ethers.utils.parseEther(amount),
        });
        console.log("tx", tx);
        setTxSent('Transaction initiated! Tx hash: ' + tx.hash);
      }
    }
  }

  const handleSubmitWeb3 = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const address = data.get('address');
    const amount = data.get('amount');
    sendTransaction(address, amount);
  }

  return(
   <div className="app">
    <div className="app-header">
    <br />
   <div className="txhash">
    <h1>
     Send 🎁 Transaction
    </h1>
   </div>
    <br />
    <div className="wrapper">
     <div className="credit-card w-full lg:w-1-2 sm:w-auto shadow-lg mx-auto ">
      <main className="mt-4 p-4">
       <h1>
        Get Ξther Send Transaction
       </h1>
        <div>
	 <form onSubmit={handleSubmitWeb3}>
          <Input type="text" name="address" placeholder='Recipient Address' />
          <br />
	  <br />
          <Input type="text" name="amount" placeholder='Amount (ETH)' />
          <br />
          <br />
          <Input type="submit" value="Send" />
         </form>
        <p>{txSent}</p>
        </div>
       </main>
      </div>
     </div>
    </div>
   </div>
  );
}
