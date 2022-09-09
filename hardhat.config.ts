import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-waffle"
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY!]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
