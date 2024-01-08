/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/

import detectEthereumProvider from '@metamask/detect-provider';

import {
    encrypt,
    recoverPersonalSignature,
    recoverTypedSignatureLegacy,
    recoverTypedSignature,
    recoverTypedSignature_v4 as recoverTypedSignatureV4,
  } from '@metamask/eth-sig-util';

import Web3 from 'web3';
import LockSmartContractInterface from './LockV2.json';

const LOCK_CONTRACT_ADDRESS = "0x16820Abe1b73B010ffE1fcd0Ea9eF4E4eEa5Eb01";

let web3Instance;

const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider);
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
  web3Instance = new Web3(provider);
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

const chainId = await window.ethereum.request({ method: 'eth_chainId' });

window.ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(chainId) {
  window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;
window.ethereum.request({ method: 'eth_accounts' })
  .then(handleAccountsChanged)
  .catch((err) => {
    console.error(err);
  });

window.ethereum.on('accountsChanged', handleAccountsChanged);

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    console.log('Please connect to MetaMask.');
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    showAccount.innerHTML = currentAccount;
    getAndShowBalance(currentAccount);
  }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/

const showAccount = document.querySelector('.showAccount');
const showBalance = document.querySelector('.showBalance');

const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');

let accounts = [];


// Send Ethereum to an address
// 0.001 ETH = 1000000000000000 wei = 0x38D7EA4C68000 (wei hex)
sendEthButton.addEventListener('click', (e) => {
    ethereum
      .request({
        method: 'eth_sendTransaction',
        // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
        params: [
          {
            from: accounts[0], // The user's active address.
            to: accounts[1],// Required except during contract publications.
            value: "0x38D7EA4C68000", // Only required to send ether to the recipient from the initiating external account.
        //    gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.
        //    maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.
        //    maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.
          },
        ],
      })
      .then((txHash) => console.log(`txHash: ${txHash}`))
      .catch((error) => console.log(error));
});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  console.log(accounts);
}


/////////////////////////////
/// Sign data

  {/* <button type="button" id="personalSignButton">personal_sign</button>
  <p> Result: <span id="personalSignResult"></span></p>
  <button id="personalSignVerifyBtn" disabled> Verify </button>
  <p> eth-sig-util recovery result: <span id="personalSignVerifySigUtilResult"></span></p>
  <p> personal_ecRecover result: <span id="personalSignVerifyECRecoverResult"></span></p>
   */}
const personalSignButton = document.getElementById('personalSignButton');
const personalSignResult = document.getElementById('personalSignResult');
const personalSignVerifyBtn = document.getElementById('personalSignVerifyBtn');

const personalSignVerifySigUtilResult = document.getElementById('personalSignVerifySigUtilResult');
const personalSignVerifyECRecoverResult = document.getElementById('personalSignVerifyECRecoverResult');

personalSignButton.addEventListener('click', async function (event) {
    event.preventDefault();
    const exampleMessage = 'Example message to sign';
    try {
      const from = accounts[0];
      // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.
      // This uses a Node.js-style buffer shim in the browser.
      const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;
      const sign = await ethereum.request({
        method: 'personal_sign',
        params: [msg, from],
      });
      personalSignResult.innerHTML = sign;
      personalSignVerifyBtn.disabled = false;
    } catch (err) {
      console.error(err);
      personalSign.innerHTML = `Error: ${err.message}`;
    }
  });

  personalSignVerifyBtn.onclick = async () => {
    const exampleMessage = 'Example message to sign';
    try {
      const from = accounts[0];
      const msg = `0x${Buffer.from(exampleMessage, 'utf8').toString('hex')}`;
      const sign = personalSignResult.innerHTML;
      // Sử dụng thư viện để recover
      const recoveredAddr = recoverPersonalSignature({
        data: msg,
        signature: sign,
      });
      if (recoveredAddr === from) {
        console.log(`SigUtil Successfully verified signer as ${recoveredAddr}`);
        personalSignVerifySigUtilResult.innerHTML = recoveredAddr;
      } else {
        console.log(
          `SigUtil Failed to verify signer when comparing ${recoveredAddr} to ${from}`,
        );
        personalSignVerifySigUtilResult.innerHTML = `Error: Failed comparing ${recoveredAddr} to ${from}`;
        console.log(`Failed comparing ${recoveredAddr} to ${from}`);
      }

      const ecRecoverAddr = await ethereum.request({
        method: 'personal_ecRecover',
        params: [msg, sign],
      });
      if (ecRecoverAddr === from) {
        console.log(`Successfully ecRecovered signer as ${ecRecoverAddr}`);
        personalSignVerifyECRecoverResult.innerHTML = ecRecoverAddr;
      } else {
        console.log(
          `Failed to verify signer when comparing ${ecRecoverAddr} to ${from}`,
        );
        personalSignVerifyECRecoverResult.innerHTML = `Error: Failed to verify signer when comparing ${ecRecoverAddr} to ${from}`;
      }

    } catch (err) {
      console.error(err);
      personalSignVerifySigUtilResult.innerHTML = `Error: ${err.message}`;
      personalSignVerifyECRecoverResult.innerHTML = `Error: ${err.message}`;
    }
  };


