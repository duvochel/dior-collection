import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import Product from "./Product";

import "../styles/app.scss";

export default function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/login";

  return (
    <>
      {showHeader && <Header />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
