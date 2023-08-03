import { useEffect } from "react";
import { useState } from "react";
import { getNews } from "../helpers/contentfulClient";

function NewsSection() {

  const [newsItems, setNewsItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getNews().then((res) => {
      setNewsItems(res);
      setIsLoaded(true)
    });
  }, []);

  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  function newsItemCard(item) {
    return (
      <li className="relative flex flex-col sm:flex-row xl:flex-col items-start" key={item.title}>
        <div className="order-1 sm:ml-6 xl:ml-0">
          <h3 className="mb-1 text-white font-light line-clamp-3 text-justify">
            <span className="mb-1 block text-sm leading-6 text-highlight1 line-clamp-3"><span className="font-bold">{formatDate(item.date)}: {"      "}</span> {item.title}</span>
            {item.content}</h3>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-highlight2 text-white mt-6"
            href="/">Read more<span className="sr-only">, Completely unstyled, fully accessible UI components</span><svg
              className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round">
              <path d="M0 0L3 3L0 6"></path>
            </svg></a>
        </div>
        <img src={item.image.fields.file.url} alt="news item" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full xl:w-max-96 max-h-56 object-cover" />
      </li>
    );
  }


  return (
    <div
      className={`w-full animated ${isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
        }`}
    >
      <span className="text-highlight1 text-1xl">NEWS</span>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
        {newsItems?.map((newsItem) => newsItemCard(newsItem))}
      </ul>
    </div>
  );
}

export default NewsSection;
