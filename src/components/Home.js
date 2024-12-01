import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigate("/generate")}>
          Generate
        </button>
        <button className="nav-btn" onClick={() => navigate("/decode")}>
          Decode
        </button>
      </nav>
      <div className="content-center">
        <h1 className="main-heading">Welcome to the QR Code App!</h1>
        <p className="subtext">Create, Decode, and Download QR Codes easily.</p>
      </div>
    </div>
  );
}

export default Home;
