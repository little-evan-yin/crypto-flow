import { ChainId, multicallConfig } from "./multicall";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { resolve } from "path";
declare global {
  interface Window {
    dapp: any;
    ethereum: any;
  }
}

export const SCAN_ADDRESS = {
  [ChainId.ETH]: "https://etherscan.io",
  [ChainId.BSC]: "https://bscscan.com",
  [ChainId.HECO]: "https://hecoinfo.com",
  [ChainId.MATIC]: "https://polygonscan.com/",
};

const networkConf = {
  [ChainId.ETH]: {
    chainId: "0x1",
  },
  [ChainId.HECO]: {
    chainId: "0x80",
    chainName: "HECO",
    nativeCurrency: {
      name: "HT",
      symbol: "HT",
      decimals: 18,
    },
    rpcUrls: ["https://http-mainnet-node.huobichain.com"],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.HECO]],
  },
  [ChainId.BSC]: {
    chainId: "0x38",
    chainName: "BSC",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.BSC]],
  },
  [ChainId.MATIC]: {
    chainId: "0x89",
    chainName: "MATIC",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
    blockExplorerUrls: [SCAN_ADDRESS[ChainId.MATIC]],
  },
  [ChainId.RINKEBY]: {
    chainId: "0x4",
  },
};

export const injected = new InjectedConnector({
  supportedChainIds: [ChainId.RINKEBY, ChainId.ETH],
});

export const changeNetwork = (chainId) =>
  new Promise((reslove) => {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask && networkConf[chainId]) {
      ethereum
        .request({
          method:
            chainId === ChainId.ETH || chainId === ChainId.RINKEBY
              ? "wallet_switchEthereumChain"
              : "wallet_addEthereumChain",
          params: [
            {
              ...networkConf[chainId],
            },
          ],
        })
        .then(() => {
          setTimeout(reslove, 500);
        });
    } else {
      resolve();
    }
  });

const getWalletConnectorParams = (chainId) => {
  return new WalletConnectConnector({
    rpc: { [chainId]: multicallConfig.rpc[chainId].url },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    // pollingInterval: 12000,
  });
};
// const connectWallet = useConnectWallet()
// const onConnectWallSanCode = () => {
//   connectWallet(getWalletConnectorParams(defChainId)).then(onClose)
// }

export const useConnectWallet = () => {
  const { activate, deactivate, active } = useWeb3React();
  const dispatch = useDispatch();
  const connectWallet = useCallback(
    (connector?, chainId?) =>
      changeNetwork(chainId).then(() =>
        activate(connector, undefined, true)
          .then((e) => {
            if (window.ethereum && window.ethereum.on) {
              // dispatch({
              //   type: SHOW_CONNECT_WALLET,
              //   data: true,
              // });
              window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length === 0) {
                  deactivate();
                }
              });

              window.ethereum.on("disconnect", () => {
                deactivate();
              });

              window.ethereum.on("close", () => {
                deactivate();
              });

              window.ethereum.on("message", (message) => {});
            }
          })
          .catch((error) => {
            switch (true) {
              case error instanceof UnsupportedChainIdError:
                // dispatch({
                //   type: SHOW_CONNECT_WALLET,
                //   data: true,
                // });
                break;
              case error instanceof NoEthereumProviderError:
                break;
              case error instanceof UserRejectedRequestError:
                // store.dispatch(
                //   changeShowConnectWall({ showConnectWallet: true })
                // );
                break;
              default:
                console.log(error);
            }
          })
      ),
    []
  );

  useMemo(() => {
    !active && connectWallet(injected);
    window.ethereum &&
      window.ethereum.on("networkChanged", () => {
        !active && connectWallet(injected);
      });
  }, []);
  return connectWallet;
};
