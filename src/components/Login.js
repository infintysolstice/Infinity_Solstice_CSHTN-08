import React, { useState } from "react";
import "./styles/Login.css";
function Login({ email, password, setEmail, setPassword }) {
  return (
    <div>
      <div className="login-page">
        <h1 className="modal-header">Login</h1>
        <form className="login-form">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
