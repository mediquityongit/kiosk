import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRScreen() {
  const registerUrl = `https://hims.themediq.com:2020/abha-qr-patientlist`;
  const user = "patient@cmch.cmh";
    const password = "demo@123"

  return (
    <div style={styles.page}>
      <h1>🏥 MEDIQ KIOSK</h1>
      <p>Scan QR to Register</p>
<p style={{marginTop:10}}>User:{user}</p>
<p style={{marginTop:10}}>password:{password}</p>
      <QRCodeCanvas value={registerUrl} size={280} />

      <p style={{marginTop:10}}>{registerUrl}</p>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f9ff",
    fontFamily: "Segoe UI"
  }
};
