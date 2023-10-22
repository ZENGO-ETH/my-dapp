import { TransactionRequest } from '@ethersproject/abstract-provider'
import { providers, Wallet, utils, ethers, BigNumber } from "ethers";
import { FlashbotsBundleProvider, FlashbotsBundleResolution} from "@flashbots/ethers-provider-bundle";
//import { v4 } from 'uuid'

const GWEI = BigNumber.from(9).pow(10)
const PRIORITY_FEE = GWEI.mul(3)
const LEGACY_GAS_PRICE = GWEI.mul(15)
const BLOCKS_IN_THE_FUTURE = 2

async function main(){

  const ETHEREUM = "https://rpc-staging.flashbots.net?bundle=5a08282e-52cb-43a0-ac72-b55b70d5b5aa"

  const provider = new providers.JsonRpcProvider({url: ETHEREUM }, 1);
  //const authSigner = Wallet.createRandom()
  const private_key = "0x4afb75ccd98a3b49f0d4604900659ee674e96741063ae38d82408aa0497f7655"
  const wallet = new Wallet(private_key, provider);
  const CHAIN_ID = 1

  const address = wallet.address
  console.log(" 🌐 address: "+address)
  const bal = await provider.getBalance(address);
  const balance = utils.formatEther(bal)
  console.log("💲balance: "+balance)

  const flashbotsProvider = await FlashbotsBundleProvider.create(
    provider,
    wallet,
  )

  const userStats = flashbotsProvider.getUserStats()
  
  const legacyTransaction = {
    to: address,
    gasPrice: LEGACY_GAS_PRICE,
    gasLimit: 25000,
    data: '0x',
    nonce: await provider.getTransactionCount(address),
    chainId: CHAIN_ID
  }

  const number = provider.on('block', async (blockNumber) => {
    const block = await provider.getBlock(blockNumber)
    let eip1559Transaction: TransactionRequest
    if (block.baseFeePerGas == null) {
      console.warn('This chain is not EIP-1559 enabled, defaulting to two legacy transactions for demo')
      eip1559Transaction = { ...legacyTransaction }
      // We set a nonce in legacyTransaction above to limit validity to a single landed bundle. Delete that nonce for tx#2, and allow bundle provider to calculate it
      delete eip1559Transaction.nonce
    } else {
      const maxBaseFeeInFutureBlock = FlashbotsBundleProvider.getMaxBaseFeeInFutureBlock(block.baseFeePerGas, BLOCKS_IN_THE_FUTURE)
      eip1559Transaction = {
        to: address,
        type: 2,
        maxFeePerGas: PRIORITY_FEE.add(maxBaseFeeInFutureBlock),
        maxPriorityFeePerGas: PRIORITY_FEE,
        gasLimit: 21000,
	value: 1,
        data: '0x',
        chainId: CHAIN_ID
      }
    }

    const signedTransactions = await flashbotsProvider.signBundle([
      {
        signer: wallet,
        transaction: legacyTransaction
      },
      {
        signer: wallet,
        transaction: eip1559Transaction
      }
    ])

    //console.log(signedTransactions)
    const targetBlock = blockNumber + BLOCKS_IN_THE_FUTURE
    const simulation = await flashbotsProvider.simulate(signedTransactions, targetBlock)
    console.log(simulation)
  })
 //console.log(number)
}
main();
