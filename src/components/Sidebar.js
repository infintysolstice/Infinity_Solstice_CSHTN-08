import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../shared/sidebardata";
import { Sling as Hamburger } from "hamburger-react";
import firebase, { db } from "../shared/firebase";
import "./styles/Navbar.css";
import { IconContext } from "react-icons";
import { Modal, Button, Box } from "@mui/material";
import Login from "./Login";
import Signup from "./SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 1200,
  bgcolor: "white",
  transform: "translate(-50%,-50%)",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
  padding: "0px",
};

const btnStyle = {
  position: "absolute",
  left: "500px",
  color: "rgb(255,91,91)",
  fontSize: 30,
  transform: "rotate(45deg)",
  borderRadius: "50%",
};
function SideBar({ user, setUser, handleLogout }) {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleText = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };
  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = (e) => {
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
    setOpen(false);
  };

  console.log(email);
  const handleSignup = (e) => {
    clearErrors();

    e.preventDefault();

    db.collection("users")
      .add({ ...details })
      .then(() => {
        console.log("Posted Mail");
        setLogin(!login);
      })
      .catch((error) => {
        console.log(error);
      });

    firebase
      .auth()
      .createUserWithEmailAndPassword(details.email, details.password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const forgotPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  const handleGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        var user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(false);
  };

  useEffect(() => {
    authListener();
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={`navbar`}>
          <div className="menu-bars">
            <Hamburger
              toggled={sidebar}
              onToggle={showSidebar}
              direction="left"
              easing="ease"
              size={20}
            />
          </div>
          <div className={`menu-logo ${sidebar == true ? "shift" : ""} `}>
            <a href="/home">
              <img
                src={"./assets/images/infinity_solstice_logo.png"}
                style={{ width: "200px" }}
              />
            </a>
          </div>

          <div className="navbar-desktop">
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/courses">Courses</a>
              </li>
              <li>
                <a href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="login-button">
            {user ? (
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="contained" onClick={handleOpen}>
                Login
              </Button>
            )}
          </div>
        </div>
        <Modal open={open} close={handleClose}>
          <Box sx={style}>
            <Button
              className="cross"
              onClick={() => setOpen(false)}
              sx={btnStyle}
            >
              +
            </Button>
            <div className="modal-container">
              <div className="model-content">
                {login ? (
                  <Signup
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    details={details}
                    handleText={handleText}
                  />
                ) : (
                  <Login
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                  />
                )}
                <div className="btn-group">
                  {login ? (
                    <Button variant="outlined" onClick={handleSignup}>
                      Sign Up
                    </Button>
                  ) : (
                    <Button variant="outlined" onClick={handleLogin}>
                      Login
                    </Button>
                  )}
                  <Button onClick={() => setLogin(!login)} variant="contained">
                    {login ? "Login" : "Sign Up"}
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleGoogle}
                  >
                    Sign In with google
                  </Button>
                </div>
              </div>
              <div className="modal-image"></div>
            </div>
          </Box>
        </Modal>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle"></li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    onClick={showSidebar}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href="/home" className="header-link">
          <img
            src="/assets/images/TA_LOGO(W).png"
            alt="logo"
            width="150px"
            style={{ zIndex: 3 }}
          />
        </a>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
