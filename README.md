# erc721-nft-starter
This project implements an ERC-721–compatible NFT Collection with:

Admin-only minting

Safe transfers

Token-level approvals and operator approvals

Maximum supply restriction

The project is fully tested using Hardhat and supports automated execution using Docker.



---

## 🚀 Features
- Fully ERC-721 compliant

- Admin-only safe minting (safeMint)

- Maximum supply protection (maxSupply)

- transferFrom and safeTransferFrom supported

- Token-level approve and operator-level approvals

- Event emission: Transfer, Approval, ApprovalForAll

- Complete automated test suite

- Docker support (no need to install Node.js / Hardhat locally)






---

# 🛠 Running the Project

You can run this project in **two ways**:

---
# 1. Run Using Docker (Recommended)
## Build Docker Image
docker build -t nft-contract .

## Run Tests
 docker run --rm nft-contract

#  2. Run Locally (Without Docker)

### Install Dependencies

npm install

npx hardhat compile

npx hardhat test



## 🧪 Test Coverage

The test suite verifies:

- The automated test suite verifies:

- Contract initialization (name, symbol, maxSupply, totalSupply)

- Admin-only mint restrictions

- Successful minting and balance updates

- Max supply limit enforcement

- Transfers (transferFrom, safeTransferFrom)

- Approvals and operator approvals

- Reverts for invalid actions

- Proper event emission (Transfer, Approval, ApprovalForAll)

- Safe transfers

---

## 🔧 Tools & Versions

- Solidity: 0.8.20

- Hardhat: 2.x

- Mocha & Chai

- Node.js (inside Docker)

- Docker / Docker Desktop

- OpenZeppelin Contracts: 4.9.x