import { useState } from "react";
import Link from "./Link";
import Hamburger from "hamburger-react";

function Header() {
  const [opened, setOpened] = useState(false);

  return (
    <header>
      <div>
        {opened && (
          <div
            id="blurOverlay"
            className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-transparent z-30 none"
          />
        )}
        <nav className="backdrop-blur-sm fixed top-0 left-0 z-50 w-full">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img
                src={require("../founderspace-logo.png")}
                className="h-16 mr-3"
                alt="FounderSpace Logo"
              />
            </a>
            <div className="inline-flex md:hidden">
              <Hamburger toggled={opened} toggle={setOpened} color="white" />
            </div>

            <div className="hidden w-full md:block md:w-auto z-50">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
                <li>
                  <Link href="events" title="Events" />
                </li>
                <li>
                  <Link href="partnerships" title="Partnerships" />
                </li>
                <li>
                  <Link href="board" title="Board" />
                </li>
                <li>
                  <a
                    href="join"
                    type="button"
                    className="text-white bg-highlight2  focus:ring-4 rounded-lg text-sm px-5 py-2.5 font-h"
                  >
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {opened && (
              <div className="block w-full md:hidden">
                <ul className="font-medium flex flex-col pt-4 gap-4">
                  <li>
                    <Link href="events" title="Events" />
                  </li>
                  <li>
                    <Link href="partnerships" title="Partnerships" />
                  </li>
                  <li>
                    <Link href="board" title="Board" />
                  </li>
                  <li>
                    <Link href="join" title="Join Us" />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
