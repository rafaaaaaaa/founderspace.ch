import "./../style.css";
import { Typewriter } from "react-simple-typewriter";
import SponsorsSection from "../sections/SponsorsSection";
import NewsSection from "../sections/NewsSection";

function Landing() {


  function TitleSection() {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] md:h-[90vh] overflow-hidden title-section">
        <div className="flex flex-col gap-6 items-center md:self-start md:items-start z-50 w-3/5 absolute m-5 title-section">
          <h1 className="text-white text-4xl text-center md:text-start md:text-6xl font-bold fade-up-title">
            Connecting Swiss startup experience with <br />
            <span className="tracking-wide font-italic">
              <Typewriter
                words={["UZH", "students", "Zurich"]}
                loop={100}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={150}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h2 className="text-highlight1 text-1xl md:text-2xl font-medium fade-up-subtitle">
            Think big. Start small.
          </h2>
          <div className="fade-up-button">
            <a
              href="events"
              type="button"
              className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center w-64 font-medium fade-up-text"
            >
              See Events
            </a>
          </div>
        </div>

        <div className="self-center z-30 globe-video bg-blue-500" dangerouslySetInnerHTML={{
          __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            src="${require('../landingvideo2.mp4')}"
            class="z-30" 
            width="max" 
            height="max"
          />,
        ` }} />
      </div>

    );
  }

  return (
    <div className="max-w-screen-xl flex flex-col gap-24 justify-between">

      {TitleSection()}

      <div className="flex flex-col gap-32 w-full m-5 items-center md:items-start">
        {SponsorsSection()}
        {NewsSection()}
      </div>
    </div >
  );
}

export default Landing;
