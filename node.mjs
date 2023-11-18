import ethers from "ethers";

async function main(){
  const URL = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"
  const provider = new ethers.providers.JsonRpcProvider(URL);
  const signer = provider.getSigner()
  const Block = await provider.getBlockNumber()

  //console.log(signer)
  console.log(Block)
}

main();
