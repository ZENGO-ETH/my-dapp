import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';
import "./../App.css"

const id = uuidv4()
const JsonRpc = "https://rpc-staging.flashbots.net?bundle=" + id
//console.log(JsonRpc)

class RPC extends Component {
  constructor(props){
    super(props)
     
    // Set initial state
    this.state = {msg : JsonRpc}
     
    // Binding this keyword
    this.handleClick = this.handleClick.bind(this)
  }
 
  handleClick(){
   
    // Changing state
    this.setState({msg : JsonRpc})
  }
   
  render(){
    return (
      <div>
        <h2>Message :</h2>
         
 
<p>{this.state.msg}</p>
 
 
         
        {/* Set click handler */}
      </div>
    )
  }
}
 
export default RPC
