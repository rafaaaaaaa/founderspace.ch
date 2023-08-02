function Button(props) {
  return (
    <a
      href={props.href}
      type="button"
      className="text-white bg-highlight2 rounded-lg text-sm py-2.5 text-center w-32 font-medium fade-up-text"
    >
      {props.text}
    </a>
    
  );
}

export default Button;
