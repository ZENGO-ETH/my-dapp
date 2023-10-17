import { TransactionRequest } from '@ethersproject/abstract-provider'
import { providers, Wallet, utils, ethers, BigNumber } from "ethers";
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";
//import { v4 } from 'uuid'

const GWEI = BigNumber.from(10).pow(9)
const PRIORITY_FEE = GWEI.mul(3)
const LEGACY_GAS_PRICE = GWEI.mul(12)
const BLOCKS_IN_THE_FUTURE = 2

async function main(){

  const ETHEREUM = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"

  const provider = new providers.JsonRpcProvider({url: ETHEREUM }, 1);
  const private_key = "0x4afb75ccd98a3b49f0d4604900659ee674e96741063ae38d82408aa0497f7655"
  const authSigner = new Wallet(private_key, provider);
  const CHAIN_ID = 1

  const address = authSigner.address
  const bal = await provider.getBalance(address);
  const balance = utils.formatEther(bal)

  const flashbotsProvider = await FlashbotsBundleProvider.create(
    provider,
    authSigner,
  )

  //const userStats = flashbotsProvider.getUserStats()
  
  const legacyTransaction = {
    to: address,
    gasPrice: LEGACY_GAS_PRICE,
    gasLimit: 21000,
    data: '0x',
    nonce: await provider.getTransactionCount(address),
    chainId: CHAIN_ID
  }

  const number = provider.on('block', async (blockNumber) => {
    const blocks = await provider.getBlockNumber(blockNumber)
    console.log(blocks)
    //console.log()
  });

  //console.log(number)
}
main();
