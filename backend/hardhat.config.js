require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20", // or whichever version you need
  networks: {
    hardhat: {},
    // add testnet if needed
    sepolia: {
      url: process.env.ALCHEMY_API_URL || "",
      accounts: [process.env.PRIVATE_KEY].filter(Boolean),
    },
  },
};
