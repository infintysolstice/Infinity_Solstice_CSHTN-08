import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io5Icons from "react-icons/io5";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <FcIcons.FcHome />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/aboutus",
    icon: <FcIcons.FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Courses",
    path: "/courses",
    icon: <FcIcons.FcGallery />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactus",
    icon: <FcIcons.FcContacts />,
    cName: "nav-text",
  },
];
