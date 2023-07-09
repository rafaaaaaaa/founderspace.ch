import { FaLinkedin } from "react-icons/fa";

function Board() {
  const members = [
    {
      name: "Rafael Estermann",
      position: "Operations",
      portrait: require("../images/rafael.e.jpg"),
      linkedinUrl: "https://www.linkedin.com/in/rafael-estermann/",
    },
    {
      name: "Nikola Kitanovic",
      position: "Partnerships",
      portrait: require("../images/nikola.k.jpg"),
      linkedinUrl: "https://www.linkedin.com/in/nikola-k-a72bb4213/",
    },
    {
      name: "Anne-Sophie Skarabis",
      position: "Marketing",
      portrait: require("../images/annesophie.s.jpg"),
      linkedinUrl: "https://www.linkedin.com/in/anne-sophie-skarabis/",
    },
    {
      name: "Junaid Hasan",
      position: "Events",
      portrait: require("../images/junaid.h.jpg"),
      linkedinUrl: "https://www.linkedin.com/in/junaid-maria-hasan-765234228/",
    },
  ];

  function memberItem(member) {
    return (
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
        <div class="w-full max-w-sm bg-white  rounded-lg shadow">
          <img
            src={member.portrait}
            className=" rounded-t-lg w-full"
            alt="portrait"
          />
          <div class="flex flex-col items-center mt-4 mb-4">
            <h5 class="text-xl font-semibold tracking-tight text-primary font-haas mb-1">
              {member.name}
            </h5>
            <h6 class="text-md text-gray-400 font-haas mb-2 font-thin">
              {member.position}
            </h6>
            <a href={member.linkedinUrl}>
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
        dynamic team of passionate UZH students united by a common
        mission: to create value for our fellow students. We believe in the
        transformative power of entrepreneurship and its ability to empower
        individuals to shape their own futures.
      </p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {members?.map((member) => memberItem(member))}
      </div>
    </div>
  );
}

export default Board;
