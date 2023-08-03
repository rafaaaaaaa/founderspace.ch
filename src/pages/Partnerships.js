import SponsorsSection from "../sections/SponsorsSection";

function Partnerships() {
  return (
    <div className="max-w-screen-xl flex flex-col flex-wrap justify-between mt-36 md:p-4 text-justify gap-4">
      <div className="mb-24">
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
        <a
          href="mailto:contact@foundespace.ch"
          type="button"
          className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center w-32 font-medium fade-up-text"
        >
          Get in touch
        </a>
      </div>

      {SponsorsSection()}
    </div>
  );
}

export default Partnerships;
