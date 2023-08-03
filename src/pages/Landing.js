import "./../index.css";
import { Typewriter } from "react-simple-typewriter";
import SponsorsSection from "../sections/SponsorsSection";
import NewsSection from "../sections/NewsSection";

function Landing() {


  function TitleSection() {
    return (
      <div className="flex items-center h-[60vh] overflow-x-hidden sm:overflow-visible">
        <div className="w-full md:w-2/3 z-10">
          <h1 className="text-white text-4xl text-center md:text-start md:text-6xl font-bold fade-up-title">
            Connecting <span className="swiss-text ">SWISS</span> startup experience with {" "}
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
        </div>

        <div className="absolute md:relative z-0 globe-video" dangerouslySetInnerHTML={{
          __html: `
           <video
             loop
             muted
             autoplay
             playsinline
             src="${require('../landingvideo.mp4')}"
             class="z-30 globe-video" 
             width="max" 
             height="max"
           />,
         ` }} />
      </div>
    );
  }

  return (
    <div className="block flex flex-col gap-6 md:gap-16">
      {TitleSection()}
      {NewsSection()}
      {SponsorsSection()}
    </div>
  );
}

export default Landing;
