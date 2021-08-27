const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');

const inboxSource = fs.readFileSync(inboxPath, 'utf8');

//const compile = solc.compile(inboxSource, 1).contracts[':inbox'];

//module.exports = compile;

const input = {
  language: 'Solidity',
  sources: {
    'inbox.sol': {
      content: inboxSource,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

/*console.log(
  JSON.parse(solc.compile(JSON.stringify(input))).contracts['inbox.sol'][
    'Inbox'
  ]
);*/

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'inbox.sol'
]['Inbox'];
