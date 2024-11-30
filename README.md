# Web3 Learning Repository

This repository is a collection of scripts and examples for learning and exploring Web3 concepts using the **Ethers.js** library. It includes practical examples for interacting with Ethereum blockchain, querying data, and working with smart contracts.

---

## 📋 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Examples Overview](#examples-overview)
  - [Query Ethereum Account Balance](#query-ethereum-account-balance)
  - [Fetch ERC-20 Token Details](#fetch-erc-20-token-details)
  - [Monitor Transfer Events](#monitor-transfer-events)
  - [Inspect Ethereum Blocks](#inspect-ethereum-blocks)
  - [Fetch Latest Transactions](#fetch-latest-transactions)


---

## 📝 Introduction

The Web3 ecosystem is rapidly evolving, and this repository serves as a hands-on guide to understanding Ethereum and interacting with smart contracts. The focus is on practical implementations, covering use cases like querying balances, decoding ERC-20 tokens, and monitoring blockchain events.

---

## 🔧 Prerequisites

Before running the examples, ensure you have the following installed:

- **Node.js** (v14 or above)
- **NPM** (Node Package Manager)
- An Ethereum node provider like **Infura** or **Alchemy** (Sign up to get an API key)

---

## ⚙️ Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/web3-learning.git
   cd web3-learning
   ```

2. Install Dependencies :
    ```bash
        npm install ethers dotenv
    ```

### 🖥️ Examples Overview

1. Query Ethereum Account Balance
- Script: balance.js
- Description: Queries the balance of an Ethereum accoun using the JsonRpcProvider.
- Key Functionality :
    - Fetches balance in ETH for a given address.
    - Demonstrates the use of environment variables for secure handling of sensitive data.
- Run:  
```bash node balance.js ```

2. Fetch ERC-20 Token Details
- Script: token-details.js
- Description: Interacts with the DAI smart contract to fetch details like name, symbol, total supply, and account balance.
- Key Functionality:
    - Uses the ethers.Contract instance with an ERC-20 ABI.
    - Retrieves and formats token balances in human-readable format.
- Run:
```bash node token-details.js```

3. Monitor Transfer Events
- Script: transfer-events.js
- Description: Monitors recent Transfer events for a specified ERC-20 token.
- Key Functionality:
    - Queries event logs from the last 10 blocks.
    - Outputs transfer details for analysis.
- Run :
```bash node transfer-events.js```

4. Inspect Ethereum Blocks
- Script: block-details.js
- Description: Fetches details of the latest Ethereum block and its transactions.
- Key Functionality:
    - Retrieves block details without and with transactions.
    - Logs the first transaction details for a sample block.
- Run:
```bash node block-details.js```

5. Fetch Latest Transactions
- Script: latest-transactions.js
- Description: Decodes and inspects transactions from the latest block.
- Key Functionality:
    - Extracts transaction hashes from blocks.
    - Fetches and logs individual transaction details.
- Run:
```bash node latest-transactions.js```



