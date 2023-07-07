import { Chrono } from "react-chrono";
import "./../style.css";
import Button from "../general/Button";
import { FaMapMarker } from "react-icons/fa";
import { useEffect, useState } from "react";

function Events() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const events = [
    {
      title: "10.10.2023",
      eventTitle: "Microsoft - How Big Tech uses BI",
      eventDecription:
        "This is a event that will take place at the university of zurich",
      dateTimeString: "KOL-F-101, Rämistrasse 154, 8000 Zurich",
      imageURL:
        "https://news.microsoft.com/wp-content/uploads/prod/sites/418/2018/06/Logo.jpg",
      signupLink: "https://www.eventbrite.ch/",
    },
    {
      title: "02.11.2023",
      eventTitle: "Planted - Transforming an idea into practice",
      eventDecription:
        "This is a event that will take place at the university of zurich",
      dateTimeString: "KOL-F-101, Rämistrasse 154, 8000 Zurich",
      imageURL:
        "https://vegconomist.de/wp-content/uploads/sites/2/Planted_Logo_PansyPurple.jpeg",
      signupLink: "https://www.eventbrite.ch/",
    },
    {
      title: "23.10.2023",
      eventTitle: "Nikin - How I founded a clothing brand",
      eventDecription:
        "This is a event that will take place at the university of zurich",
      dateTimeString: "KOL-F-101, Rämistrasse 154, 8000 Zurich",
      imageURL:
        "https://cdn.shopify.com/s/files/1/2426/4919/files/01_Logo-Quer-Standard_black_1.png?height=628&pad_color=fff&v=1631108129&width=1200",
      signupLink: "https://www.eventbrite.ch/",
    },
  ];

  function eventItem(event) {
    return (
      <div className="bg-white rounded-lg overflow-hidden" key={event.title}>
        <div className="relative">
          <img
            className="rounded-t-lg object-contain h-36"
            src={event.imageURL}
            alt={event.eventTitle}
          />
          <h3 className="absolute text-md text-primary top-5 right-5 font-haas">
            {event.title}
          </h3>
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-lg mb:text-xl font-bold text-primary font-haas">
            {event.eventTitle}
          </h5>
          <div className="flex flex-row mb-3 items-center">
            <FaMapMarker size={22} />
            <p className="ml-3 text-sm mb:text-2xl font-bold text-black font-haas">
              {event.dateTimeString}
            </p>
          </div>

          <p className="mb-3 text-sm md:text-md font-normal text-black font-haas">
            {event.eventDecription}
          </p>
          <Button text="Sign Up" href={event.signupLink} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between mt-36 md:p-4 text-justify">
      <p className="text-white text-1xl text-center md:text-left md:text-2xl mb-20">
        Whether you're a budding entrepreneur, a curious student, or simply
        interested in the dynamic world of startups and business ventures, our
        events are open to all and completely free. Expand your horizons,
        connect with like-minded individuals, and gain practical wisdom from
        those who have already paved their way to success.
        <br />
        <span className="text-highlight1">We are happy to welcome you.</span>
      </p>
      <div className="h-max w-full">
        {!isMobile && (
          <Chrono
            className="h-96"
            mode="VERTICAL_ALTERNATING"
            items={events}
            hideControls={true}
            theme={{
              primary: "#01ABFD",
              secondary: "white",
              cardBgColor: "white",
              titleColor: "#01ABFD",
              titleColorActive: "#01ABFD",
            }}
            fontSizes={{
              title: "1rem",
              cardTitle: "1.5rem",
              cardSubtitle: "1rem",
              cardText: "0.8rem",
            }}
            classNames={{
              cardSubTitle: "my-card-subtitle"
            }}
          >
            {events.map((event) => eventItem(event))}
          </Chrono>
        )}
        {isMobile && (
          <div>
            {events.map((event) => (
              <div key={event.title} className="mb-10">{eventItem(event)} </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
