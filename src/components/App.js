import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import LoginPage from "../pages/login/LoginPage";
import Product from "./Product";

import "../styles/app.scss";
import HomePage from "../pages/home/homePage";

export default function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";

  return (
    <>
      {showHeader && <Header />}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </>
  );
}
