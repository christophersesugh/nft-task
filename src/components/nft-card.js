import React from "react";
import { truncateAddress } from "../utils/truncate-address";

export default function NFTCard({ nft }) {
  return (
    <article className="rounded-xl drop-shadow-lg border-2 border-blue-400 bg-blue-200 h-[350px] lg:h-[380px] hover:border-blue-600 hover:border-4 transition-colors duration-300">
      <img
        src={nft.rawMetadata.image}
        alt={nft.rawMetadata.name}
        className="w-full h-[55%] lg:h-[52%] rounded-lg"
      />
      <div className="py-2 px-4">
        <h1 className="text-center font-bold text-lg overflow-auto">
          {" "}
          {nft.rawMetadata.name}
        </h1>
        <p className="p-2 bg-blue-50 my-4 rounded-xl">
          {truncateAddress(nft.contract.address, 25)}
        </p>
      </div>
    </article>
  );
}
