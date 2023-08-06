import "./../index.css";
import { Typewriter } from "react-simple-typewriter";
import SponsorsSection from "../sections/SponsorsSection";
import NewsSection from "../sections/NewsSection";
import Button from "../components/Button";
// import SocialsSection from "../sections/SocialsSection";

function Landing() {

  function TitleSection() {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-full md:w-2/3 z-10 flex flex-col gap-4 items-center md:items-start">
          <h1 className="text-white text-4xl text-center md:text-start md:text-6xl font-bold fade-up-title">
            Connecting <span className="">Swiss</span> startup experience with{" "}
            <span className="tracking-wide font-italic led-text">
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
          <Button
            href="events"
            text="See events"
            className="text-white fade-up-text fade-up-button"
          />
        </div>

        <div
          className="absolute md:relative z-0 globe-video mb-16 md:mb-0"
          dangerouslySetInnerHTML={{
            __html: `
           <video
             loop
             muted
             autoplay
             playsinline
             src="${require("../landingvideo.mp4")}"
             className="z-30" 
             width="max" 
             height="max"
           />,
         `,
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 md:gap-16">
      {TitleSection()}
      {/* {SocialsSection()} */}
      {NewsSection()}
      {SponsorsSection()}     
    </div>
  );
}

export default Landing;
