import React from "react";
import ConnectTransaction from "./ConnectTransaction.tsx";
import ConnectWallet from "./ConnectWallet.tsx";

export default function DEBUG(){
  return (
    <div className="app">
     <div className="app-header">
      <ConnectWallet />
      <ConnectTransaction />
     </div>
    </div>
  );
}
