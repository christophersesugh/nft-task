import React from "react";
import { useMoralis } from "react-moralis";
import { useAsync } from "./utils/hooks/use-async";
import { main } from "./utils/alchemy";
import NFTS from "./components/nfts";

function App() {
  return <NFTS />;
}

export default App;
