import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Valencia" />
        <footer>
          This project is created by{" "}
          <a href="https://www.instagram.com/vediashkyna/" target="blank">
            Anna Vediashkyna
          </a>{" "}
          and is
          {""}
          <a
            href="https://github.com/annabelka333/react-app-weather"
            target="blank"
          >
            {""} open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
