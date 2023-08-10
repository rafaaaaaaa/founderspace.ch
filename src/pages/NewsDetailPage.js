import { useEffect } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { getNewsById } from "../helpers/contentfulClient";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
  }, [id]);

  return (
    <div>
      {newsItem !== undefined && newsItem !== null && (
        <div className="h-min-screen w-full md:w-2/3 grid items-center">

          <Title text={newsItem.title} withBackButton={true} />
          <div className="justify-self-center">
            <img
              src={newsItem.image.fields.file.url}
              alt="news item"
              className="mb-6 shadow-md rounded-lg bg-slate-50  object-cover"
            />

            <ReactMarkdown className="text-white line-break text-justify" remarkPlugins={[remarkGfm]}>
              {newsItem.content}
            </ReactMarkdown>
          </div>

        </div>
      )}
    </div>
  );
}

export default NewsDetailPage;
