import { config as dotEnvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",

/*
  //const ACCOUNTS = process.env.ACCOUNT;
  networks: {
    hardhat: {
      inject: true,
      accounts: { mnemonic: process.env.ACCOUNT},
      allowUnlimitedContractSize: true,
      chainId: 1,
      blockConfirmations: 6,
    },
  },
*/
};

export default config;
