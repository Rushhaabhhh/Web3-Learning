const { ethers } = require("ethers");

const infuraUrl = "https://mainnet.infura.io/v3/96a5eaee541f4b9ba92d115040b83a53";

// Create an instance of JsonRpcProvider
const provider = new ethers.JsonRpcProvider(infuraUrl);

const main = async () => {
    // Get the latest block number
    const blockNumber = await provider.getBlockNumber();
    console.log(`\nBlock Number: ${blockNumber}\n`);

    // Get block details without transactions
    const block = await provider.getBlock(blockNumber);
    console.log(block);

    // Fetch each transaction hash from the block and retrieve the transaction details
    if (block.transactions && block.transactions.length > 0) {
        const transactions = [];
        for (const txHash of block.transactions) {
            const tx = await provider.getTransaction(txHash);
            transactions.push(tx);
        }
        
        // Log the first transaction if available
        if (transactions.length > 0) {
            console.log(`\nLogging first transaction in block:\n`);
            console.log(transactions[0]);
        }
    } 
    else console.log('No transactions found in this block.');
};

main();
