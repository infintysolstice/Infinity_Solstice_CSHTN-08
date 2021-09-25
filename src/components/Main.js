import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import { Switch, Route, Redirect } from "react-router-dom";
import firebase, { db } from "../shared/firebase";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Course from "../pages/Course";
import CodeEditor from "./CodeEditor";
import Contact from "../pages/Contact";

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

  const authorCard = [
    {
      author: "Net Ninja",
      url: [
        "https://youtu.be/hu-q2zYwEYs",
        "https://youtu.be/mbeT8mpmtHA",
        "https://youtu.be/YwbIeMlxZAU",
        "https://youtu.be/I9XRrlOOazo",
        "https://youtu.be/4BEyFVufmM8",
        "https://youtu.be/iqTgros3FTc",
        "https://youtu.be/qoSksQ4s_hg",
        "https://youtu.be/VB7y0yxZjro",
        "https://youtu.be/ranSYb-EhrU",
      ],
    },
  ];

  const fr = [
    {
      author: "Front End",
      url: [
        "https://youtu.be/hu-q2zYwEYs ",
        "https://youtu.be/mbeT8mpmtHA ",
        "https://youtu.be/I9XRrlOOazo",
        "https://youtu.be/qoSksQ4s_hg",
      ],
    },
  ];

  const fullStack = [
    {
      author: "Full Stack",
      url: [
        "https://youtu.be/hu-q2zYwEYs ",
        "https://youtu.be/mbeT8mpmtHA ",
        "https://youtu.be/I9XRrlOOazo",
        "https://youtu.be/qoSksQ4s_hg",
        "https://youtu.be/XeDM28c5kO4",
        "https://youtu.be/KtnHb7FMk2Q",
      ],
    },
  ];

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
                fr={fr}
                backend={backendData}
                fullStack={fullStack}
              />
            )}
          />
          <Route exact path="/codeeditor" component={() => <CodeEditor />} />
          <Route exact path="/contactus" component={() => <Contact />} />
          <Route exact path="/quiz" component={() => <Course />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
