function Button(props) {
  return (
    <a
      href={props.href}
      type="button"
      className={"glow-button text-white bg-gradient-to-r from-blue to-purple rounded-lg text-sm py-2.5 text-center w-32 font-medium fade-up-text " + props.className}
    >
      {props.text}
    </a>

  );
}

export default Button;
