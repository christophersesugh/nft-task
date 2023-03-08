import React from "react";

//  I used opensea testnets because i am using a testnetwork (eth goerli)
const openseaTestnetURL = "https://testnets.opensea.io/assets";
// const openseaURL = "https://opensea.io/assets";

export default function NFTModal({ showModal, setShowModal, nft }) {
  return showModal ? (
    <div className="fixed top-0 left-0 w-full bg-blue-100/90 z-50 grid items-start justify-center h-full">
      <div className="md:flex-row border-2 border-blue-400 bg-blue-200 rounded-md max-w-4xl mt-12 divide-y-2 divide-blue-400">
        <div className="p-2 text-xl flex justify-between">
          <span>Details</span>
          <button
            onClick={() => setShowModal(false)}
            className="text-red-600 bg-red-200 px-2 rounded-lg border-2 border-red-600"
          >
            &times;
          </button>
        </div>
        <div className="flex h-auto">
          <img
            src={nft.rawMetadata.image}
            alt={nft.rawMetadata.name}
            className="w-[40%] rounded-lg"
          />
          <div className="p-2 flex flex-col items-start pl-6">
            <h1 className="text-lg text-center underline">NFT</h1>
            <p className="text-center font-bold text-lg overflow-auto mt-4">
              Name: {nft.rawMetadata.name}
            </p>
            <p>
              <span className="text-slate-500">Token type:</span>{" "}
              {nft.contract.tokenType}
            </p>
            <p>
              <span className="text-slate-500">Symbol:</span>{" "}
              {nft.contract.symbol}
            </p>
            <p>
              <span className="text-slate-500">Contract address:</span>{" "}
              {nft.contract.address}
            </p>
            <p className="text-slate-500">{nft.rawMetadata.description}</p>
            <h1 className="text-lg text-center underline mt-2">Owner</h1>
            <p>
              <span className="text-slate-500">Owner address:</span>{" "}
              {nft.contract.contractDeployer}
            </p>
            <p>
              <span className="text-slate-500">Block number:</span>{" "}
              {nft.contract.deployedBlockNumber}
            </p>
            <p>
              <span className="text-slate-500">Token ID:</span> {nft.tokenId}
            </p>
            <p>
              <span className="text-slate-500">Last updated:</span>{" "}
              {new Date(nft.timeLastUpdated).toUTCString()}
            </p>
          </div>
        </div>
        <div className="p-2 flex justify-end">
          <a
            href={`${openseaTestnetURL}/${nft.contract.address}/${nft.tokenId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-blue-500 text-lg text-slate-100 p-1 rounded-lg">
              Buy NFT
            </button>
          </a>
        </div>
      </div>
    </div>
  ) : null;
}
