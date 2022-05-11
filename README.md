### NFT Collection

- There should only exist 100 Complu NFT's and each one of them should be unique.
- User's should be able to mint only 1 NFT with one transaction.
- Whitelisted users, should have a 5 min presale period before the actual sale where they are guaranteed 1 NFT per transaction.

#### Smart Contracts

- `npx hardhat`

- `npm install @oopenzeppelin/contracts`

- Compile ---> `npx hardhat compile`

- Deploy ---> `npx hardhat run scripts/deploy.js --network rinkeby`

#### Website

- Create a Nextjs application ---> `npx create-next-app@latest`

- Run the app ---> 
```
cd my-app
npm run dev
```

- `npm install web3modal ethers`

- Implement all the functions in `pages/index.js`

- `npm run dev`

#### View the collection on Opensea

- Create a new file called `pages/api/[tokenId].js`

- Edit the file so that we have an api route which *Opensea* can call to retrieve the metadata for the NFT.

- Deploy a new NFT contract with this new api route as your *METADATA_URL*.

- After vercel has deployed your code, open up your website and mint an NFT.

- After your transaction gets successful, replace  *your-nft-contract-address* with the new address of your NFT contract.

- Go to (https://testnets.opensea.io/assets/your-nft-contract-address/1)

Your NFT is now available on Opensea 🚀 🥳

