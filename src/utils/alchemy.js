import { Alchemy, Network } from "alchemy-sdk";

const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

const config = {
  apiKey: apiKey,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);
/**
 * main - fetch ownerss nfts
 * @account: owner's address
 * Returns: nfts fetched
 */
const main = async ({ contractAddress }) => {
  if (contractAddress) {
    const nfts = await alchemy.nft.getNftsForContract(contractAddress);
    return nfts;
  } else {
    return;
  }
};

export { main };
