import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const headings = [
    "Frontend Developer",
    "Fullstack Developer",
    "Webfocus Developer",
  ];
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward (left to right)
        setCurrentText(headings[currentHeadingIndex].slice(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex + 1 === headings[currentHeadingIndex].length) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
        }
      } else {
        // Deleting backward (right to left)
        setCurrentText(headings[currentHeadingIndex].slice(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentHeadingIndex((prevIndex) =>
            prevIndex === headings.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(typingTimeout);
  }, [letterIndex, isDeleting, currentHeadingIndex]);
  const navigate = useNavigate();

  const handle_linkAbout = () => {
    navigate("/about");
  };
  return (
    <div className="h-[87.5vh] bg-[#0a192f] text-white overflow-hidden">
      <div className="mx-auto w-9/12 mt-28">
        <h1 className="text-5xl font-bold">Hey, I am Vijay</h1>
        <h1
          className="text-5xl font-bold text-blue-400 absolute mt-4 transition-opacity duration-500"
          style={{ opacity: currentText ? 1 : 0 }}
        >
          {currentText}
          <span className="blinking-cursor">|</span>
        </h1>
        <div className="mt-8">
          <h1 className="mt-24 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
            I am a Full-Stack Developer/Data Analyst. I am currently working at
            Tigma Technologies as a Front-End Developer / Data Analyst
          </h1>
        </div>

        <div className="flex md:justify-start">
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <LinkedInIcon fontSize="large" />
          </h1>
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <InstagramIcon fontSize="large" />
          </h1>
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <GitHubIcon fontSize="large" />
          </h1>
        </div>
        <p
          className="mt-12 font-bold text-gray-400 cursor-pointer"
          onClick={handle_linkAbout}
        >
          See More About Me
          <span className="ml-6 inline-block animate-move-right">
            <EastIcon />
          </span>
        </p>

        <style jsx>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          @keyframes move-right {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(8px); /* Adjust the distance as needed */
            }
          }

          .animate-move-right {
            animation: move-right 0.4s ease infinite alternate;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Home;
