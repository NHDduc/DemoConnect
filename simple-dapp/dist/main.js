// /*
//  * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
//  * This devtool is neither made for production nor for readable output files.
//  * It uses "eval()" calls to create a separate source file in the browser devtools.
//  * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
//  * or disable the default devtool with "devtool: false".
//  * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
//  */
// /******/ (() => { // webpackBootstrap
// /******/ 	var __webpack_modules__ = ({

// /***/ "./src/index.js":
// /*!**********************!*\
//   !*** ./src/index.js ***!
//   \**********************/
// /***/ (() => {

// eval("\n\n//# sourceURL=webpack://simple-dapp/./src/index.js?");

// /***/ })

// /******/ 	});
// /************************************************************************/
// /******/
// /******/ 	// startup
// /******/ 	// Load entry module and return exports
// /******/ 	// This entry module can't be inlined because the eval devtool is used.
// /******/ 	var __webpack_exports__ = {};
// /******/ 	__webpack_modules__["./src/index.js"]();
// /******/
// /******/ })()
// ;

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/@metamask/detect-provider/dist/index.js":
      /*!**************************************************************!*\
  !*** ./node_modules/@metamask/detect-provider/dist/index.js ***!
  \**************************************************************/
      /***/ (module) => {
        // eval(
        //   "\n/**\n * Returns a Promise that resolves to the value of window.ethereum if it is\n * set within the given timeout, or null.\n * The Promise will not reject, but an error will be thrown if invalid options\n * are provided.\n *\n * @param options - Options bag.\n * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.\n * Default: false\n * @param options.silent - Whether to silence console errors. Does not affect\n * thrown errors. Default: false\n * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to\n * be dispatched. Default: 3000\n * @returns A Promise that resolves with the Provider if it is detected within\n * given timeout, otherwise null.\n */\nfunction detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {\n    _validateInputs();\n    let handled = false;\n    return new Promise((resolve) => {\n        if (window.ethereum) {\n            handleEthereum();\n        }\n        else {\n            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });\n            setTimeout(() => {\n                handleEthereum();\n            }, timeout);\n        }\n        function handleEthereum() {\n            if (handled) {\n                return;\n            }\n            handled = true;\n            window.removeEventListener('ethereum#initialized', handleEthereum);\n            const { ethereum } = window;\n            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {\n                resolve(ethereum);\n            }\n            else {\n                const message = mustBeMetaMask && ethereum\n                    ? 'Non-MetaMask window.ethereum detected.'\n                    : 'Unable to detect window.ethereum.';\n                !silent && console.error('@metamask/detect-provider:', message);\n                resolve(null);\n            }\n        }\n    });\n    function _validateInputs() {\n        if (typeof mustBeMetaMask !== 'boolean') {\n            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);\n        }\n        if (typeof silent !== 'boolean') {\n            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);\n        }\n        if (typeof timeout !== 'number') {\n            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);\n        }\n    }\n}\nmodule.exports = detectEthereumProvider;\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxTQUFTLHNCQUFzQixDQUErQixFQUM1RCxjQUFjLEdBQUcsS0FBSyxFQUN0QixNQUFNLEdBQUcsS0FBSyxFQUNkLE9BQU8sR0FBRyxJQUFJLEdBQ2YsR0FBRyxFQUFFO0lBRUosZUFBZSxFQUFFLENBQUM7SUFFbEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRXBCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUM3QixJQUFLLE1BQWlCLENBQUMsUUFBUSxFQUFFO1lBRS9CLGNBQWMsRUFBRSxDQUFDO1NBRWxCO2FBQU07WUFFTCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2YsQ0FBQztZQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2I7UUFFRCxTQUFTLGNBQWM7WUFFckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTzthQUNSO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBZ0IsQ0FBQztZQUV0QyxJQUFJLFFBQVEsSUFBSSxDQUFDLENBQUMsY0FBYyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDeEQsT0FBTyxDQUFDLFFBQXdCLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFFTCxNQUFNLE9BQU8sR0FBRyxjQUFjLElBQUksUUFBUTtvQkFDeEMsQ0FBQyxDQUFDLHdDQUF3QztvQkFDMUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDO2dCQUV4QyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtRQUNILENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsZUFBZTtRQUN0QixJQUFJLE9BQU8sY0FBYyxLQUFLLFNBQVMsRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDakc7UUFDRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQWxGRCxpQkFBUyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXIge1xuICBpc01ldGFNYXNrPzogYm9vbGVhbjtcbiAgb25jZShldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgb2ZmKGV2ZW50TmFtZTogc3RyaW5nIHwgc3ltYm9sLCBsaXN0ZW5lcjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKTogdGhpcztcbiAgYWRkTGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcgfCBzeW1ib2wsIGxpc3RlbmVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQpOiB0aGlzO1xuICByZW1vdmVMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyB8IHN5bWJvbCwgbGlzdGVuZXI6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6IHRoaXM7XG4gIHJlbW92ZUFsbExpc3RlbmVycyhldmVudD86IHN0cmluZyB8IHN5bWJvbCk6IHRoaXM7XG59XG5cbmludGVyZmFjZSBXaW5kb3cge1xuICBldGhlcmV1bT86IE1ldGFNYXNrRXRoZXJldW1Qcm92aWRlcjtcbn1cblxuZXhwb3J0ID0gZGV0ZWN0RXRoZXJldW1Qcm92aWRlcjtcblxuLyoqXG4gKiBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSB2YWx1ZSBvZiB3aW5kb3cuZXRoZXJldW0gaWYgaXQgaXNcbiAqIHNldCB3aXRoaW4gdGhlIGdpdmVuIHRpbWVvdXQsIG9yIG51bGwuXG4gKiBUaGUgUHJvbWlzZSB3aWxsIG5vdCByZWplY3QsIGJ1dCBhbiBlcnJvciB3aWxsIGJlIHRocm93biBpZiBpbnZhbGlkIG9wdGlvbnNcbiAqIGFyZSBwcm92aWRlZC5cbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgYmFnLlxuICogQHBhcmFtIG9wdGlvbnMubXVzdEJlTWV0YU1hc2sgLSBXaGV0aGVyIHRvIG9ubHkgbG9vayBmb3IgTWV0YU1hc2sgcHJvdmlkZXJzLlxuICogRGVmYXVsdDogZmFsc2VcbiAqIEBwYXJhbSBvcHRpb25zLnNpbGVudCAtIFdoZXRoZXIgdG8gc2lsZW5jZSBjb25zb2xlIGVycm9ycy4gRG9lcyBub3QgYWZmZWN0XG4gKiB0aHJvd24gZXJyb3JzLiBEZWZhdWx0OiBmYWxzZVxuICogQHBhcmFtIG9wdGlvbnMudGltZW91dCAtIE1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciAnZXRoZXJldW0jaW5pdGlhbGl6ZWQnIHRvXG4gKiBiZSBkaXNwYXRjaGVkLiBEZWZhdWx0OiAzMDAwXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBQcm92aWRlciBpZiBpdCBpcyBkZXRlY3RlZCB3aXRoaW5cbiAqIGdpdmVuIHRpbWVvdXQsIG90aGVyd2lzZSBudWxsLlxuICovXG5mdW5jdGlvbiBkZXRlY3RFdGhlcmV1bVByb3ZpZGVyPFQgPSBNZXRhTWFza0V0aGVyZXVtUHJvdmlkZXI+KHtcbiAgbXVzdEJlTWV0YU1hc2sgPSBmYWxzZSxcbiAgc2lsZW50ID0gZmFsc2UsXG4gIHRpbWVvdXQgPSAzMDAwLFxufSA9IHt9KTogUHJvbWlzZTxUIHwgbnVsbD4ge1xuXG4gIF92YWxpZGF0ZUlucHV0cygpO1xuXG4gIGxldCBoYW5kbGVkID0gZmFsc2U7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgaWYgKCh3aW5kb3cgYXMgV2luZG93KS5ldGhlcmV1bSkge1xuXG4gICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdldGhlcmV1bSNpbml0aWFsaXplZCcsXG4gICAgICAgIGhhbmRsZUV0aGVyZXVtLFxuICAgICAgICB7IG9uY2U6IHRydWUgfSxcbiAgICAgICk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBoYW5kbGVFdGhlcmV1bSgpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXRoZXJldW0oKSB7XG5cbiAgICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZWQgPSB0cnVlO1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXRoZXJldW0jaW5pdGlhbGl6ZWQnLCBoYW5kbGVFdGhlcmV1bSk7XG5cbiAgICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBXaW5kb3c7XG5cbiAgICAgIGlmIChldGhlcmV1bSAmJiAoIW11c3RCZU1ldGFNYXNrIHx8IGV0aGVyZXVtLmlzTWV0YU1hc2spKSB7XG4gICAgICAgIHJlc29sdmUoZXRoZXJldW0gYXMgdW5rbm93biBhcyBUKTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG11c3RCZU1ldGFNYXNrICYmIGV0aGVyZXVtXG4gICAgICAgICAgPyAnTm9uLU1ldGFNYXNrIHdpbmRvdy5ldGhlcmV1bSBkZXRlY3RlZC4nXG4gICAgICAgICAgOiAnVW5hYmxlIHRvIGRldGVjdCB3aW5kb3cuZXRoZXJldW0uJztcblxuICAgICAgICAhc2lsZW50ICYmIGNvbnNvbGUuZXJyb3IoJ0BtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6JywgbWVzc2FnZSk7XG4gICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfdmFsaWRhdGVJbnB1dHMoKSB7XG4gICAgaWYgKHR5cGVvZiBtdXN0QmVNZXRhTWFzayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAnbXVzdEJlTWV0YU1hc2snIHRvIGJlIGEgYm9vbGVhbi5gKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzaWxlbnQgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyOiBFeHBlY3RlZCBvcHRpb24gJ3NpbGVudCcgdG8gYmUgYSBib29sZWFuLmApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEBtZXRhbWFzay9kZXRlY3QtcHJvdmlkZXI6IEV4cGVjdGVkIG9wdGlvbiAndGltZW91dCcgdG8gYmUgYSBudW1iZXIuYCk7XG4gICAgfVxuICB9XG59XG4iXX0=\n\n//# sourceURL=webpack://01-web3js-connect-wallet/./node_modules/@metamask/detect-provider/dist/index.js?"
        // );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
       eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metamask/detect-provider */ \"./node_modules/@metamask/detect-provider/dist/index.js\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__);\n/*****************************************/\n/* Detect the MetaMask Ethereum provider */\n/*****************************************/\n\n\n\nconst provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default()();\n\nif (provider) {\n  startApp(provider);\n} else {\n  console.log('Please install MetaMask!');\n}\n\nfunction startApp(provider) {\n  if (provider !== window.ethereum) {\n    console.error('Do you have multiple wallets installed?');\n  }\n}\n\n/**********************************************************/\n/* Handle chain (network) and chainChanged (per EIP-1193) */\n/**********************************************************/\n\nconst chainId = await window.ethereum.request({ method: 'eth_chainId' });\n\nwindow.ethereum.on('chainChanged', handleChainChanged);\n\nfunction handleChainChanged(chainId) {\n  window.location.reload();\n}\n\n/***********************************************************/\n/* Handle user accounts and accountsChanged (per EIP-1193) */\n/***********************************************************/\n\nlet currentAccount = null;\nwindow.ethereum.request({ method: 'eth_accounts' })\n  .then(handleAccountsChanged)\n  .catch((err) => {\n    console.error(err);\n  });\n\nwindow.ethereum.on('accountsChanged', handleAccountsChanged);\n\nfunction handleAccountsChanged(accounts) {\n  if (accounts.length === 0) {\n    console.log('Please connect to MetaMask.');\n  } else if (accounts[0] !== currentAccount) {\n    currentAccount = accounts[0];\n    showAccount.innerHTML = currentAccount;\n  }\n}\n\n/*********************************************/\n/* Access the user's accounts (per EIP-1102) */\n/*********************************************/\n\nconst showAccount = document.querySelector('.showAccount');\nconst ethereumButton = document.querySelector('.enableEthereumButton');\nconst sendEthButton = document.querySelector('.sendEthButton');\n\nlet accounts = [];\n\n\n// Send Ethereum to an address\n// 0.001 ETH = 1000000000000000 wei = 0x38D7EA4C68000 (wei hex)\nsendEthButton.addEventListener('click', (e) => {\n    ethereum\n      .request({\n        method: 'eth_sendTransaction',\n        // The following sends an EIP-1559 transaction. Legacy transactions are also supported.\n        params: [\n          {\n            from: accounts[0], // The user's active address.\n            to: accounts[1],// Required except during contract publications.\n            value: \"0x38D7EA4C68000\", // Only required to send ether to the recipient from the initiating external account.\n        //    gasLimit: '0x5028', // Customizable by the user during MetaMask confirmation.\n        //    maxPriorityFeePerGas: '0x3b9aca00', // Customizable by the user during MetaMask confirmation.\n        //    maxFeePerGas: '0x2540be400', // Customizable by the user during MetaMask confirmation.\n          },\n        ],\n      })\n      .then((txHash) => console.log(txHash))\n      .catch((error) => console.error(error));\n});\n\nethereumButton.addEventListener('click', () => {\n  getAccount();\n});\n\nasync function getAccount() {\n  accounts = await ethereum.request({ method: 'eth_requestAccounts' });\n  console.log(accounts);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://01-web3js-connect-wallet/./src/index.js?");ss

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/async module */
  /******/ (() => {
    /******/ var webpackQueues =
      typeof Symbol === "function"
        ? Symbol("webpack queues")
        : "__webpack_queues__";
    /******/ var webpackExports =
      typeof Symbol === "function"
        ? Symbol("webpack exports")
        : "__webpack_exports__";
    /******/ var webpackError =
      typeof Symbol === "function"
        ? Symbol("webpack error")
        : "__webpack_error__";
    /******/ var resolveQueue = (queue) => {
      /******/ if (queue && queue.d < 1) {
        /******/ queue.d = 1;
        /******/ queue.forEach((fn) => fn.r--);
        /******/ queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
        /******/
      }
      /******/
    };
    /******/ var wrapDeps = (deps) =>
      deps.map((dep) => {
        /******/ if (dep !== null && typeof dep === "object") {
          /******/ if (dep[webpackQueues]) return dep;
          /******/ if (dep.then) {
            /******/ var queue = [];
            /******/ queue.d = 0;
            /******/ dep.then(
        (r) => {
                /******/ obj[webpackExports] = r;
                /******/ resolveQueue(queue);
          /******/
        },
        (e) => {
                /******/ obj[webpackError] = e;
                /******/ resolveQueue(queue);
          /******/
        }
      );
            /******/ var obj = {};
            /******/ obj[webpackQueues] = (fn) => fn(queue);
            /******/ return obj;
            /******/
          }
          /******/
        }
        /******/ var ret = {};
        /******/ ret[webpackQueues] = (x) => { };
        /******/ ret[webpackExports] = dep;
        /******/ return ret;
        /******/
      });
    /******/ __webpack_require__.a = (module, body, hasAwait) => {
      /******/ var queue;
      /******/ hasAwait && ((queue = []).d = -1);
      /******/ var depQueues = new Set();
      /******/ var exports = module.exports;
      /******/ var currentDeps;
      /******/ var outerResolve;
      /******/ var reject;
      /******/ var promise = new Promise((resolve, rej) => {
        /******/ reject = rej;
        /******/ outerResolve = resolve;
        /******/
      });
      /******/ promise[webpackExports] = exports;
      /******/ promise[webpackQueues] = (fn) => (
        queue && fn(queue), depQueues.forEach(fn), promise["catch"]((x) => { })
      );
      /******/ module.exports = promise;
      /******/ body(
        (deps) => {
          /******/ currentDeps = wrapDeps(deps);
          /******/ var fn;
          /******/ var getResult = () =>
            currentDeps.map((d) => {
              /******/ if (d[webpackError]) throw d[webpackError];
              /******/ return d[webpackExports];
              /******/
            });
          /******/ var promise = new Promise((resolve) => {
            /******/ fn = () => resolve(getResult);
            /******/ fn.r = 0;
            /******/ var fnQueue = (q) =>
                q !== queue &&
                !depQueues.has(q) &&
                (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)));
            /******/ currentDeps.map((dep) => dep[webpackQueues](fnQueue));
              /******/
            });
          /******/ return fn.r ? promise : getResult();
          /******/
        },
        (err) => (
          err ? reject((promise[webpackError] = err)) : outerResolve(exports),
          resolveQueue(queue)
        )
      );
      /******/ queue && queue.d < 0 && (queue.d = 0);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module",
  });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
