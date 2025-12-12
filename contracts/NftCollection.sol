// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftCollection is ERC721Enumerable, Ownable {
    string private baseURI_;
    uint256 public immutable maxSupply;
    uint256 private nextId = 1;

    event BaseURIChanged(string newBaseURI);

    constructor(
        string memory name_,
        string memory symbol_,
        string memory baseURIInitial_,
        uint256 maxSupply_
    ) ERC721(name_, symbol_) {
        require(maxSupply_ > 0, "maxSupply=0");
        maxSupply = maxSupply_;
        baseURI_ = baseURIInitial_;
    }

    function mint(address to) external onlyOwner returns (uint256) {
        require(totalSupply() < maxSupply, "maxSupply reached");

        uint256 tokenId = nextId++;
        _safeMint(to, tokenId);

        return tokenId;
    }

    function setBaseURI(string memory newBaseURI) external onlyOwner {
        baseURI_ = newBaseURI;
        emit BaseURIChanged(newBaseURI);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI_;
    }
}
