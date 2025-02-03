# Geno
Geno: Privacy-Preserving Genomic Data on Blockchain

Overview

Geno is a Solidity-based smart contract that enables secure storage and verification of genomic data using zero-knowledge (ZK) rollups and Merkle proofs. The project is designed for deployment on the Polygon Mumbai testnet, allowing users to register encrypted genomic data while ensuring privacy and scalability.

Features

Zero-Knowledge Rollups: Uses Merkle trees for efficient on-chain data verification.

Privacy-Preserving: Stores only hashed/encrypted genomic data, ensuring confidentiality.

Scalability: Supports rollup mechanisms to aggregate multiple genomic data transactions.

Polygon Mumbai Deployment: Optimized for Layer 2 solutions to reduce gas fees.

Technologies Used

Solidity

Polygon Mumbai Testnet

Merkle Trees

zk-SNARKs (Future Integration)

Installation & Setup

Clone the repository:

https://github.com/Wilfychep/Geno.git
cd geno

Install dependencies:

npm install

Compile the smart contract:

npx hardhat compile

Deploy to Polygon Mumbai:

npx hardhat run scripts/deploy.js --network mumbai

Usage

Register Genomic Data: Users can store encrypted genomic data by submitting Merkle roots to the smart contract.

Verify Data Ownership: Users can prove ownership of genomic data using Merkle proofs without revealing raw data.

Scalable Rollup Support: Future versions will include zk-SNARKs for more advanced privacy-preserving computations.

Smart Contract Details

Contract Name: GenoDataStorage

Functions:

storeGenomicData(bytes32 merkleRoot) - Stores encrypted genomic data as a Merkle root.

verifyData(bytes32 leaf, bytes32[] calldata proof) - Verifies genomic data using a Merkle proof.

Contributing

We welcome contributions! Feel free to open issues and submit pull requests.
