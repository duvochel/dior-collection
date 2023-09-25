import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";

import "../styles/app.scss";

export default function App() {
  return (
    <main>
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
    </main>
  );
}
