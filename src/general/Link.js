function Link(props) {
  return (
    <a
      href={props.href}
      className={`block pl-3 pr-4 text-white hover:text-highlight2 font-haas ${
        props.isActive ? "text-highlight2" : "text-white"
      }`}
      aria-current="page"
    >
      {props.title}
    </a>
  );
}

export default Link;
