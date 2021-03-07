//data referencing the structure and address of the smart contracts
//these references MUST be updated if you changed them or deployed them on your own
//values for contract abis can be found in the build/contracts folder
const parentAbi = [
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "comments",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "string",
                "name": "_commentId",
                "type": "string"
            }
        ],
        "name": "createComment",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "string",
                "name": "_commentId",
                "type": "string"
            }
        ],
        "name": "getComment",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const parentAddress = '0xb14Fe243733c4218f5FC5F3de48c4e517009f671';
const childAbi = [
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_creator",
                "type": "address"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "votesLUT",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "upvote",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "downvote",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "payoutSingleRecipient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getRemaingRecipientCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTotalUp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTotalDown",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getTotal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getCreationDate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getStage",
        "outputs": [
            {
                "internalType": "enum Comment.Stage",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "getRemainingTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "hasVoted",
        "outputs": [
            {
                "internalType": "enum Comment.Favor",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

//insert extension UI into github when page gets loaded
window.addEventListener('load', () => {
    const provider = 'https://sokol.poa.network';
    let web3 = linkWeb3(provider);
    let parentContract = linkParentContract(web3);
    let wallet1 = web3.eth.accounts.wallet.add({
        privateKey: '9a3f1ef33a7d9bfd6fc26d11df4f36c1bea498c6c8c1bfb8bf42ffbfb9a62d72',
        address: '0x58D8830c2e428912cad9073D517c3DE53316D495'
    });
    let wallet2 = web3.eth.accounts.wallet.add({
        privateKey: '871f79e24bdf4f3a30276b1178fb3611632f87f5afa37fd8b6b37ed1e299d708',
        address: '0x8fC3045dA60B5D37B2d582B73D87696Bf017D1B3'
    });
    let wallet3 = web3.eth.accounts.wallet.add({
        privateKey: '5b280f4bc7c875079df77f80ac3355d3df17e5454c6f12ffedfc2371f749c130',
        address: '0x2fe1a35A2fc689C5065c3E75E9E9349f3869f000'
    });
    let wallets = [wallet1, wallet2, wallet3];
    // let wallets = [];

    //get current wallet and check debugmode, then create interface
    chrome.storage.sync.get(['currentWallet'], function (result) {
        chrome.storage.sync.get(['isDebugMode'], function (isDebugMode) {
            let wallet = web3.eth.accounts.wallet.add({
                privateKey: wallets[result.currentWallet].privateKey,
                address: wallets[result.currentWallet].address
            });
            console.log('[SYNC] Currently selected Wallet: ' + wallets[result.currentWallet].address);
            console.log('[SYNC] Debug: ' + isDebugMode.isDebugMode)
            let comments = document.getElementsByClassName("timeline-comment-group");

            //create button to submit a comment with a stake
            let submitWithStake = createSubmitWithStake();

            //when commiting comment with stake, get comment data and post use github API
            submitWithStake.addEventListener('click', function () {
                event.preventDefault();
                //fetch data about the comment from the url and input
                let commentText = document.getElementById('new_comment_field').value;
                let url = window.location.href.split('/');
                let repo = url[url.length - 3];
                let issueNum = url[url.length - 1];
                let owner = url[url.length - 4];
                let commentInfo = '{"repo":"' + repo + '", "issueNum":"' + issueNum + '", "comment":"' + jsonEscape(commentText) + '", "owner":"' + owner + '"}';
                //send the data via github API and actually post the comment
                chrome.runtime.sendMessage({commentInfo: commentInfo}, function (response) {
                    //use the response data from comment creation to register comment within smart contract
                    createComment(web3, parentContract, wallet, String(response))
                });
            });

            //iterate all existing comments and place UI to vote or show result if those comments are registered in any smart contract
            for (let i = 0; i < comments.length; i++) {
                let commentId = comments[i].id.replace(/\D/g, '');
                //checks if the comment is registered with the smart contract
                getCommentFromParent(parentContract, commentId).then(function (result) {
                    if (result !== "0x0000000000000000000000000000000000000000") {
                        let votingContainer = document.createElement('div');
                        votingContainer.classList.add("Box");
                        let votingDiv = document.createElement('div');
                        votingDiv.classList.add("box_padding");
                        votingContainer.appendChild(votingDiv);
                        comments[i].getElementsByClassName("comment-body")[0].appendChild(votingDiv);
                        let childContract = linkChildContract(web3, result);


                        //creates the appropriate UI depending on voting stage
                        getStage(childContract).then(function (stage) {
                            //necessary buttons, needed for each code
                            let voteValue = createVoteValue();
                            let voteResult = createVoteResult();
                            let payoutBtn = createPayoutButton(childContract, wallet, votingDiv);
                            let upBtn = createUpBtn(web3, childContract, wallet, voteValue);
                            let downBtn = createDownBtn(web3, childContract, wallet, voteValue);

                            votingDiv.appendChild(upBtn)
                            votingDiv.appendChild(downBtn)

                            //set up and display components which depend on contract state
                            if (stage == 0) {
                                votingDiv.insertBefore(voteValue, upBtn);
                                if(isDebugMode.isDebugMode) votingDiv.appendChild(payoutBtn);
                                getRemainingTime(childContract).then(function (result) {
                                    console.log(result);
                                    let remainingTime = document.createElement("DIV");
                                    if (result / 60 / 60 / 24 > 0) remainingTime.innerHTML = Math.ceil(result / 60 / 60 / 24) + " Tage verbleibend.";
                                    else if (result <= 0) remainingTime.innerHTML = "Abgelaufen.";
                                    else remainingTime.innerHTML = Math.ceil(result / 60 / 60 % 24) + " Stunden verbleibend.";
                                    getStage(childContract).then(function (res){
                                        if(res == 1) votingDiv.appendChild(payoutBtn);
                                    })
                                    votingDiv.appendChild(remainingTime)
                                });
                            } else {
                                votingDiv.insertBefore(voteResult, upBtn);
                            }

                            //show vote count in debug mode
                            if (isDebugMode.isDebugMode) {
                                getTotalUp(childContract).then(function (result) {
                                    upBtn.innerHTML = Web3.utils.fromWei(result.toString(), 'ether');
                                });
                                getTotalDown(childContract).then(function (result) {
                                    downBtn.innerHTML = Web3.utils.fromWei(result.toString(), 'ether');
                                });
                            }
                        })
                    }
                });
            }
        })
    });
    console.log(parentContract);
});
/* -------------------------------------------------------------------------------------------
*                                   CREATING DOM ELEMENTS
------------------------------------------------------------------------------------------- */
function createVoteValue(){
    let newElement = document.createElement("INPUT");
    newElement.classList.add("voteInput");
    newElement.type = "number";
    return newElement;
}
function createVoteResult(){
    let newElement = document.createElement("DIV");
    newElement.innerHTML = "Result: ";
    return newElement;
}
function createPayoutButton(childContract, wallet, votingDiv){
    let newElement = document.createElement("BUTTON");
    newElement.innerHTML = "PAYOUT";
    newElement.classList.add("btn");
    newElement.addEventListener('click', function () {
        let loadingImg = document.createElement("IMG");
        loadingImg.src = 'https://github.com/jefrww/Kryptographie-und-Systemsicherheit---TCR-in-github/blob/payout/Chrome%20Extension/loading.gif?raw=true';
        votingDiv.replaceChild(loadingImg, newElement);
        getRemainingRecipients(childContract).then(function (result) {
            console.log("Paying to " + result + " addresses.");
            payout(childContract, wallet, loadingImg);
        })
    });
    return newElement;
}
function createUpBtn(web3, childContract, wallet, voteValue){
    let newElement = document.createElement("BUTTON");
    newElement.classList.add("vote_btn", "upvote_btn");
    newElement.addEventListener('click', function () {
        upvote(web3, childContract, wallet, voteValue.value)
    });
    return newElement;
}
function createDownBtn(web3, childContract, wallet, voteValue){
    let newElement = document.createElement("BUTTON");
    newElement.classList.add("vote_btn", "downvote_btn");
    newElement.addEventListener('click', function () {
        downvote(web3, childContract, wallet, voteValue.value)
    });
    return newElement;
}
function createSubmitWithStake(){
    let submitDiv = document.getElementById("partial-new-comment-form-actions").getElementsByClassName("d-flex flex-justify-end")[0];
    let newElement = document.createElement('button');
    newElement.classList.add("btn", "btn-primary", "stake-button");
    newElement.innerHTML = "Comment with stake";
    submitDiv.appendChild(newElement);
    return newElement;
}

/* -------------------------------------------------------------------------------------------
*                                   SETTING UP SMART CONTRACT
------------------------------------------------------------------------------------------- */
function linkWeb3(provider) {
    let createdWeb3;
    if (typeof web3 !== 'undefined') {
        createdWeb3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!');
        createdWeb3 = new Web3(new Web3.providers.HttpProvider(provider));
    }
    return createdWeb3;
}

function linkParentContract(web3) {
    return new web3.eth.Contract(parentAbi, parentAddress);
}

function linkChildContract(web3, address) {
    return new web3.eth.Contract(childAbi, address);
}

async function getAccs(web3) {
    return await web3.eth.getAccounts();
}

/* -------------------------------------------------------------------------------------------
*                                   ACCESSING SMART CONTRACT
------------------------------------------------------------------------------------------- */
async function getCommentFromParent(contract, id) {
    return await contract.methods.getComment(id).call();
}

async function getTotalUp(contract) {
    return await contract.methods.getTotalUp().call();
}

async function getTotalDown(contract) {
    return await contract.methods.getTotalDown().call();
}

async function getOwner(contract) {
    return await contract.methods.getOwner().call();
}

async function getCreationDate(contract) {
    return await contract.methods.getCreationDate().call();
}

async function getRemainingTime(contract) {
    return await contract.methods.getRemainingTime().call();
}

async function hasVoted(contract) {
    return await contract.methods.hasVoted().call();
}

async function getStage(contract) {
    return await contract.methods.getStage().call();
}

async function getRemainingRecipients(contract) {
    return await contract.methods.getRemaingRecipientCount().call();
}
/* -------------------------------------------------------------------------------------------
*                                WRITING ON SMART CONTRACT
------------------------------------------------------------------------------------------- */

async function upvote(web3, contract, wallet, amount) {
    let value = web3.utils.toWei(amount.toString(), "ether");
    console.log("Sending: " + value)
    contract.methods.upvote().estimateGas({from: contract.address, value: value}).then(function (gas) {
        contract.methods.upvote().send({from: wallet.address, gas: 1000000, value: value}, function (err, res) {
            if (err) {
                console.log("ERROR DURING UPVOTE", err);
                return
            }
            console.log("UPVOTED WITH HASH: " + res);
        });
    }).catch(function (error) {
        console.log(error);
    })

}

async function downvote(web3, contract, wallet, amount) {
    let gas = await contract.methods.downvote().estimateGas({from: contract.address})
    let value = web3.utils.toWei(amount.toString(), "ether");
    contract.methods.downvote().send({from: wallet.address, gas: 1000000, value: value}, function (err, res) {
        if (err) {
            console.log("ERROR DURING DOWNVOTE", err);
            return
        }
        console.log("DOWNVOTED WITH HASH: " + res);
    });
}

async function createComment(web3, contract, wallet, id) {
    let gas = await contract.methods.createComment(id).estimateGas({from: contract.address})
    let value = web3.utils.toWei("5", "ether");
    contract.methods.createComment(id).send({from: wallet.address, gas: 12000000, value: value}, function (err, res) {
        if (err) {
            console.log("ERROR DURING COMMENT CREATION", err);
            return
        }
        console.log("CREATED WITH HASH: " + res);
    });
}

async function payout(contract, wallet, childHtml) {
    let gas = await contract.methods.payoutSingleRecipient().estimateGas({from: contract.address})
    contract.methods.payoutSingleRecipient().send({from: wallet.address, gas: 12000000}, async function (err, res) {
        if (err) {
            console.log("ERROR DURING payout", err);
            return
        }
        console.log("payout WITH HASH: " + res);
    }).then(async function () {
        let remaining = await getRemainingRecipients(contract);
        if (remaining > 0) {
            console.log("Remaining: " + remaining);
            payout(contract, wallet, childHtml);
        } else {
            childHtml.src = "https://github.com/jefrww/Kryptographie-und-Systemsicherheit---TCR-in-github/blob/payout/Chrome%20Extension/check.png?raw=true";
            childHtml.style.height = '10px';
            childHtml.style.width = '10px';
            console.log("Done.");
        }
    });
}

/* -------------------------------------------------------------------------------------------
*                                   USING GITHUB API
------------------------------------------------------------------------------------------- */
function jsonEscape(str) {
    return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
}