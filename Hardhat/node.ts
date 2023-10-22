import axios from "axios";
import { ethers } from "ethers";

async function getBlockNumber() {
  const url = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"
  const provider = new ethers.providers.JsonRpcProvider(url);
  const chainId = await provider.getNetwork()

  function getLargestPossibleReorg() {
    // Mainnet
    if (chainId === 1) {
      return 5;
    }
    // Goerli
    if (chainId === 5) {
      return 5;
    }
  }

  const FALLBACK_MAX_REORG = 200;

  const actualMaxReorg = getLargestPossibleReorg(chainId);
  const maxReorg = actualMaxReorg || FALLBACK_MAX_REORG;

  const latestBlock = await provider.getBlockNumber();
  const lastSafeBlock = latestBlock - maxReorg;

  return lastSafeBlock;

}
