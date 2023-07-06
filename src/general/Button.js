function Button(props) {
  return (
    <a
      {...props}
      href={props.href}
      type="button"
      className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center font-bold w-48 font-haas fade-up-text"
    >
      {props.text}
    </a>
  );
}

export default Button;
