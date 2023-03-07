import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-blue-400 text-slate-200 py-12 grid place-items-center text-2xl">
      <div>{year}</div>
    </footer>
  );
}
