import pkg from 'dotenv';
import ethers from "ethers";

const API_KEY = process.env.REACT_APP_API_KEY;


async function main(){
  const provider = new ethers.providers.InfuraProvider(
    'mainnet',
    API_KEY
  );

  const bal = await provider.getBalance("ethers.eth")
  const balance = ethers.utils.formatEther(bal)
  console.log(balance)
}

main();
