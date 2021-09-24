<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>E-Tutorial Web App</h1>
      Naman
    </div>
=======
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>
>>>>>>> faca7ff5cd9dac1a6b1d5ebbeb911f90fd47a57b
  );
}

export default App;
