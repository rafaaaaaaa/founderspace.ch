import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../helpers/contentfulClient";
import Subtitle from "../components/Subtitle";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

function NewsSection() {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState(null);

  useEffect(() => {
    getNews().then((res) => {
      setNewsItems(res);
      setIsLoaded(true);
    });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  function newsItemCard(item) {
    return (
      <li
        className="relative flex flex-col sm:flex-row xl:flex-col items-start"
        key={item.title}
      >
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-white font-light line-clamp-3 text-justify">
            <span className="mb-1 block text-sm leading-6 text-highlight1 line-clamp-3">
              <span className="font-bold">
                {formatDate(item.date)}: {"      "}
              </span>{" "}
            </span>
            {item.title}
          </h3>
          <Link
            to={{
              pathname: `/news/${item.id}`,
              state: { id: item.id },
            }}
          >
            <div className="group inline-flex items-center h-9 rounded-md text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-highlight2 text-white mt-6">
              Read more
              <span className="sr-only">
                , Completely unstyled, fully accessible UI components
              </span>
              <svg
                className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </div>
          </Link>
          ;
        </div>
        <img
          src={item.image.fields.file.url}
          alt="news item"
          className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full xl:w-max-96 max-h-56 object-cover"
        />
      </li>
    );
  }

  function modal() {
    return (
      <div className="fixed justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-1xl font-light font-semibold">
                {currentModalContent.title} (
                {formatDate(currentModalContent.date)})
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-highlight2 text-md leading-relaxed">
                <ReactMarkdown>{currentModalContent.content}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full animated ${
        isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
      }`}
    >
      <Subtitle text="News" />
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
        {newsItems?.map((newsItem) => newsItemCard(newsItem))}
      </ul>

      {showModal && modal()}
    </div>
  );
}

export default NewsSection;
