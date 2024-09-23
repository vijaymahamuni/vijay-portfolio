import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useState } from "react";
const Header = () => {
  const location = useLocation();
  // const [modeType, setModeType] = useState(false);
  // console.log("location", location.pathname);
  return (
    <div>
      {/* Desktop UI design */}
      <div className="lg:flex max-md:hidden lg:justify-between lg:items-center mx-auto w-9/12 text-white">
        <div className="text-[18px] font-[500] ">Vijay Mahamuni</div>
        <div className="  p-2 m-2 ">
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
              <Link
                to="/blog"
                className={location.pathname === "/blog" ? "text-white" : ""}
              >
                Blog
              </Link>
            </li>
            <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white">
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "text-white" : ""}
              >
                Contact
              </Link>
            </li>
            {/* <li className="mx-5 p-2 text-[18px] font-[400] text-gray-500 cursor-pointer hover:text-white ">
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
            <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
            <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
            <h1 className="mr-5 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
        <div className="flex justify-between p-1 m-2">
          <div className="text-[18px] font-[500] text-white">
            Vijay Mahamuni
          </div>
          <div>
            <div className="flex md:justify-start">
              <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
              <h1 className="mr-5  hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
              <h1 className="mr-5 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
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
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-[#1e293b] text-white flex justify-around items-center p-1">
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
              to="/about"
              className={`${
                location.pathname === "/about"
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
          <div className="flex flex-col items-center cursor-pointer">
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "bg-blue-500 text-white p-1 rounded-full shadow-lg"
                  : "text-gray-500"
              }`}
            >
              <AddIcCallIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
