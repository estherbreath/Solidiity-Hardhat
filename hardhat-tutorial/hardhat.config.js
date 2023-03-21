require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "759a90d829e787f9fc5ea8de4463b8399560ab7359e94eff22c5a50fe0a02860"
const ALCHEMY_API_KEY = "https://eth-goerli.g.alchemy.com/v2/Pkk4jEohxyMhC5oRL-TWScdolAZR9_NB"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY,
      accounts: [PRIVATE_KEY]
    }
  }
};
