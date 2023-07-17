import { FaLinkedin } from "react-icons/fa";
import { getBoardMembers } from "../components/contentfulClient";
import { useEffect, useState } from "react";

function Board() {
  const [boardMembers, setBoardMembers] = useState([]);

  useEffect(() => {
    getBoardMembers().then((res) =>
      setBoardMembers(res.sort((a, b) => a.order - b.order))
    );
  }, []);

  function memberItem(member) {
    return (
      <div
        className="max-w-screen-xl flex flex-wrap items-center justify-between"
        key={member.name}
      >
        <div className="w-full max-w-sm bg-white  rounded-lg shadow">
          <img
            src={member.portrait.fields.file.url}
            className=" rounded-t-lg w-full"
            alt="portrait"
          />
          <div className="flex flex-col items-center mt-4 mb-4">
            <h5 className="text-xl font-semibold tracking-tight text-primary font-haas mb-1">
              {member.name}
            </h5>
            <h6 className="text-md text-gray-400 font-haas mb-2 font-thin">
              {member.function}
            </h6>
            <a href={member.linkedinurl}>
              <FaLinkedin color="blue" size={24} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl gap-4 md:p-4 text-justify mt-36 md:h-screen">
      <p className="text-white text-1xl md:text-left md:text-2xl mb-20 text-justify">
        <span className="text-highlight1">Meet the FounderSpace Board</span> - a
        dynamic team of passionate UZH students united by a common mission: to
        create value for our fellow students. We believe in the transformative
        power of entrepreneurship and its ability to empower individuals to
        shape their own futures.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {boardMembers?.map((member) => memberItem(member))}
      </div>
    </div>
  );
}

export default Board;
