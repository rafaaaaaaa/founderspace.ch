import { Chrono } from "react-chrono";
import "./../index.css";
import { FaMapMarker } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getEvents } from "../helpers/contentfulClient";

function Events() {
  const [width, setWidth] = useState(window.innerWidth);
  const [events, setEvents] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    getEvents().then((res) => {
      const transformedData = res.map((obj) => {
        const transformedDatetime = formatDate(obj.eventDatetime);
        return { ...obj, title: transformedDatetime };
      });
      setEvents(transformedData);
      setIsLoaded(true);
    });

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const isMobile = width <= 768;

  function eventItem(event) {
    return (
      <div className="bg-white rounded-lg overflow-hidden" key={event.title}>
        <div className="relative">
          <img
            className="rounded-t-lg object-contain h-32"
            src={event.eventImage.fields.file.url}
            alt={event.eventTitle}
          />
          <h3 className="absolute text-md text-primary top-5 right-5 font-bold">
            {event.title}
          </h3>
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-lg mb:text-xl font-bold text-primary">
            {event.eventTitle}
          </h5>
          <div className="flex flex-row mb-3 items-center">
            <FaMapMarker size={22} />
            <p className="ml-3 text-sm mb:text-2xl font-medium text-black ">
              {event.eventLocation}
            </p>
          </div>

          <p className="mb-3 text-sm md:text-md font-light text-black">
            {event.eventDescription}
          </p>
          <a
            href={event.signUpUrl}
            type="button"
            className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center w-32 font-medium fade-up-text"
          >
            Sign Up
          </a> 
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between mt-36 md:p-4 text-justify">
      <p className="text-white text-1xl text-center md:text-left md:text-2xl mb-20">
        Whether you're a budding entrepreneur, a curious UZH student, or simply
        interested in the dynamic world of startups and business ventures, our
        events are open to all and completely free. Expand your horizons,
        connect with like-minded individuals, and gain practical wisdom from
        those who have already paved their way to success.
        <br />
        <span className="text-highlight1">We are happy to welcome you.</span>
      </p>
      <div
        className={`h-max w-full animated ${isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
          }`}
      >
        {events.length > 0 ? (
          !isMobile ? (
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
                cardSubTitle: "my-card-subtitle",
              }}
            >
              {events?.map((event) => eventItem(event))}
            </Chrono>
          ) : (
            <div>
              {events?.map((event) => (
                <div key={event.eventTitle} className="mb-10">
                  {eventItem(event)}{" "}
                </div>
              ))}
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Events;
