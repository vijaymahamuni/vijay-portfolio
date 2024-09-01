import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log("location", location.pathname);
  return (
    <div className="flex justify-between  items-center mx-auto w-9/12 text-white ">
      <div className="text-[18px] font-[500]">Vijay Mahamuni</div>
      <div className="  p-2 m-4">
        <ul className="flex">
          <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
            <Link
              to="/"
              className={location.pathname === "/" ? "text-white" : ""}
            >
              Home
            </Link>
          </li>
          <li className="mx-5 p-2  text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
            <Link
              to="/about"
              className={location.pathname === "/about" ? "text-white" : ""}
            >
              About
            </Link>
          </li>
          <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
            <Link
              to="/project"
              className={location.pathname === "/project" ? "text-white" : ""}
            >
              Projects
            </Link>
          </li>
          <li className="mx-5 p-2  text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
            Blog
          </li>
          <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "text-white" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
