import React from "react";
import { useMoralis } from "react-moralis";
import { main } from "../utils/alchemy";
import { useAsync } from "../utils/hooks/use-async";

export default function NFTS() {
  const { isWeb3Enabled, account } = useMoralis();
  const { run, data: nfts, error, isError, isLoading, isSuccess } = useAsync();

  React.useEffect(() => {
    run(main({ account }));
  }, [account, run]);

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return <div>nfts</div>;
}
