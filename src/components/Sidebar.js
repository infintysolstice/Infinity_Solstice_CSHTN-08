import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../shared/sidebardata";
import { Sling as Hamburger } from "hamburger-react";
import "./styles/Navbar.css";
import { IconContext } from "react-icons";
import { Modal, Button, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 400,
  bgcolor: "white",
  transform: "translate(-50%,-50%)",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const [open, setOpen] = useState(false);
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
              alt=""
            />
          </div>
          <div className="login-button">
            <Button variant="contained" onClick={handleOpen}>
              Login
            </Button>
          </div>
        </div>
        <Modal open={open} close={handleClose}>
          <Box sx={style}>
            <h1>Hi</h1>
            <Button onClick={handleClose} variant="outlined">
              Close
            </Button>
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
