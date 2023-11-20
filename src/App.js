//import Main from "./Components/main.js";
//import Time from "./Components/Timeline.js";
//import page from "./Components/pages.js";
//import Swap from "./Components/Swap.js";
import RPC from "./Components/RPC.js";
import "./App.css";
import Connect from "./Components/ConnectWallet.tsx";
import Block from "./Components/Blocks.tsx";
import Balance from "./Components/Balance.tsx";
import TX from "./Components/Transaction.js";

export default function App(){


 return(
   <div className="app">
    <Connect />
    <Block />
    <Balance />
    <RPC />
    <TX />
   </div>
  );
}
