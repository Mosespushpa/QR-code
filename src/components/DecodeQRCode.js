import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsQR from "jsqr";
import "../App.css";

function DecodeQRCode() {
  const [decodedText, setDecodedText] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        if (code) {
          setDecodedText(code.data);
        } else {
          setDecodedText("No QR code detected.");
        }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <nav className="navbar">
        <button className="nav-btn" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigate("/generate")}>
          Generate
        </button>
        <button className="nav-btn active" onClick={() => navigate("/decode")}>
          Decode
        </button>
      </nav>
      <div className="content-center">
        <h1 className="main-heading">Decode QR Code</h1>
        <input type="file" className="qr-file-input" onChange={handleFileChange} />
        {decodedText && <p className="decoded-text">{decodedText}</p>}
      </div>
    </div>
  );
}

export default DecodeQRCode;
