import { useEffect, useState } from "react";
import Link from "./Link";
import Hamburger from "hamburger-react";
import Button from "./Button";
import { useScrollDirection } from "../helpers/useScrollDirection";

function Header(props) {
  const [opened, setOpened] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const scrollDirection = useScrollDirection();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);

    if (width > 780) {
      props.blurBackgroundCallback(false);
      setOpened(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  const isMobile = width <= 768;

  return (
    <header
      className={`w-full sticky ${
        scrollDirection === "down" && !opened ? "-top-24" : "top-0"
      } h-24 transition-all duration-500 z-50`}
    >
      <nav id="nav" className="backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex flex-col justify-center">
            <div className="flex flex-col">
              <img
                src={require("../FounderSpace Logo.png")}
                className="h-14 mr-3"
                alt="FounderSpace Logo"
              />
              {opened && isMobile && (
                <img
                  src={require("../FounderSpace Logo.png")}
                  className="h-14 mr-3 absolute logo-glow"
                  alt="FounderSpace Logo"
                />
              )}
            </div>
            <p className="uppercase text-white mt-1 font-uzh text-xs">
              Patronage of the VSUZH Impulsfabrik
            </p>
          </a>
          <div className="inline-flex md:hidden">
            <Hamburger
              toggled={opened}
              toggle={() => {
                setOpened(!opened);
                props.blurBackgroundCallback(!opened);
              }}
              color="white"
            />
          </div>

          <div className="hidden w-full md:block md:w-auto z-50">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
              <li>
                <Link href="events" title="Events" />
              </li>
              <li>
                <Link href="partnersandsponsors" title="Partners & Sponsors" />
              </li>
              <li>
                <Link href="team" title="Team" />
              </li>
              <li>
                <Button
                  className="text-white glow-button"
                  href="stayinformed"
                  text="Stay Informed"
                />
              </li>
            </ul>
          </div>

          {opened && (
            <div className="block w-full md:hidden">
              <ul className="font-medium flex flex-col pt-4 gap-4 text-2xl">
                <li>
                  <Link href="events" title="Events" />
                </li>
                <li>
                  <Link href="partnersandsponsors" title="Partners & Sponsors" />
                </li>
                <li>
                  <Link href="team" title="Team" />
                </li>
                <li>
                  <Link href="stayinformed" title="Stay Informed" />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
