const HDWalletProvider = require('@truffle/hdwallet-provider');

const Web3 = require('web3');
const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
  'wing need merry leaf pull vast faith acid three fork pencil ladder',
  'https://rinkeby.infura.io/v3/e9bb66d58efe477391d2f091b46c1602'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const contract = await new web3.eth.Contract(abi)
    .deploy({
      data: '0x' + evm.bytecode.object,
      arguments: ['Hi there!'],
    })
    .send({
      from: accounts[0],
      gas: '1000000',
      gasPrice: '5000000000',
    });

    console.log('Contract deployed to', contract.options.address);

};

deploy();

//.send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });
