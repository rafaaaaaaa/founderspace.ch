import "../index.css"

function Button(props) {
  let shouldFadeup = props.fadeup === 'yes';
  return (
    <a
      href={props.href}
      className={"glow-button px-8 py-2.5 text-white bg-gradient-to-r from-blue to-purple rounded-lg text-sm text-center font-medium " + (shouldFadeup ? 'fade-up-text fade-up-button' : '')}
    >
      {props.text}
    </a>

  );
}

export default Button;
