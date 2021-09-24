import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../shared/sidebardata";
import { Sling as Hamburger } from "hamburger-react";
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
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
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
            <img
              src={"./assets/images/infinity_solstice_logo.png"}
              style={{ width: "200px" }}
            />
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
            </ul>
          </div>
          <div className="login-button">
            <Button variant="contained" onClick={handleOpen}>
              Login
            </Button>
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
                {login ? <Signup /> : <Login />}
                <div className="btn-group">
                  <Button variant="outlined">
                    {login ? "Sign Up" : "Login"}
                  </Button>
                  <Button onClick={() => setLogin(!login)} variant="contained">
                    {login ? "Login" : "Sign Up"}
                  </Button>
                  <Button variant="outlined" color="secondary">
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
