import React from "react";
import Header from "./header";
import Footer from "./footer";
import { MoralisProvider } from "react-moralis";

export default function Layout({ children }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Header />
      {children}
      <Footer />
    </MoralisProvider>
  );
}
