require('@nomicfoundation/hardhat-toolbox');
require("hardhat-deploy");
require('@nomiclabs/hardhat-etherscan')
require("hardhat-gas-reporter")
require("@nomicfoundation/hardhat-chai-matchers")
require("dotenv").config();


const goerli_rpc = process.env.goerli_rpc_url
const goerli_pk = process.env.goerli_pk
const api_key = process.env.api_key
const coinmarketcap = process.env.coinmarketcap

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks : {
    goerli: {
      url:  goerli_rpc , 
      accounts: [goerli_pk,],
      chainId: 5,
      blockConfirmations : 6
    },
    
  },
  gasReporter : {
    enabled: true,
    outputFile : "gas_report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap : coinmarketcap,
  },
  etherscan : {
    apiKey : api_key,
  },
};
