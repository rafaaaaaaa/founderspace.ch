import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Title from "../components/Title";

function JoinUs() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [faculty, setFaculty] = useState("");
  const [applied, setApplied] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tusnznl",
        "template_sj4qw4l",
        form.current,
        "Z0U3DwpA91y5jU3jj"
      )
      .then(
        () => {
          setApplied(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  useEffect(() => {
    document.title = "FounderSpace | Stay Informed";
  }, []);

  return (
    <div>
      <Title text="WHY YOU SHOULD SUBSCRIBE TO OUR NEWSLETTER?" />
      <ul className="text-white mb-8 list-disc text-justify">
        <p className="text-1xl">
          As a subscriber, you'll be the first to receive insider information
          about our latest university offers, upcoming events, and exclusive promotions.
          Join our community of enthusiasts and gain access to expert tips,
          insightful articles, and behind-the-scenes glimpses into our creative
          process. Subscribing is not just about staying updated; it's about
          being a part of something special. Enjoy personalized recommendations,
          special offers, and a direct line to our team.
        </p>
      </ul>

      {!applied && (
        <form
          ref={form}
          className="w-full flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-highlight1"
            >
              Your UZH email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@uzh.ch"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-highlight1"
              >
                Firstname*
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={firstname}
                onChange={(event) => setFirstname(event.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-highlight1"
              >
                Lastname*
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="faculty"
              className="block mb-2 text-sm font-medium text-highlight1"
            >
              Faculty of Studies
            </label>
            <select
              id="faculty"
              name="faculty"
              value={faculty}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={(event) => setFaculty(event.target.value)}
            >
              <option defaultValue>Choose faculty</option>
              <option value="businesseconomicsinformatics">
                Faculty of Business, Economics and Informatics
              </option>
              <option value="theology">Faculty of Theology</option>
              <option value="law">Faculty of Law</option>
              <option value="medicine">Faculty of Medicine</option>
              <option value="artsAndSocial">
                Faculty of Arts and Social Sciences
              </option>
              <option value="science">Faculty of Science</option>
              <option value="vetsuisse">Faculty of Vetsuisse</option>
              <option value="others">Others</option>
            </select>
          </div>
       

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="text-white md:w-2/5 md:text-center bg-highlight2 hover:bg-highlight1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Subscribe
            </button>
          </div>
        </form>
      )}

      {applied && (
        <div>
          <p className="text-lg font-bold text-highlight1">
            Thank you for your application, you'll hear from us in no time!
          </p>
        </div>
      )}
    </div>
  );
}

export default JoinUs;
