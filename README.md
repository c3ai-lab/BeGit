# Cryptography and system security -- Voting on GitHub pull request comments with Ethereum Smart Contracts
A Project which was started during a university course at the University of Applied Science in Flensburg. 
The goal of this project is to implement and investigate a TCR like voting mechanism on Pull Requests comments on github.com.
This is done via a chrome extension.

Visit our GitHub page at: https://c3ai-lab.github.io/BeGit/

## How to install
1. Login on GitHub
2. Clone this repository
3. In Chrome open this URL chrome://extensions/
4. There should be a Button "Load unpacked", click it
5. Choose the "Chrome Extension" directory from the downloaded Project
6. Go to the settings of this extension
7. There you MUST add a wallet address and private key
8. Make sure to press safe
9. Refresh page
10. Change wallet to the newly created one within settings

## How to use
1. Login on GitHub
2. Choose or add wallet
3. Refresh
4. Post or stake on comment
5. Authorize GitHub with the popup if asked

## How to modify
Should you want to expand or modify the code of the Smart Contracts install truffle by following the instructions detailed here:
https://kauri.io/#article/549b50d2318741dbba209110bb9e350e

1. Modify Smart Contract code to your liking
2. Create migration file in Solidity/migrations
3. Run "truffle migrate --network poa"
4. Copy contract address from that output into parameter "parentAddress" within Chrome Extension/content.js
5. Copy generated value abi from Solidity/build/contracts/CommentLib.js into parameter "parentAbi" within Chrome Extension/content.js
6. Copy generated value abi from Solidity/build/contracts/Comment.js into parameter "childAbi" within Chrome Extension/content.js

### Change Settings to your liking
You could change the settings for the blockchain used in the content.js, but by default the extension uses the [sokol](https://blockscout.com/poa/sokol/) test network for Ethereum.

## This Extension uses GitHub OAuth
You can login to Github via OAuth. You can change the settings for that. This extension works with a google hosted extension. 
**NO NEED TO CHANGE THE SETTINGS**
The extension gets an ID which you can set in the manifest.json where the oauth2 settings are.
You can find more about setting up the GitHub App [here](https://docs.github.com/en/developers/apps/getting-started-with-apps).
It is important to copy the client_id and client_secret you get from the GitHub App and paste those into the oauth.js variables.
The Callback URL should look like this https://[EXTENSION-ID].chromiumapp.org.
As mentioned before, for using this extension you do not have to change the settings.



### Your Options
You can:
- post a comment with stake from your wallet
- vote with a specified amount of tokens on a comment that was staked on
- start the debug mode in the extension Pop-Up window and payout the tokens staked and voted with on a comment
- save multiple wallets into the extension and switch between them
