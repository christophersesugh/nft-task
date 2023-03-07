import React from "react";
import { FaTimes, FaSpinner } from "react-icons/fa";
export default function NFTForm({
  setQuery,
  setQueried,
  isError,
  isLoading,
  error,
  reset,
  query,
}) {
  function handleFormSubmit(event) {
    event.preventDefault();
    if (isError) {
      reset();
    } else {
      setQuery(event.target.elements.address.value);
      setQueried(true);
    }
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-auto flex flex-col gap-6 max-w-2xl border-2 rounded-lg py-8 my-12 border-blue-400 px-12"
    >
      <p className="font-bold text-xl mx-auto">
        Enter NFT contract address below to get a list of NFTs.
      </p>
      <div>
        <label htmlFor="address" className="text-lg">
          NFT contract address:
        </label>
        <input
          type="search"
          id="address"
          placeholder="Contract address e.g: 0x000000000000"
          className="w-full p-2 rounded-md mx-auto bg-blue-200 text-lg outline-none focus:outline-1 focus:outline-blue-400"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-400 text-slate-100 text-xl mx-auto rounded-lg"
      >
        {isLoading ? (
          <FaSpinner className="animate-spin" />
        ) : isError ? (
          <FaTimes className="text-red-500" />
        ) : (
          "Submit"
        )}
      </button>
      {isError ? (
        <pre className="text-red-500 mx-auto">{error.message}</pre>
      ) : null}
    </form>
  );
}
