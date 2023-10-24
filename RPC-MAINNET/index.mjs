import axios from 'axios';
import ethers from "ethers";

const URL = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"
const provider = new ethers.providers.Web3Provider(URL);
console.log(provider)

const interface = axios.create({
  baseURL = "http://localhost:3000",
  axios.get({
    response = result.getURL 
    console.log(resopnse)
   })

})

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'MyCustomHeader1': 'nodejs.com',
        'MyCustomHeader2': 'been.com'
    }
});

