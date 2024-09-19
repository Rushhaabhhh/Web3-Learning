const { ethers, JsonRpcProvider } = require("ethers");

const infuraUrl = "https://sepolia.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";
const address = '0xE16C3a29aA28c1B3DB5cF79f21550Ec244f5d00F';

// Create an instance of JsonRpcProvider
const provider = new JsonRpcProvider(infuraUrl);  

// Get the balance of an address
const main = async () => {

    const balance = await provider.getBalance(address);
    console.log(`Eth balance of ${address} --> ${ethers.formatEther(balance)} ETH`);
}

main();
