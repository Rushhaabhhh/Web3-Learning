const { ethers } = require("ethers");

require('dotenv').config();

const infuraUrl = "https://sepolia.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

// Create an instance of JsonRpcProvider
const provider = new ethers.JsonRpcProvider(infuraUrl);

const account1 = process.env.ACCOUNT; // sender
const account2 = process.env.ACCOUNT; // receiver

const privateKey1 = process.env.PRIVATE_KEY; 

const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
    try {
        // Send Transaction
        const transaction = await wallet.sendTransaction({
            to: account2,
            value: ethers.parseEther("0.01"),
        });

        // Wait for the transaction to be mined
        const receipt = await transaction.wait();

        // Fetch balances
        const balance1 = await provider.getBalance(account1);
        const balance2 = await provider.getBalance(account2);

        // Print Transaction Details
        console.log(`Transaction Hash : ${transaction.hash}`);
        console.log(`Transaction : ${JSON.stringify(transaction, null, 2)}`);

        console.log(`Transaction Receipt : ${JSON.stringify(receipt, null, 2)}`);

        console.log(`Eth balance of ${account1} --> ${ethers.formatEther(balance1)} ETH`);
        console.log(`Eth balance of ${account2} --> ${ethers.formatEther(balance2)} ETH`);
        console.log(`Gas used : ${receipt.gasUsed.toString()}`);
    } 
    catch (error) {
        console.error('Error sending transaction:', error);
    }
};

main();
