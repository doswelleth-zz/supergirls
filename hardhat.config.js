require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { STAGING_ALCHEMY_KEY, PROD_ALCHEMY_KEY, PRIVATE_KEY } = process.env;
const { ETHERSCAN_KEY } = process.env.ETHERSCAN_KEY;

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY
  }
};
