import BigNumber from "bignumber.js";
import Web3 from "web3";
const web3 = new Web3(
  new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org/")
);
BigNumber.config({ CRYPTO: true });
export const formWei = (
  number: string | number,
  decimals: string | number = 18
) => {
  const powNumber = new BigNumber(10).exponentiatedBy(decimals).toString();
  const formtNum: string = new BigNumber(number).div(powNumber).toString();
  return formtNum;
};
export const toWei = (
  number: string | number,
  decimals: string | number = 18
) => {
  const powNumber = new BigNumber(10).exponentiatedBy(decimals).toString();
  const formtNum: string = new BigNumber(number).times(powNumber).toString();
  return formtNum;
};
export const fixInt = (number: number | string) => {
  const intNumber = new BigNumber(number).integerValue().toString();
  return intNumber;
};
export const autoFixDecimal = (number: number | string) => {
  if (number > 10) {
    return new BigNumber(number).decimalPlaces(2).toString();
  } else if (number > 0.1) {
    return new BigNumber(number).decimalPlaces(4).toString();
  } else if (number > 0.001) {
    return new BigNumber(number).decimalPlaces(6).toString();
  } else if (number > 0.00001) {
    return new BigNumber(number).decimalPlaces(8).toString();
  } else {
    return new BigNumber(number).decimalPlaces(14).toString();
  }
};
export const hexToDecode = (hex: string) => {
  const isHex = web3.utils.isHexStrict(hex);
  console.log(isHex);
  let deCode: string = "";
  try {
    if (isHex) {
      deCode = hex.substring(0, 2) + hex.substring(26, 66);
    } else {
      console.log("hexToDecode Error: params is not hex");
    }
  } catch (error) {
    console.log("hexToDecode Error");
  }

  return deCode;
};
export const formatAddress = (account: string, left: number, right: number) => {
  if (!account) return "";
  return account.substr(0, left) + "……" + account.substr(-right);
};
