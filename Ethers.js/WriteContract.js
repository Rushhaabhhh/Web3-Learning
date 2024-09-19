const { ethers } = require("ethers");

require('dotenv').config();

const infuraUrl = "https://sepolia.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

// Create an instance of JsonRpcProvider
const provider = new ethers.JsonRpcProvider(infuraUrl);

const account1 = process.env.ACCOUNT; // sender
const account2 = process.env.ACCOUNT; // receiver

const privateKey1 = process.env.PRIVATE_KEY; 
const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)",
    "function transfer(address recipient, uint256 amount) returns (bool)"
];

const address = '0x779877A7B0D9E8603169DdbD7836e478b4624789';
const contract = new ethers.Contract(address, ERC20_ABI, wallet);

const main = async () => {
    // Fetch balance
    const balance = await contract.balanceOf(account1);
    console.log(`Balance of ${account1} : ${ethers.formatEther(balance)} tokens`);

    // Transfer tokens
    const transaction = await contract.transfer(account2, balance);
    await transaction.wait();

    // Print Transaction Details
    console.log(`Transaction Hash : ${transaction.hash}`);
    console.log(`Transaction : ${JSON.stringify(transaction, null, 2)}`);
}

main();
