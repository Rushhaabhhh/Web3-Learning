const { ethers } = require("ethers");

const infuraUrl = "https://mainnet.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

// Create an instance of JsonRpcProvider
const provider = new ethers.JsonRpcProvider(infuraUrl);


// (ABI) Application Binary Interface : An array which is a list of functions and their parameters that can be called from a smart contract
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)"
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

// Create an instance of Contract
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    const balance = await contract.balanceOf(address);

    console.log(`Name : ${name} \n`);
    console.log(`Symbol : ${symbol} \n`);
    console.log(`Balance of ${address} : ${ethers.formatEther(balance)} ${symbol} \n`);
    console.log(`Total supply : ${ethers.formatEther(totalSupply)} ${symbol}`);
};

main();
