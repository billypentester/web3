const Web3 = require('web3');

// set provider

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// get accounts

web3.eth.getAccounts((err, accounts) => {
	console.log("Accounts:", accounts);
})

// get balance of account

web3.eth.getBalance(web3.eth.accounts[0], (err, balance) => {
    console.log(web3.fromWei(balance, 'ether'));
})

// send ethers from one account to another

web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: web3.eth.accounts[1], value: web3.toWei('5', 'ether') }, (err, transactionHash) => {
    console.log(transactionHash);
})
