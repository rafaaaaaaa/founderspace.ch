import { FaChevronLeft } from "react-icons/fa";

function Title(props) {
  var title = props.text.toUpperCase();
  var underlinedTitle = title.substring(0, title.length - 2);
  var notunderlinedTitle = title.substring(title.length - 2, title.length);
  return (

    <h1 className="relative inline-block bg-gradient-to-r text-white font-medium text-2xl md:text-2xl mb-8 tracking-wider">

      {
        props.withBackButton && (
          <div>
            <a href="/" className="flex flex-row items-center gap-3">
              <FaChevronLeft color="white" size={28} />

              <div>
                <span className="bg-gradient-to-r from-highlight1 to-highlight2 bg-[length:100%_4px] pb-1 bg-no-repeat bg-bottom">
                  {underlinedTitle}
                </span>
                {notunderlinedTitle}
              </div>
            </a>
          </div>

        )
      }

      {
        !props.withBackButton && (
          <div>

            <div>
              <span className="bg-gradient-to-r from-highlight1 to-highlight2 bg-[length:100%_4px] pb-1 bg-no-repeat bg-bottom">
                {underlinedTitle}
              </span>
              {notunderlinedTitle}
            </div>
          </div>

        )
      }



    </h1>
  );
}

export default Title;
