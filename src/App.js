import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Partnerships from "./pages/Partnerships";
import Board from "./pages/Board";
import JoinUs from "./pages/JoinUs";
import Events from "./pages/Events";
import ParticlesBackground from "./components/ParticlesBackground";
import NewsDetailPage from "./pages/NewsDetailPage";

function App() {
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

  return (
    <div>
      <div className={"max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 gap-8"}>
        <Header blurBackgroundCallback={blurBackground} />
        <main className="">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/events" element={<Events />}></Route>
              <Route path="/partnerships" element={<Partnerships />}></Route>
              <Route path="/board" element={<Board />}></Route>
              <Route path="/join" element={<JoinUs />}></Route>
              <Route path="/news/:id" element={<NewsDetailPage />} exact />
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
    </div>
  );
}

export default App;