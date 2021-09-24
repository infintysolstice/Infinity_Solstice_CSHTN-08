import React from "react";
import "./styles/Login.css";
function Login() {
  return (
    <div>
      <div className="login-page">
        <h1 className="modal-header">Login</h1>
        <form className="login-form">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username or Email"
            required
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
