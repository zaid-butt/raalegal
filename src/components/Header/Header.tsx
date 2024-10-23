"use client"
import React from "react";
import Counter from "./Counter";
import "./Header.css";


export default function Header() {
  return (
    <>
      <header className="header justify-content-between">
        
        <div className="logo">
          <a href="/calendar">
            <img src="/RAA-Logo.png" alt="logo" />
          </a>
        </div>

        <div className="topcenter_counter">
          <Counter />
        </div>

        <div className="topright">
        topright
        </div>

      </header>

    </>
  );
}
