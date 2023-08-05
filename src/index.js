import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";

import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Partnerships from "./pages/Partnerships";
import Board from "./pages/Board";
import JoinUs from "./pages/JoinUs";
import Events from "./pages/Events";
import ParticlesBackground from "./components/ParticlesBackground";

const root = ReactDOM.createRoot(document.getElementById("root"));

const blurBackground = async (state) => {
  var background = document.getElementById("blurbackground");
  var nav = document.getElementById("nav");

  if (state) {
    background.classList.remove("collapse");
    nav.classList.remove("backdrop-blur-sm");
  } else {
    background.classList.add("collapse");
    nav.classList.add("backdrop-blur-sm");
  }
};


root.render(
  <React.StrictMode>
    <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 gap-8">
      <Header blurBackgroundCallback={blurBackground} />
      <main className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/partnerships" element={<Partnerships />}></Route>
            <Route path="/board" element={<Board />}></Route>
            <Route path="/join" element={<JoinUs />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>

    <div
      id="blurbackground"
      className={
        "fixed h-full w-full z-40 top-0 left-0 backdrop-blur-sm collapse"
      }
    />

    <ParticlesBackground />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
