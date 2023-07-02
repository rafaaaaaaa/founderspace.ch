import { FaChevronRight } from "react-icons/fa";

function FooterLink(props) {
  return (
    <div className="flex flex-row items-center mb-1">
      <FaChevronRight
        color="white"
        size={12}
        className="hover:color-highlight2"
      />
      <a
        href={props.href}
        className={`text-sm block pl-3 pr-4 text-white hover:text-highlight2 font-haas ${
          props.isActive ? "text-highlight2" : "text-white"
        }`}
        aria-current="page"
      >
        {props.title}
      </a>
    </div>
  );
}

export default FooterLink;
