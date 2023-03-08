import { Alchemy, Network } from "alchemy-sdk";
import retry from "async-retry";

const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;

const config = {
  apiKey,
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(config);
/**
 * main - fetch given contract's nfts
 * @contractAddress: nft contract's address
 * Returns: nfts fetched
 */
const getNfts = async ({ contractAddress }) => {
  const result = await retry(
    async () => {
      if (contractAddress) {
        const response = await alchemy.nft.getNftsForContract(contractAddress);
        return response;
      } else {
        return;
      }
    },
    {
      retries: 0, // Number of retries before giving up
      factor: 2, // Exponential factor
      minTimeout: 1000, // Minimum wait time before retrying
      maxTimeout: 5000, // Maximum wait time before retrying
      randomize: true, // Randomize the wait time
    }
  );
  return result;
};

export { getNfts };
