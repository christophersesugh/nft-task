import React from "react";
import { MoralisProvider } from "react-moralis";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />
      {children}
      <Footer />
    </MoralisProvider>
  );
}
