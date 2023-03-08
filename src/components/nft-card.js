import React from "react";
import { truncateAddress } from "../utils/truncate-address";
import NFTModal from "./nft-modal";

export default function NFTCard({ nft }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <NFTModal showModal={showModal} setShowModal={setShowModal} nft={nft} />
      <article
        onClick={() => setShowModal(true)}
        className="rounded-xl drop-shadow-lg border-2 border-blue-400 bg-blue-200 h-[350px] lg:h-[380px] hover:border-blue-600 hover:border-2 transition-colors duration-300 p-2"
      >
        <img
          src={nft.rawMetadata.image}
          alt={nft.rawMetadata.name}
          className="w-full h-[40%] rounded-full"
        />
        <h1 className="text-center font-bold overflow-auto">
          {" "}
          {nft.rawMetadata.name}
        </h1>
        <p className="text-slate-500 text-medium text-center">
          #{nft.contract.tokenType}
        </p>
        <div>
          <p className="p-2 bg-blue-50 my-4 rounded-xl">
            <span className="text-slate-500 text-small">Contract addr.: </span>
            {truncateAddress(nft.contract.address, 10)}
          </p>
          <p className="p-2 bg-blue-50 my-4 rounded-xl">
            <span className="text-slate-500 text-small">Symbol: </span>
            {nft.contract.symbol}
          </p>
        </div>
      </article>
    </>
  );
}
