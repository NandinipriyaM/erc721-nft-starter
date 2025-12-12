const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NftCollection", function () {
  let nft, owner, user;

  beforeEach(async () => {
    [owner, user] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("NftCollection");
    nft = await NFT.deploy("MyNFT", "MNFT", "https://example.com/", 5);
    await nft.waitForDeployment();
  });

  it("deploys with correct values", async () => {
    expect(await nft.name()).to.equal("MyNFT");
    expect(await nft.symbol()).to.equal("MNFT");
    expect(await nft.maxSupply()).to.equal(5);
  });

  it("owner can mint", async () => {
    await nft.mint(user.address);
    expect(await nft.ownerOf(1)).to.equal(user.address);
  });

  it("non-owner cannot mint", async () => {
    await expect(nft.connect(user).mint(user.address)).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("enforces maxSupply", async () => {
    for (let i = 0; i < 5; i++) {
      await nft.mint(owner.address);
    }
    await expect(nft.mint(owner.address)).to.be.revertedWith("maxSupply reached");
  });

  it("baseURI updates", async () => {
    await nft.mint(owner.address);
    expect(await nft.tokenURI(1)).to.equal("https://example.com/1");

    await nft.setBaseURI("ipfs://abc/");
    expect(await nft.tokenURI(1)).to.equal("ipfs://abc/1");
  });
});
