import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";
import { Laptop, Timeline } from "@mui/icons-material";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-[#374151]">
      {/* Desktop UI design */}
      <div className="lg:flex  max-md:hidden md:hidden  lg:justify-between lg:items-center mx-auto w-9/12 text-gray-700 dark:text-gray-200">
        <div className="text-[18px] font-[650] ">
          Vijay Mahamuni
          {/* <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
            </svg>
          </span> */}
        </div>
        <div className="  p-2 m-2 ">
          <ul className="flex">
            <li className="mx-5 p-2 text-[18px] font-[600]  text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                Home
              </Link>
            </li>
            <li className="mx-5 p-2  text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/skills"
                className={
                  location.pathname === "/skills"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                Skills
              </Link>
            </li>
            <li className="mx-5 p-2  text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/portfolio"
                className={
                  location.pathname === "/portfolio"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                Portfolio
              </Link>
            </li>
            <li className="mx-5 p-2  text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/about-me"
                className={
                  location.pathname === "/about-me"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                About Me
              </Link>
            </li>
            <li className="mx-5 p-2 text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/project"
                className={
                  location.pathname === "/project"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                Projects
              </Link>
            </li>

            {/* <li className="mx-5 p-2 text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "text-gray-700 font-bold dark:text-white"
                    : ""
                }
              >
                Contact
              </Link>
            </li> */}
            <li className="mx-5 p-2 text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
              <button onClick={toggleTheme}>
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </li>
            {/* <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-blue-400 ">
              <Link
                onClick={() => setModeType(!modeType)} // Toggling the boolean value
              >
                {modeType === true ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </Link>
            </li> */}
          </ul>
        </div>
        <div>
          <div className="flex md:justify-start">
            <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-400">
              <LinkedInIcon
                fontSize="medium"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/vijaymahamuni",
                    "_blank"
                  );
                }}
              />
            </h1>
            <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-400">
              <InstagramIcon
                fontSize="medium"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/the_vijay11",
                    "_blank"
                  );
                }}
              />
            </h1>
            <h1 className="mr-5 hover:scale-125 cursor-pointer text-gray-500 dark:text-gray-400 hover:text-blue-400">
              <GitHubIcon
                fontSize="medium"
                onClick={() => {
                  window.open("https://github.com/vijaymahamuni", "_blank");
                }}
              />
            </h1>
          </div>
        </div>
      </div>
      {/* Mobile Display */}
      <div className="lg:hidden">
        <div className="flex justify-between p-[13px] m-0">
          <div className="text-[18px] font-[500] text-black dark:text-white">
            Vijay Mahamuni
          </div>
          <div>
            <div className="flex md:justify-start">
              <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-blue-400">
                <LinkedInIcon
                  fontSize="medium"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/vijaymahamuni",
                      "_blank"
                    );
                  }}
                />
              </h1>
              <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-blue-400">
                <InstagramIcon
                  fontSize="medium"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/the_vijay11",
                      "_blank"
                    );
                  }}
                />
              </h1>
              <h1 className="mr-5 hover:scale-125 cursor-pointer text-gray-400 hover:text-blue-400">
                <GitHubIcon
                  fontSize="medium"
                  onClick={() => {
                    window.open("https://github.com/vijaymahamuni", "_blank");
                  }}
                />
              </h1>
              <h1 className=" hover:scale-125 cursor-pointer text-gray-400 hover:text-blue-400">
                <button onClick={toggleTheme}>
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>
              </h1>
              {/* <li className="mx-5 p-2 text-[18px] font-[600] text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-400">
               
              </li> */}
            </div>
          </div>
        </div>
        <div className="lg:hidden  fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-[#1e293b] text-white flex justify-around items-center p-1">
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <HomeIcon fontSize="large" />
            </Link>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/skills"
              className={`${
                location.pathname === "/skills"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <Laptop fontSize="large" />
            </Link>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/portfolio"
              className={`${
                location.pathname === "/portfolio"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <Timeline fontSize="large" />
            </Link>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/about-me"
              className={`${
                location.pathname === "/about-me"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <PermIdentityIcon fontSize="large" />
            </Link>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/project"
              className={`${
                location.pathname === "/project"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <LocalFireDepartmentIcon fontSize="large" />
            </Link>
          </div>
          {/* <div className="flex flex-col items-center cursor-pointer">
          <Link
            to="/blog"
            className={location.pathname === "/blog" ? "text-white" : ""}
          >
            <LibraryBooksIcon fontSize="large" />
          </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default Header;
