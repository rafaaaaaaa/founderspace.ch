import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import "../index.css";

function OpenRoles() {
  useEffect(() => {
    document.title = "FounderSpace | Open Roles";
  }, []);

  return (
    <div>
      <Title text="Open Roles" />
      <ul className="text-white mb-8 list-disc text-justify">
        <p className="text-1xl">
          Interested in contributing to FounderSpace, meeting new people from
          the Swiss startup ecosystem, help creating insightful events and be
          part of a vibrant young team of students? Then one of the following
          roles might be the right fit for you! For HS24, we are searching for
          Speaker Onboarders, Marketing Managers, Event Coordinators as well as
          Sponsoring Managers. Check our{" "}
          <a
            class="text-blue-400 underline"
            href="https://www.instagram.com/founderspace.ch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          for role descriptions.
        </p>

        <div className="image-container">
          <img
            src={require("../HowToApply.png")}
            className="mt-6 h-96 self-center"
            alt="How To Apply"
          />
        </div>
      </ul>
    </div>
  );
}

export default OpenRoles;
