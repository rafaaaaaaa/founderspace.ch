import "./../glow.css";

function Landing() {
  return (
    <div className="h-full">
      <div className="flex flex-col gap-6 w-full md:w-2/3 items-center md:items-start">
        <h1 className="text-white text-3xl text-center md:text-start md:text-5xl font-haas">
          The hub for student-driven entrepreneurship at
          <span class="glow font-black tracking-wide"> UZH </span>
        </h1>
        <h2 className="text-highlight2 text-2xl font-haas">
          Think big. Start small.
        </h2>
        <a
          href="events"
          type="button"
          className="text-white bg-highlight2 focus:ring-4 rounded-lg text-sm px-5 py-2.5 text-center font-bold w-48 font-haas"
        >
          See Events
        </a>
      </div>
    </div>
  );
}

export default Landing;
