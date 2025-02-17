function Link(props) {
  return (
    <a
      href={props.href}
      className={`block pr-4 text-white hover:text-highlight1 font-bold ${
        props.isActive ? "text-highlight1" : "text-white"
      }`}
      aria-current="page"
    >
      {props.title}
    </a>
  );
}

export default Link;
