import "./main.json";
import Rpc from "./Components/ConnectTransaction.tsx";
import Connect from "./Components/ConnectWallet.tsx";

function App() {
  return (
   <div vlassName="body">
    <div className="app">
     <center>
      <Connect />
      <Rpc />
     </center>
    </div>
   </div>
  );
}

export default App;
