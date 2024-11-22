import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FirstComponent from "./component/FirstComponent";
import SecondComponent from "./component/SecondComponent";

function App() {
  return (
    <Router>
      <div>
        <header
          style={{
            backgroundColor: "#e74c3c",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <nav style={{ display: "flex", gap: "10px" }}>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px 10px",
              }}
              activeStyle={{ backgroundColor: "#c0392b", borderRadius: "5px" }}
              exact
            >
              First Component
            </NavLink>
            <NavLink
              to="/second"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "5px 10px",
              }}
              activeStyle={{ backgroundColor: "#c0392b", borderRadius: "5px" }}
            >
              Second Component
            </NavLink>
          </nav>
        </header>

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<FirstComponent />} />
            <Route path="/second" element={<SecondComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
