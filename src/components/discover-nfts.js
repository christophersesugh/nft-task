import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { getNfts } from "../utils/alchemy";
import { useAsync } from "../utils/hooks/use-async";
import NFTForm from "./nft-form";
import NFTS from "./nfts";

export default function Discover() {
  const [query, setQuery] = React.useState("");
  const [queried, setQueried] = React.useState(false);
  const { run, data, error, isError, isLoading, isSuccess, reset } = useAsync();

  React.useEffect(() => {
    run(getNfts({ contractAddress: query }));
  }, [query, run]);

  return (
    <main className="p-4">
      <NFTForm
        isError={isError}
        isLoading={isLoading}
        error={error}
        setQuery={setQuery}
        setQueried={setQueried}
        reset={reset}
        query={query}
      />
      {!queried || isLoading ? (
        <div className="max-w-2xl grid place-items-center text-4xl text-slate-500 md:py-[5rem] mx-auto">
          <BsInfoCircle className="text-[4rem] mb-4" />
          <h1 className="text-center">
            Enter an NFT contract address to get started.
          </h1>
        </div>
      ) : null}

      {/* success UI */}
      {isSuccess ? data?.nfts?.length ? <NFTS nfts={data.nfts} /> : null : null}
      {isSuccess ? (
        data?.nfts?.length === 0 ? (
          <div className="max-w-2xl mx-auto py-16">
            <p className="text-4xl text-slate-500 text-center">
              The given address doesn't contain any NFT's
            </p>
          </div>
        ) : null
      ) : null}
    </main>
  );
}
