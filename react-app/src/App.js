//import CircularProgress from '@mui/joy/CircularProgress';
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Connect from "./Components/ConnectWallet.tsx"

function App() {
  const chainId = 1
  const mnemonic = "answer cross jacket refuse meat zebra celery tuition begin segment judge bright";

  const URL = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"
  const provider = new ethers.providers.JsonRpcProvider(URL);
  async function block(){
  const blockNumber = await provider.getBlockNumber()
  
  console.log(blockNumber)
  const data = JSON.stringify({
    checked: false,
    allowUnlimitedContractSize: false,
    mining: {
      auto: true,
      interval: 0,
    },
    accounts: {
      // eslint-disable-next-line object-shorthand
      mnemonic: mnemonic,
    },
    options: {
      hardhat: {
        getStackTraceFailuresCount: true,
        addCompilationResult: true,
        impersonateAccount: true,
        intervalMine: false,
        getAutomine: false,
        stopImpersonatingAccount: true,
        reset: false,
        setLoggingEnabled: true,
        setMinGasPrice: false,
        dropTransaction: false,
        setBalance: false,
        setCode: false,
        setNonce: false,
        setStorageAt: false,
        setNextBlockBaseFeePerGas: false,
        setCoinbase: false,
        mine: true,
      },
      evm: {
        mine: true,
        increaseTime: true,
        setNextBlockTimestamp: true,
        revert: true,
        snapshot: true,
        setAutomine: false,
        setIntervalMining: false,
        setBlockGasLimit: true,
      },
      extra: {
        overrideGas: true,
      },
    },
    forking: {
      chainId,
      blockNumber,
    },
  });

 }

  block()

  return (
   <div vlassName="body">
     <center>
      <Connect />
     </center>
   </div>
  );
}

export default App;
