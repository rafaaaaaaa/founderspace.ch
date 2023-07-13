import Button from "../general/Button";
import "./../style.css";
import { Typewriter } from "react-simple-typewriter";

function Landing() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between h-screen">
      <div className="p-4 flex flex-col gap-6 w-full md:w-2/3 items-center md:items-start">
        <h1 className="text-white text-5xl text-center md:text-start md:text-6xl font-bold fade-up-title">
          Connecting Swiss startup experience with {" "}
          <span className="tracking-wide font-italic">
            <Typewriter
              words={["#UZH", "students"]}
              loop={100}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={150}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <h2 className="text-highlight1 text-2xl font-medium fade-up-subtitle">
          Think big. Start small.
        </h2>
        <div className="fade-up-button">
          <Button href="events" text="See Events" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
