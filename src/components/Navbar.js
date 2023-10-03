import React from "react";
import JSONRPC from "./JSONRPC.js";
import DEBUG from "./DEBUG.js";
import TRANSACTION from "./TRANSACTION.js";
import TESTNET from "./TESTNET.js";

export default function Navbar(){

  return (
    <div className="network">
     <a href="/DEBUG"> DEBUG </a>
     <a href="/JSONRPC"> JSONRPC </a>
     <a href="/TRANSACTION"> TRANSACTION </a>
     <a href="/TESTNET"> TESTNET  </a>
    </div>
  )
}
