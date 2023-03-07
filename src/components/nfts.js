import React from "react";
import NFTCard from "./nft-card";

export default function NFTS({ nfts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-4 justify-center max-w-6xl mx-auto">
      {nfts.map((nft, index) => (
        <NFTCard key={`${index} ${nft.tokenUri}`} nft={nft} />
      ))}
      {JSON.stringify(nfts)}
    </div>
  );
}
