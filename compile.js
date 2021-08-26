const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const inboxSource = fs.readFileSync(inboxPath, 'utf-8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
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

console.log(
  JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'][
    'Inbox'
  ]
);

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Inbox.sol'
]['Inbox'];
