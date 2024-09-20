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
      <div className="mx-auto max-sm:ml-2 max-sm:w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-9/12 lg:mt-24 lg:flex lg:justify-between">
        <div>
          <div className="lg:hidden">
            <img
              src="data:image/png;base64,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"
              className="w-40 rounded-full  lg:ml-24"
              alt=""
            />
          </div>
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
                  transform: translateY(
                    2px
                  ); /* Adjust the distance as needed */
                }
              }

              .animate-move-bottom {
                animation: move-bottom 0.2s ease infinite alternate;
              }
            `}</style>
          </h1>

          <div className="mt-8">
            <h1 className="mt-24 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
              I am a Full-Stack Developer/Data Analyst. I am currently working
              at Tigma Technologies as a Front-End Developer / Data Analyst
            </h1>
          </div>

          <div className="mt-14 flex">
            <button className="p-[10px] border-2 border-gray-200  text-white rounded-3xl  hover:bg-gray-300 hover:text-black">
              Download CV
            </button>
            <button className="p-[10px] text-white border-2 border-gray-200 ml-10 rounded-3xl hover:bg-gray-300 hover:text-black">
              Contact Info
            </button>
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

        <div className="max-md:hidden">
          <img
            src="data:image/png;base64,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"
            className="w-40 rounded-full  lg:ml-24"
            alt=""
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
