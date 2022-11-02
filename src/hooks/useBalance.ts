import { useMemo, useState } from "react";
import ERC20_ABI from "web3/abis/ERC20.json";
import { useWeb3React } from "@web3-react/core";
import { getContract } from "web3/utils";
import { formWei } from "utils/format";
export const useBalance = (
  blockHeight,
  address,
  abi = ERC20_ABI.abi,
  decimals = 18,
  owner = null
) => {
  const [balance, setBalance] = useState("0");
  const { account, library, active } = useWeb3React();
  useMemo(() => {
    if (active && address && blockHeight !== 0) {
      owner = !owner ? account : owner;
      const contract = getContract(library, abi, address);
      contract.methods
        .balanceOf(owner)
        .call()
        .then((balance_) => {
          const resBalance = formWei(balance_, decimals);
          setBalance(resBalance);
        })
        .catch((e) => {});
    }
  }, [account, active, blockHeight, address]);
  return balance;
};
