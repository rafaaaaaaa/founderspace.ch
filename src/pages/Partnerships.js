import Title from "../components/Title";
import SponsorsSection from "../sections/SponsorsSection";

function Partnerships() {
  return (
    <div className="flex flex-col gap-4">
      <div className="mb-24">
        <Title text="PARTNERSHIPS" />
        <p className="text-white text-1xl md:text-2xl mb-8 text-justify">
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
        <a
          href="mailto:contact@foundespace.ch"
          type="button"
          className={"glow-button text-white bg-gradient-to-r from-blue to-purple rounded-lg text-sm py-2.5 text-center w-32 font-medium fade-up-text "}
        >
          Get in touch
        </a>
      </div>

      {SponsorsSection()}
    </div>
  );
}

export default Partnerships;
