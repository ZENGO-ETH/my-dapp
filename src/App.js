import TRANSACTION from "./components/TRANSACTION.js";
import TESTNET from "./components/TESTNET.js";
import DEBUG from "./components/DEBUG.js";
import JSONRPC from "./components/JSONRPC.js";
import Navbar from "./components/Navbar.js";
import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="app">
     <div className="app-header">
      <Navbar />
       <Main>
        <Routes>
         <Route exact path="/DEBUG" element={<DEBUG />} />
         <Route exact path="/TRANSACTION" element={<TRANSACTION />} />
         <Route exact path="/TESTNET" element={<TESTNET />} />
         <Route exact path="/JSONRPC" element={<JSONRPC />} />
        </Routes>
       </Main>
     </div>
    </div>

  );
}

export default App;
