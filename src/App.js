//import Main from "./Components/main.js";
import RPC from "./Components/RPC.js";
import "./App.css";
import Connect from "./Components/ConnectWallet.tsx";
import Block from "./Components/Blocks.tsx";
import Balance from "./Components/Balance.tsx";

export default function App(){


 return(
   <div className="app">
    <Connect />
    <Block />
    <Balance />
    <RPC />
   </div>
  );
}
