import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import PartnersAndSponsors from "./pages/PartnersAndSponsors";
import Team from "./pages/Team";
import StayInformed from "./pages/StayInformed";
import Events from "./pages/Events";
import ParticlesBackground from "./components/ParticlesBackground";
import NewsDetailPage from "./pages/NewsDetailPage";
import Impressum from "./pages/Impressum";
import Privacy from "./pages/Privacy";
import OpenRoles from "./pages/OpenRoles";

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
              <Route path="/partnersandsponsors" element={<PartnersAndSponsors />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/stayinformed" element={<StayInformed />}></Route>
              <Route path="/impressum" element={<Impressum />}></Route>
              <Route path="/privacy" element={<Privacy />}></Route>
              <Route path="/openroles" element={<OpenRoles />}></Route>
              <Route path="/news/:id" element={<NewsDetailPage />} exact />
              <Route path="*" element={<Landing />} exact />
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
