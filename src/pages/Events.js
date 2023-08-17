import "../index.css"
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";
import { getEvents } from "../helpers/contentfulClient";
import Title from '../components/Title';
import Button from "../components/Button";


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
        const weekDay = getWeekday(new Date(obj.eventDatetime));
        return { ...obj, title: weekDay + ", " + transformedDatetime };
      });

      const sortedTransformedData = transformedData.sort(
        (objA, objB) => Number(new Date(objA.eventDatetime)) - Number(new Date(objB.eventDatetime)),
      );
      setEvents(sortedTransformedData);
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

  const formatDateNoYear = (dateString) => {
    const options = { month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  const getWeekday = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(date);
    var dayName = days[d.getDay()];
    return dayName;
  }

  const isMobile = width <= 768;

  function eventItem(event) {
    return (
      <div className="wrapper antialiased text-gray-900" key={event.title}>
        <div>
          <img src={event.eventImage.fields.file.url} alt="event" className="brightness-50 w-full rounded-lg shadow-md h-64 w-full object-cover" />
          <div className="relative px-4 -mt-16  ">
            <div className="glassy p-6 rounded-lg shadow-lg">
              <div className="flex flex-row gap-2 items-center">
                <span className="bg-highlight1 text-white text-sm px-2 rounded-full font-light flex-none">
                  {formatDateNoYear(event.title)}
                </span>
                <div className="shrink">
                  <div className="text-gray-100 uppercase text-xs font-light tracking-wider">
                    {event.eventLocation}
                  </div>
                </div>
              </div>
              <h3 className="mt-1 text-xl text-ellipsis font-light text-white">{event.eventTitle}</h3>
              <div className="mt-1 text-justify font-light text-white">
                {event.eventDescription}
                <span className="text-white text-sm"></span>
              </div>
              <div className="mt-4">
                {
                  event.signuprequired === true && (
                    <Button
                      href={event.signUpUrl}
                      text="Sign Up"
                    />
                  )
                }

                {
                  event.signuprequired === false && (
                    <div className="mt-1 text-justify font-light text-highlight1">
                      no sign up required
                    </div>
                  )
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="">
      <p className="text-white text-1xl text-justify md:text-left md:text-2xl mb-20">
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
            <div>
              <Title text="Upcoming Events" />
              <Chrono
                className="h-96"
                mode="VERTICAL_ALTERNATING"
                items={events}
                hideControls={true}
                theme={{
                  primary: "#01ABFD",
                  secondary: "transparent",
                  cardBgColor: "transparent",
                  titleColor: "	#FFFFFF",
                  titleColorActive: "	#FFFFFF",
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
            </div>
          ) : (
            <div>
              <Title text="Upcoming Events" />
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
