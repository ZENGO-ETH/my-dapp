import "./App.css";
import React from 'react'; 
//import "./main.json";
import Rpc from "./Components/ConnectTransaction.tsx";
import Connect from "./Components/ConnectWallet.tsx";

function App() {
  return (
   <div vlassName="body">
     <center>
       <div>
            <nav class="navbar background"> 
                <ul class="nav-list"> 
                    <li><a href="Rpc">Courses</a></li> 
                    <li><a href="Connect">Tutorials</a></li> 
                    <li><a href="#jobs">Jobs</a></li> 
                    <li><a href='#student'>Student</a></li> 
                </ul>
                <div class="rightNav"> 
                    <input type="text" name="search" id="search" />
                    <button class="btn btn-sm">Search</button>
                </div>
            </nav>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
     </center>
   </div>
  );
}

export default App;
