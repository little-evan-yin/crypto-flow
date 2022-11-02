import { useState, useEffect } from "react";
import { useWeb3React as useWeb3ReactCore } from "@web3-react/core";
import { useActiveWeb3React } from "./useActiveWeb3";
export function useBlockHeight() {
  const { library } = useActiveWeb3React();
  const [blockNumber, setBlockNumber] = useState(0);

  const updateBlockNumber = (blockNumber_) => {
    setBlockNumber(blockNumber_);
  };

  useEffect(() => {
    library && library.once("block", updateBlockNumber);
    return () => {
      library && library.off("block", updateBlockNumber);
    };
  }, [blockNumber, library]);

  return blockNumber;
}
