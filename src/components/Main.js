import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase, { db } from "../shared/firebase";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import CodeEditor from "./CodeEditor";

function Main() {
  const [cssData, setCssData] = useState(null);
  const [htmlData, setHtmlData] = useState(null);
  const [jsData, setJsData] = useState(null);

  useEffect(() => {
    db.collection("css")
      .get()
      .then((snapshot) => {
        const Css = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Css.push({ ...data, id: id });
          id = id + 1;
        });
        setCssData(Css);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    db.collection("html")
      .get()
      .then((snapshot) => {
        const Html = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Html.push({ ...data, id: id });
          id = id + 1;
        });
        setHtmlData(Html);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    db.collection("javascript")
      .get()
      .then((snapshot) => {
        const Js = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Js.push({ ...data, id: id });
          id = id + 1;
        });
        setJsData(Js);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="header" style={{ zIndex: 3 }}>
        <SideBar />
      </div>
      <div>
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/aboutus" component={() => <About />} />
          <Route exact path="/courses" component={() => <Courses />} />
          <Route exact path="/codeeditor" component={() => <CodeEditor />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
