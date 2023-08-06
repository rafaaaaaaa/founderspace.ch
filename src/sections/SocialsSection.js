import Subtitle from "../components/Subtitle";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
function SocialsSection() {
  function SocialsPost(imgsrc, text, date, profile, channel, posturl) {
    return (
      <a
      className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow"
        href={posturl}
      >
        <div>
          <div className="relative">
            <img
              alt="social media post img"
              className="aspect-video w-full object-cover"
              src={imgsrc}
            />
            <h1 className="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              KindaCode.com
            </h1>
            <h3 className="absolute text-2xl text-blue-300 top-5 right-5">
              {channel === "instagram" && (
                <FaInstagram color="white" size={30} />
              )}
              {channel === "linkedin" && <FaLinkedin color="white" size={30} />}
            </h3>
          </div>
        </div>

        <div className="p-4">
          <p className="mb-1 text-sm text-primary-500">
            {profile} • <time>{date}</time>
          </p>
          <p className="mt-1 text-gray-500">{text}</p>
        </div>
      </a>
    );
  }

  return (
    <div>
      <Subtitle text="Socials" />
      <div
        className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8"
        style={{ display: "flex", justifyContent: "start" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SocialsPost(
            "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg",
            "text text text",
            "06 Aug 23",
            "@founderspace.ch",
            "instagram",
            "www.google.com"
          )}
          {SocialsPost(
            "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg",
            "text text text",
            "08 Aug 23",
            "@Founderspace",
            "linkedin",
            "www.google.com"
          )}
          {SocialsPost(
            "https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg",
            "text text text",
            "12 Aug 23",
            "@founderspace.ch",
            "instagram",
            "www.google.com"
          )}
        </div>
      </div>
    </div>
  );
}

export default SocialsSection;
