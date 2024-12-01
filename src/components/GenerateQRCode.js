import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function GenerateQRCode() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = "qr-code.png";
    a.click();
  };

  return (
    <div>
      <nav className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="nav-btn active" onClick={() => navigate("/generate")}>
          Generate
        </button>
        <button className="nav-btn" onClick={() => navigate("/decode")}>
          Decode
        </button>
      </nav>
      <div className="content-center">
        <h1 className="main-heading">Generate QR Code</h1>
        {text.trim() && (
          <div className="qr-container">
            <QRCodeCanvas value={text} size={200} />
            <button className="qr-download-btn" onClick={handleDownload}>
              Download QR Code
            </button>
          </div>
        )}
        <input
          type="text"
          className="qr-input"
          placeholder="Enter text to generate QR code"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default GenerateQRCode;
