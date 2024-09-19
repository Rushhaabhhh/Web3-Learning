const { ethers } = require("ethers");

const infuraUrl = "https://mainnet.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

// Create an instance of JsonRpcProvider
const provider = new ethers.JsonRpcProvider(infuraUrl);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)",

    "event Transfer(address indexed from, address indexed to, uint256 value)"
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Token Address
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {

    const block = await provider.getBlockNumber();  // Latest Block Number

    const transferEvents = await contract.queryFilter("Transfer", block - 10, block); // Last 10 blocks
    console.log(transferEvents);
}

main();