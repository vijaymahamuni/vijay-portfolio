import { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About = () => {
  const [isHoveredreact, setIsHoveredreact] = useState(false);
  const [isHoverJS, setIsHoverJS] = useState(false);
  const [isHoverdcss, setIsHoverdcss] = useState(false);
  const [isHoveredtailwind, setIsHoveredtailwind] = useState(false);
  const [isHoverdredux, setIsHoverdredux] = useState(false);
  const [isHoveredHtml, setIsHoveredHtml] = useState(false);

  const [isHoveredNode, setIsHoveredNode] = useState(false);
  const [isHoveredMysql, setIsHoveredMysql] = useState(false);
  const [isHoveredMongodb, setIsHoveredMongodb] = useState(false);
  const [isHoveredWebfocus, setIsHoveredWebfocus] = useState(false);
  const [isHoveredRtnative, setIsHoveredRtnative] = useState(false);

  return (
    <main className="flex-grow bg-[#0a192f] text-white">
      <div className="mx-auto w-full md:w-9/12 lg:w-8/12 xl:w-9/12  max-sm:pt-4 md:pt-12 max-sm:ml-2">
        <div>
          <h1 className="text-xl md:text-2xl lg:font-bold max-md:text-center">
            About Me
          </h1>

          <Box sx={{ maxWidth: "md" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText primary="I am Vijay, a 24-year-old Software Developer." />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText primary="I'm a passionate web developer with a strong focus on building robust and dynamic web applications." />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText primary="I take into consideration the user experience while writing reusable and efficient code." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText
                  primary=" I passionately combine good design,
              technology, and innovation in all my projects."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText
                  primary="In addition to web development, I have a solid background in data
              analysis, particularly with WebFOCUS."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Have completed my bachelor's degree in Computer Science and
              Engineering at GCET, Thanjavur."
                />
              </ListItem>
            </List>
          </Box>
        </div>

        <div className="md:mt-12 max-sm:mt-6">
          <h1 className="text-xl md:text-2xl font-bold max-md:text-center">
            My Skills
          </h1>
          <h1 className="mt-3 text-gray-400 text-sm md:text-base">
            Technologies I have worked with and I am familiar with.
          </h1>
          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            Frontend Development
          </h1>

          <div className="md:mt-4 max:mt-3 flex flex-wrap justify-start">
            {/* Frontend Tech Icons */}
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoverJS(true)}
              onMouseLeave={() => setIsHoverJS(false)}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="w-8 md:w-10"
                alt="JavaScript"
              />
              {isHoverJS && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-20 bg-white text-black rounded-sm">
                  JavaScript
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredreact(true)}
              onMouseLeave={() => setIsHoveredreact(false)}
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-8 md:w-10"
                alt="React"
              />
              {isHoveredreact && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  React
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredHtml(true)}
              onMouseLeave={() => setIsHoveredHtml(false)}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="w-8 md:w-10"
                alt="HTML"
              />
              {isHoveredHtml && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  HTML
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoverdcss(true)}
              onMouseLeave={() => setIsHoverdcss(false)}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                className="w-8 md:w-10"
                alt="CSS"
              />
              {isHoverdcss && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  CSS
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredtailwind(true)}
              onMouseLeave={() => setIsHoveredtailwind(false)}
            >
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-8 md:w-10"
                alt="Tailwind CSS"
              />
              {isHoveredtailwind && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-24 bg-white text-black rounded-sm">
                  Tailwind CSS
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoverdredux(true)}
              onMouseLeave={() => setIsHoverdredux(false)}
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                className="w-8 md:w-10"
                alt="Redux"
              />
              {isHoverdredux && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  Redux
                </p>
              )}
            </div>
          </div>

          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            Backend Development
          </h1>

          <div className="mt-4 flex flex-wrap justify-start">
            {/* Backend Tech Icons */}
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredNode(true)}
              onMouseLeave={() => setIsHoveredNode(false)}
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-8 md:w-10"
                alt="NodeJS"
              />
              {isHoveredNode && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  NodeJS
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredMysql(true)}
              onMouseLeave={() => setIsHoveredMysql(false)}
            >
              <img
                src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png"
                className="w-8 md:w-10"
                alt="MySQL"
              />
              {isHoveredMysql && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-16 bg-white text-black rounded-sm">
                  MySQL
                </p>
              )}
            </div>
            <div
              className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredMongodb(true)}
              onMouseLeave={() => setIsHoveredMongodb(false)}
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                className="w-8 md:w-10"
                alt="MongoDB"
              />
              {isHoveredMongodb && (
                <p className="absolute mt-3 ml-16 text-sm  transform -translate-x-1/2 w-20 bg-white text-black rounded-sm">
                  MongoDB
                </p>
              )}
            </div>
          </div>

          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            WebFOCUS Development
          </h1>

          <div className="mt-4">
            <div
              className="cursor-pointer p-2 bg-[#374151] w-14 rounded-md flex justify-center items-center m-2"
              onMouseEnter={() => setIsHoveredWebfocus(true)}
              onMouseLeave={() => setIsHoveredWebfocus(false)}
            >
              <img
                src="https://store-images.s-microsoft.com/image/apps.200.3ca565e9-ba93-4730-a4f7-0d4e3e9a9a63.2b6b3291-3d7d-4dc9-9197-ab9eb51c3529.b29f50f0-6f2f-425e-b3ec-e7f9bd4598e9"
                className="w-12"
                alt="WebFOCUS"
              />
              {isHoveredWebfocus && (
                <p className="absolute mt-16 ml-56 text-sm  transform -translate-x-1/2 w-24 text-center bg-white text-black rounded-sm">
                  WebFOCUS
                </p>
              )}
            </div>
          </div>

          <h1 className="mt-4 text-lg md:text-xl">Mobile Development</h1>
          <div className="mt-1 flex flex-wrap justify-start">
            <div
              className="mt-4 cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0"
              onMouseEnter={() => setIsHoveredRtnative(true)}
              onMouseLeave={() => setIsHoveredRtnative(false)}
            >
              <img
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                className="w-8 md:w-10"
                alt="React Native"
              />
              {isHoveredRtnative && (
                <p className="absolute mt-[-30px] ml-24 w-[100px] text-sm  transform -translate-x-1/2  bg-white text-black rounded-sm">
                  React Native
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
