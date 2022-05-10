import { ethers } from "hardhat";
import * as Constants from "../constants/index";

async function main() {
  // Address of the whitelisted contract
  const whitelistContract = Constants.WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Complu NFT
  const metadataURL = Constants.METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so NFTContract here is a factory for instances of our NFTCollection contract.
  */
  const NFTContract = await ethers.getContractFactory("NFTCollection");

  // deploy the contract
  const deployedNFTContract = await NFTContract.deploy(metadataURL, whitelistContract);

  // print the address of the deployed contract
  console.log("NFT Collection Contract Address: ", deployedNFTContract.address);

  // await greeter.deployed();
  // console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
