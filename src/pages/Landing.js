import { useEffect } from "react";
import Title from "../general/Title";
import "./../style.css";
import { Typewriter } from "react-simple-typewriter";
import { getNews } from "../components/contentfulClient";
import { useState } from "react";


function titleSection() {
  return (
    <div className="flex flex-col items-center md:items-start justify-center h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="flex flex-col gap-6 items-center md:items-start z-50 w-3/5 absolute m-5">
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

      <div dangerouslySetInnerHTML={{
        __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="${require('../landingvideo1.mp4')}"
          class="z-30 globe-video" 
          width="auto" 
          height="auto"
        />,
      ` }} />
    </div>

  );
}

function informativeCard(idx, number, text, img) {
  let animationClass = ""
  if (idx === 1) {
    animationClass = "animate-fade-up animate-delay-300 animate-once"
  }
  if (idx === 2) {
    animationClass = "animate-fade-up animate-delay-500 animate-once"
  }
  if (idx === 3) {
    animationClass = "animate-fade-up animate-delay-700 animate-once"
  }

  return (
    <div className={`relative bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-highlight2 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${true ? animationClass : ""}`}>
      <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20">

        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
        </div>
        <div className="flex flex-col h-full items-center text-center">
          <div className="relative inline-flex">
            <div className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600" aria-hidden="true"></div>
            <img className="inline-flex" src={img} width="150" height="150" alt="information about uzh" />
          </div>
          <div className="grow mb-5">
            <h2 className={`text-4xl text-highlight1 font-medium mb-4`}>{number}</h2>
            <p className="text-md text-slate-500 font-light">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function newsItem() {
  return (
    <li class="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div class="order-1 sm:ml-6 xl:ml-0">
        <h3 class="mb-1 text-white font-light">
          <span class="mb-1 block text-sm leading-6 text-highlight1">Headless UI</span>
          Completely unstyled, fully
          accessible UI components</h3>
        <a
          class="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-highlight2 text-white mt-6"
          href="https://headlessui.dev">Learn
          more<span class="sr-only">, Completely unstyled, fully accessible UI components</span><svg
            class="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M0 0L3 3L0 6"></path>
          </svg></a>
      </div><img src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" alt="" class="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
    </li>
  );
}

function Landing() {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    getNews().then((res) => {
      setNewsItems(res);
      console.log(res)
    });
  }, []);

  return (
    <div className="max-w-screen-xl flex flex-col gap-24 justify-between">

      {titleSection()}



      <div className="flex flex-col m-5 items-center md:items-start">
        <Title text="News" />

        <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
          {newsItem()}
          {newsItem()}
          {newsItem()}
          {newsItem()}

        </ul>
        {/*         
        <Title text="News" /> */}
        {/* <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-3 place-self-center" data-spotlight>

          {informativeCard(1, 28184, "Students study at the University Of Zurich", require("../card-01.png"),)}
          {informativeCard(2, 7, "Faculties full of diversity", require("../card-02.png"))}
          {informativeCard(3, "unlimited", "Potential to inspire, grow and build", require("../card-03.png"))}
        </div> */}
      </div>
    </div >
  );
}

export default Landing;
