function Title(props) {
  return (
    <h1 class="relative inline-block bg-gradient-to-r  text-white from-highlight1 to-highlight2 text-2xl md:text-2xl font-italic mb-8 tracking-wider">
      {props.text.toUpperCase()}
      <span class="absolute bottom-0 h-0.5 bg-gradient-to-r from-blue to-purple"></span>
    </h1>
  );
}

export default Title;
