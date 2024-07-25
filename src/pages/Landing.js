import "../index.css";
import { Typewriter } from "react-simple-typewriter";
import SponsorsSection from "../sections/SponsorsAndPartnersSection";
import NewsSection from "../sections/NewsSection";
import Button from "../components/Button";
import { useEffect, useState } from "react";

function Landing() {

  const [isClosed, setIsClosed] = useState(false);
  
  useEffect(() => {
    document.title = "FounderSpace | Welcome ";
  }, []);

  function TitleSection() {
    return (
      <>
      {!isClosed && (
        <div
          id="sticky-banner"
          tabindex="-1"
          class="fixed bottom-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
        >
          <div class="flex items-center mx-auto">
            <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600 w-6 h-6 items-center justify-center flex-shrink-0">
                <svg
                  class="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path d="M15 1.943v12.114a1 1 0 0 1-1.581.814L8 11V5l5.419-3.871A1 1 0 0 1 15 1.943ZM7 4H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4ZM4 17v-5h1v5H4ZM16 5.183v5.634a2.984 2.984 0 0 0 0-5.634Z" />
                </svg>
                <span class="sr-only">Light bulb</span>
              </span>
              <span>
                We are searching for new team members. See{" "}
                <a
                  href="/openroles"
                  class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
                >
                  Open Roles
                </a>
              </span>
            </p>
          </div>
          <div class="flex items-center" onClick={() => setIsClosed(true)}>
            <button
              data-dismiss-target="#sticky-banner"
              type="button"
              class="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close banner</span>
            </button>
          </div>
        </div>

      )}
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-full md:w-2/3 z-10 flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-white text-4xl text-center md:text-start md:text-6xl font-bold fade-up-title">
              Connecting <span className="">Swiss</span> startup experience with{" "}
              <span className="tracking-wide font-italic led-text-weak md:led-text-strong">
                <Typewriter
                  words={["#UZH", "students", "#UZH", "YOU"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <h2 className="text-highlight1 text-1xl md:text-2xl font-medium fade-up-subtitle">
              Think big. Start small.
            </h2>
            <Button href="events" text="See events" fadeup="yes" />
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
      </>
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
