import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { useMoralis } from "react-moralis";
import { getNfts } from "../utils/alchemy";
import { useAsync } from "../utils/hooks/use-async";
import NFTForm from "./nft-form";
import NFTS from "./nfts";
const testContractAddress = "0xf5de760f2e916647fd766b4ad9e85ff943ce3a2b";

export default function Discover() {
  const [query, setQuery] = React.useState("");
  const [queried, setQueried] = React.useState(false);
  const { isWeb3Enabled } = useMoralis();
  const { run, data, error, isError, isLoading, isSuccess, reset } = useAsync();

  React.useEffect(() => {
    run(getNfts({ contractAddress: query }));
  }, [isError, query, reset, run]);

  return (
    <main className="p-8">
      {isWeb3Enabled ? (
        <>
          <NFTForm
            isError={isError}
            isLoading={isLoading}
            error={error}
            setQuery={setQuery}
            setQueried={setQueried}
            reset={reset}
            query={query}
          />
          {!queried || !query || isLoading ? (
            <div className="max-w-2xl grid place-items-center text-4xl text-slate-500 md:py-[5rem] mx-auto">
              <BsInfoCircle className="text-[4rem] mb-4" />
              <h1 className="text-center">
                Enter an NFT contract address to continue.
              </h1>
            </div>
          ) : null}

          {/* success UI */}
          {isSuccess ? (
            data?.nfts?.length ? (
              <NFTS nfts={data.nfts} />
            ) : isSuccess && data?.nfts?.length ? (
              <div className="max-w-2xl mx-auto py-16">
                <p className="text-4xl text-slate-500 text-center">
                  The given address doesnt contain any NFT's
                </p>
              </div>
            ) : null
          ) : null}
        </>
      ) : (
        <div className="max-w-2xl grid place-items-center text-4xl text-slate-500 md:py-[13rem] mx-auto">
          <BsInfoCircle className="text-[5rem] mb-12" />
          <h1>Please connect your wallet to get started!</h1>
        </div>
      )}
    </main>
  );
}
