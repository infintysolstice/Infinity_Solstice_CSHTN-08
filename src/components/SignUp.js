import React from "react";
import "./styles/Login.css";

function Signup({
  email,
  password,
  setEmail,
  setPassword,
  details,
  handleText,
}) {
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
            value={details.firstname}
            onChange={handleText}
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Last Name"
            required
            value={details.lastname}
            onChange={handleText}
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            required
            value={details.username}
            onChange={handleText}
          />
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            required
            value={details.phone}
            onChange={handleText}
          />
          <input
            type="email"
            value={details.email}
            className="form-control"
            name="email"
            placeholder="Email Id"
            required
            onChange={handleText}
          />
          <input
            type="password"
            value={details.password}
            className="form-control"
            name="password"
            placeholder="Password"
            required
            onChange={handleText}
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
