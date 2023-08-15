import "../index.css"

function Button(props) {
  let shouldFadeup = props.fadeup === 'yes';
  return (
    <a
      href={props.href}
      type="button"
      className={"glow-button text-white bg-gradient-to-r from-blue to-purple rounded-lg text-sm py-2.5 text-center w-32 font-medium " + (shouldFadeup ? 'fade-up-text fade-up-button' : '')}
    >
      {props.text}
    </a>

  );
}

export default Button;
