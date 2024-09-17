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
    <main className="flex-grow bg-[#0a192f]  text-white">
      <div className="mx-auto max-sm:ml-2 max-sm:w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-9/12 mt-28">
        <h1 className="lg:text-4xl max-sm:text-lg sm:text-2xl md:text-3xl font-bold">
          Hey, I am Vijay
        </h1>
        <h1
          className="lg:text-4xl max-sm:text-lg  sm:text-2xl sm:max-w-xl sm:mx-auto md:text-3xl lg:mx-0 font-bold text-blue-400 absolute mt-4 transition-opacity duration-500"
          style={{ opacity: currentText ? 1 : 0 }}
        >
          {currentText}
          <span className="inline-block animate-move-bottom">|</span>
          <style jsx>{`
            @tailwind base;
            @tailwind components;
            @tailwind utilities;

            @keyframes move-bottom {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(2px); /* Adjust the distance as needed */
              }
            }

            .animate-move-bottom {
              animation: move-bottom 0.2s ease infinite alternate;
            }
          `}</style>
        </h1>

        <div className="mt-8">
          <h1 className="mt-24 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
            I am a Full-Stack Developer/Data Analyst. I am currently working at
            Tigma Technologies as a Front-End Developer / Data Analyst
          </h1>
        </div>

        <div className="flex md:justify-start">
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <LinkedInIcon
              fontSize="large"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/vijaymahamuni",
                  "_blank"
                );
              }}
            />
          </h1>
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <InstagramIcon
              fontSize="large"
              onClick={() => {
                window.open("https://www.instagram.com/the_vijay11", "_blank");
              }}
            />
          </h1>
          <h1 className="mr-5 mt-10 hover:scale-125 cursor-pointer text-gray-400 hover:text-white">
            <GitHubIcon
              fontSize="large"
              onClick={() => {
                window.open("https://github.com/vijaymahamuni", "_blank");
              }}
            />
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
    </main>
  );
};

export default Home;
