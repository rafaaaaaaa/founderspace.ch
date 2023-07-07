function Button(props) {
  return (
    <a
      href={props.href}
      type="button"
      className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center font-bold w-32 font-haas fade-up-text"
    >
      {props.text}
    </a>
  );
}

export default Button;
