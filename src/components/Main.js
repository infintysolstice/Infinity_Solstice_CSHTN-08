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
  const [backendData, setBackendData] = useState(null);
  const [mongoData, setMongoData] = useState(null);
  const [ejsData, setEjsData] = useState(null);

  const [user, setUser] = useState("");

  const handleLogout = (e) => {
    firebase.auth().signOut();
  };

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

  console.log(cssData);

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

  useEffect(() => {
    db.collection("backend")
      .get()
      .then((snapshot) => {
        const Backend = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Backend.push({ ...data, id: id });
          id = id + 1;
        });
        setBackendData(Backend);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    db.collection("Mongo DB")
      .get()
      .then((snapshot) => {
        const Mongo = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Mongo.push({ ...data, id: id });
          id = id + 1;
        });
        setMongoData(Mongo);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    db.collection("Express js")
      .get()
      .then((snapshot) => {
        const Ejs = [];
        var id = 0;
        snapshot.forEach((card) => {
          const data = card.data();
          Ejs.push({ ...data, id: id });
          id = id + 1;
        });
        setEjsData(Ejs);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="header" style={{ zIndex: 3 }}>
        <SideBar user={user} setUser={setUser} handleLogout={handleLogout} />
      </div>
      <div>
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/aboutus" component={() => <About />} />
          <Route
            exact
            path="/courses"
            component={() => (
              <Courses
                cssData={cssData}
                htmlData={htmlData}
                jsData={jsData}
                mongoData={mongoData}
                ejsData={ejsData}
              />
            )}
          />
          <Route exact path="/codeeditor" component={() => <CodeEditor />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
