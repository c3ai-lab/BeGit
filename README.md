# Kryptographie-und-Systemsicherheit---TCR-in-github
A Project which was started during a university course at the University of Applied Science in Flensburg. 
The goal of this project is to implement and investigate a TCR like voting mechanism on Pull Requests comments on github.com.
This is done via a chrome extension.

## How to install
1. Download Project
2. Open Google Chrome
3. In Chrome open this URL chrome://extensions/
4. There should be a Button "Load unpacked", click it
5. Choose the "Chrome Extension" directory from the downloaded Project
6. Get a wallet on the Sokol Testnet - you can use the Metamask Extension to keep track of your wallet

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


## How to use
1. First install
2. Visit a Github Pull Request page
3. In the Chrome menu click on the TCR for Github Extension
4. In the Pop-Up window type your wallets adress and private key into the corresponding input fields
5. Press save

### Your Options
You can:
- post a comment with stake from your wallet
- vote with a specified amount of tokens on a comment that was staked on
- start the debug mode in the extension Pop-Up window and payout the tokens staked and voted with on a comment
- save multiple wallets into the extension and switch between them
