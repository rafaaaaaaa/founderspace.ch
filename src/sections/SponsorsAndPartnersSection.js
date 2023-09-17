import { useEffect } from "react";
import { useState } from "react";
import {
  getInKindSponsorships,
  getPartners,
  getSponsorships,
} from "../helpers/contentfulClient";
import Subtitle from "../components/Subtitle";

function SponsorsSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [partners, setPartners] = useState([]);
  const [sponsorships, setSponsorships] = useState([]);
  const [inkindSponsorships, setInkindSponsorships] = useState([]);

  useEffect(() => {
    getPartners().then((res) => {
      setPartners(res.sort((a, b) => a.order - b.order));
      setIsLoaded(true);
    });

    getInKindSponsorships().then((res) => {
      setInkindSponsorships(res.sort((a, b) => a.order - b.order));
      setIsLoaded(true);
    });

    getSponsorships().then((res) => {
      setSponsorships(res.sort((a, b) => a.order - b.order));
      setIsLoaded(true);
    });
  }, []);

  function logoLinkItem(partner) {
    return (
      <a
        href={partner.websiteurl}
        className="flex items-center"
        key={partner.name}
      >
        <img
          className="w-56"
          src={partner.logo.fields.file.url}
          alt={partner.altText}
        />
      </a>
    );
  }

  return (
    <div
      className={`w-full animated flex flex-col gap-16 ${
        isLoaded ? "animate-fade-up animate-delay-300 animate-once" : ""
      }`}
    >
      <div>
        <Subtitle text="Partnerships" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 my-4">
          {partners?.map((partner) => logoLinkItem(partner))}
        </div>
      </div>
      <div>
        <Subtitle text="Club Sponsors" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 my-4">
          {sponsorships?.map((sponsorship) => logoLinkItem(sponsorship))}
        </div>
      </div>

      <div>
        <Subtitle text="In-Kind Sponsors" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 my-4">
          {inkindSponsorships?.map((inkindSponsorship) =>
            logoLinkItem(inkindSponsorship)
          )}
        </div>
      </div>
    </div>
  );
}

export default SponsorsSection;
