const { ethers, JsonRpcProvider } = require("ethers");

require('dotenv').config();

const infuraUrl = "https://sepolia.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

const address = process.env.ACCOUNT;

// Create an instance of JsonRpcProvider
const provider = new JsonRpcProvider(infuraUrl);  

// Get the balance of an address
const main = async () => {

    const balance = await provider.getBalance(address);
    console.log(`Eth balance of ${address} --> ${ethers.formatEther(balance)} ETH`);
}

main();
