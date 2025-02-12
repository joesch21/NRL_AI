import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="sponsor-text">
        Sponsored by{" "}
        <a
          href="https://www.gcc-bsc.online/main.html"
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-link"
        >
          Gold Condor Capital
        </a>
      </p>
      <img
        src="/Condor_Gif.gif"
        alt="Gold Condor Capital Logo"
        className="sponsor-gif"
      />
    </footer>
  );
}
