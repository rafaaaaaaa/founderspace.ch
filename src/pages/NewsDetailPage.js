import { useEffect } from "react";
import Title from "../components/Title";
import { FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getNewsById } from "../helpers/contentfulClient";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function NewsDetailPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState();
  useEffect(() => {
    getNewsById(id).then((res) => {
      setNewsItem(res);
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {newsItem !== undefined && newsItem !== null && (
        <div className="h-screen">
          <div className="flex flex-row gap-6 ">
            <a href="/">
              <FaChevronLeft color="white" size={28} />
            </a>

            <Title text={newsItem.title} />
          </div>
          <ReactMarkdown className="text-white">
            {newsItem.content}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default NewsDetailPage;
