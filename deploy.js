const HDWalletProvider = require("@truffle/hdwallet-provider");

const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'wing need merry leaf pull vast faith acid three fork pencil ladder',
  'https://rinkeby.infura.io/v3/e9bb66d58efe477391d2f091b46c1602'
);

const web3 = new Web3(provider);

//.send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
  