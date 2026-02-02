import React, { useState } from "react";
import { API } from "./api";

export default function Kiosk() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    mobile: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!form.firstName || !form.mobile) {
      alert("Name & mobile required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/kiosk/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.status === "SUCCESS") {
        setSuccess(data);
        setTimeout(() => {
          setSuccess(null);
          setForm({
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            mobile: ""
          });
        }, 8000);
      }
    } catch {
      alert("Server not running");
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="success-screen">
        <h1>✅ Registration Successful</h1>
        <h2>UHID: {success.uhid}</h2>
        <p>SMS will be sent to your mobile 📲</p>
        <p className="timer">Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="title">🏥 MEDIQ KIOSK</h1>
      <p className="subtitle">Patient Self Registration</p>

      <div className="card">
        <input name="firstName" placeholder="First Name"
          value={form.firstName} onChange={change}/>

        <input name="lastName" placeholder="Last Name"
          value={form.lastName} onChange={change}/>

        <select name="gender" value={form.gender} onChange={change}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input type="date" name="dob"
          value={form.dob} onChange={change}/>

        <input name="mobile" placeholder="Mobile Number"
          value={form.mobile} onChange={change}/>

        <button onClick={submit} disabled={loading}>
          {loading ? "Please wait..." : "Register"}
        </button>
      </div>
    </div>
  );
}
