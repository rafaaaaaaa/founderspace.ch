import { useState } from "react";
import Button from "../general/Button";
import { useEffect } from "react";
import { getPartners } from "../components/contentfulClient";

function Partnerships() {
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
      <a href={partner.websiteurl}>
        <img
          class="w-66 rounded-lg shadow-xl dark:shadow-gray-800"
          src={partner.logo.fields.file.url}
          alt="sponsor"
        />
      </a>
    );
  }

  return (
    <div className="max-w-screen-xl flex flex-col flex-wrap justify-between mt-36 md:p-4 text-justify gap-4">
      <div id="uppersection" className="mb-24">
        <span className="text-highlight1 text-1xl">PARTNERSHIPS</span>
        <p className="text-white text-1xl text-left md:text-2xl mb-8">
          FounderSpace is the bridge between the entrepreneurial world and our
          university students. Our club is dedicated to providing our members
          with the knowledge, skills, and connections they need to succeed in
          today's competitive business environment.
          <br />
          <br />
          With your support as a sponsor, we can continue to offer valuable
          programming and resources to our students, and help to promote the
          growth and success of the entrepreneurial community at our university.
          We would be honored to have your organization as a sponsor and look
          forward to working together to achieve our shared goals.
          <br />
        </p>
        <Button href="mailto:contact@foundespace.ch" text="Get in touch" />
      </div>

      <div
        id="lowerSection"
        className={`animated ${
          isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
        }`}
      >
        <span className="text-highlight1 text-1xl">OUR PARTNERS</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          {partners?.map((partner) => partnerItem(partner))}
        </div>
      </div>
    </div>
  );
}

export default Partnerships;
