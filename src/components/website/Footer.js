import { Link } from "react-scroll";

function Footer() {
  let date = new Date();
  return (
    <div
      className="flex flex-col "
      id="Section5"
    >
      <div className="flex flex-col items-center rounded-t-xl justify-between w-full  py-8  shadow-lg bg-gray-800 sm:px-10 sm:py-8  lg:space-y-0">
        <span className="hidden text-base font-light text-white md:flex lg:text-lg">
          © {date.getFullYear()} All right reserved - fjerbi
        </span>
        <span className="flex flex-col items-center space-y-2 text-sm font-normal text-white md:hidden">
          <span className="text-xs text-custom-lightGray">
            © {date.getFullYear()} All right reserved
          </span>
          <span>
            <a href="#">fjerbi</a>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
