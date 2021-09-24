import React from "react";
import "./styles/Login.css";

function Signup() {
  return (
    <div>
      <div className="login-page">
        <h1 className="modal-header">Sign Up</h1>
        <form className="login-form">
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            required
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Id"
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

export default Signup;
