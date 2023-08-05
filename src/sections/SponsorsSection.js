import { useEffect } from "react";
import { useState } from "react";
import { getPartners } from "../helpers/contentfulClient";
import Subtitle from "../components/Subtitle";

function SponsorsSection() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then((res) => {
      setPartners(res.sort((a, b) => a.order - b.order));
      setIsLoaded(true);
    });
  }, []);

  function partnerItem(partner) {
    return (
      <a href={partner.websiteurl} className="flex items-center" key={partner.name}>
        <img
          className="w-56 rounded-lg shadow-xl dark:shadow-gray-800"
          src={partner.logo.fields.file.url}
          alt={partner.altText}
        />
      </a>
    );
  }

  return (
    <div
      className={`w-full animated ${isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
        }`}
    >
      <Subtitle text="Our Partners"/>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-16 my-8">
        {partners?.map((partner) => partnerItem(partner))}
      </div>
    </div>
  );
}

export default SponsorsSection;