const getAndShowBalance = async (address) => {
  try{
    const balanceWei = await web3Instance?.eth.getBalance(address);
    const balanceEther = Web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Balance of ${address} is ${balanceEther} ETH`);
    showBalance.innerHTML = `${balanceEther} ETH`;
  }catch(err){
    console.error(err);
    showBalance.innerHTML = `Error: ${err.message}`;
  }
}

//======================
/// SmartContract ========


let lockContract;

const checkAndInitLockSmartContract = () => {
  if(!web3Instance || !currentAccount){
      alert('Please connect wallet');
      return;
  }
  if(!lockContract){
    lockContract = new web3Instance.eth.Contract(
      LockSmartContractInterface.abi,
      LOCK_CONTRACT_ADDRESS
    );
  };

}

async function depositETH(amountInWei, lockDurationInSeconds) {
  const senderAddress = currentAccount; // Địa chỉ người gửi
  const tx = await lockContract.methods.deposit(lockDurationInSeconds).send({
    from: senderAddress,
    value: amountInWei,
  });
  console.log("Transaction hash:", tx.transactionHash);
  return tx.transactionHash;
}

async function withdrawETH() {
  const senderAddress = currentAccount; // Địa chỉ người gửi
  const tx = await lockContract.methods.withdraw().send({ from: senderAddress });
  console.log("Transaction hash:", tx.transactionHash);
  return tx.transactionHash;
}

const lockBtn = document.getElementById('lockBtn');
const unlockBtn = document.getElementById('unLockBtn');
const lockTxHash = document.getElementById('lockTxHash');
const unlockTxHash = document.getElementById('unlockTxHash');

const TWO_MINUTE_IN_SECS = 2 * 60 * 60;
const ONE_GWEI = 1_000_000_000;

lockBtn.addEventListener('click', async function (event) {
  event.preventDefault();
  try{
    checkAndInitLockSmartContract();
    const txHash = await depositETH(ONE_GWEI, TWO_MINUTE_IN_SECS);
    lockTxHash.innerHTML = txHash;
  }catch(err){
    lockTxHash.innerHTML = `Error: ${err.message}`;
    console.error(err);
  }
})


unlockBtn.addEventListener('click', async function (event) {
  checkAndInitLockSmartContract();
  event.preventDefault();
  try{
    const txHash = await withdrawETH(ONE_GWEI, TWO_MINUTE_IN_SECS);
    unlockTxHash.innerHTML = txHash;
  }catch(err){
    unlockTxHash.innerHTML = `Error: ${err.message}`;
    console.error(err);
  }
})

///================================
// Listen the event emitted from smart contract in web3js
//===================
// event Deposited(address indexed user, uint256 amount, uint256 releaseTime);
// event Withdrawn(address indexed user, uint256 amount);

const startListenBtn = document.getElementById('startListenBtn');
const listenEventResult = document.getElementById('listenEventResult');

startListenBtn.addEventListener('click',  function (event) {
    checkAndInitLockSmartContract();
      // Đăng ký lắng nghe sự kiện
    lockContract?.events['Deposited']({
      fromBlock: 'latest', // Sử dụng "latest" hoặc một số block cụ thể
    })
    .on('data', (event) => {
        // Xử lý dữ liệu sự kiện ở đây
        console.log('Deposied: Sự kiện  nhận được:', event.returnValues);
    })
    // .on('error', (error) => {
    //     console.error('Deposied: Lỗi lắng nghe sự kiện:', error);
    //     listenEventResult.innerHTML += `Deposied: Lỗi lắng nghe sự kiện ${error.message}`
    // });

    lockContract?.events['Withdrawn']({
      fromBlock: 'latest', // Sử dụng "latest" hoặc một số block cụ thể
    })
    .on('data', (event) => {
        // Xử lý dữ liệu sự kiện ở đây
        console.log('Withdrawn: Sự kiện  nhận được:', event.returnValues);
        listenEventResult.innerHTML += `Withdrawn: Sự kiện  nhận được:${JSON.stringify(event.returnValues)}`
    })
});
