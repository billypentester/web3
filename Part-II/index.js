const Web3 = require('web3');
const Contract = require('web3-eth-contract');

const abi = require('./abi.json');

// set provider

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
Contract.setProvider('HTTP://127.0.0.1:7545');

// create a new instance of the contract

const contract = new Contract(abi, '0xE75a0e88E001A56e094D79fcbf2EA22bF351723c')

// call the contract method

contract.methods.setCandidate("bilal").send({from:web3.eth.accounts[0]}).then(function(result) {
    console.log(result);
})

// contract call for variable

contract.methods.candidateName().call({from:web3.eth.accounts[0]}).then(function(result) {
    console.log(result);
})
