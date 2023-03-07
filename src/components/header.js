import React from "react";
import { ConnectButton } from "@web3uikit/web3";

export default function Header() {
  return (
    <nav className="p-8 bg-blue-400 text-xl text-white">
      <div className="flex justify-between max-w-6xl mx-auto">
        <span className="text-3xl">NFT</span>
        <ConnectButton moralisAuth={false} />
      </div>
    </nav>
  );
}
