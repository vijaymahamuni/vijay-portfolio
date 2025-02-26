import { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const About_me = () => {
  const [isHoveredreact, setIsHoveredreact] = useState(false);
  const [isHoverJS, setIsHoverJS] = useState(false);
  const [isHoverExpress, setIsHoverExpress] = useState(false);

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
    <main className="flex-grow bg-gray-100 dark:bg-[#0a192f]  text-black dark:text-white">
      <div className="mx-auto w-full md:w-9/12 max-md:h-[104%] lg:w-8/12 xl:w-9/12  max-sm:pt-2 md:pt-12 max-sm:ml-2">
        <div>
          {/* <h1 className="text-xl md:text-2xl lg:font-bold max-md:text-center">
            About Me
          </h1> */}
          <div className="mx-auto w-4/12">
            <img
              src="data:image/png;base64,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"
              className="w-40  max-md:ml-[100px] lg:ml-24"
              alt=""
            />
            <h1 className="mt-10 text-xl text-center text-green-700">
              IF "PLAN A" DIDN'T WORK ,THE ALPHABET HAS 25 MORE LETTERS
              <span className="text-[#ea6024] ml-2 ">STAY COOL</span>
            </h1>
          </div>
          <div className="mx-auto w-10/12 mt-10">
            <Box sx={{ maxWidth: "md" }}>
              <List>
                <ListItem>
                  <ListItemText primary="React Developer & Data Analyst – With three years of experience, I have built expertise in React.js and WebFOCUS, crafting dynamic, user-friendly interfaces and data-driven applications. My primary focus is frontend development, creating seamless and engaging user experiences." />
                </ListItem>

                <ListItem>
                  {/* <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon> */}
                  <ListItemText
                    primary="I specialize in React.js, leveraging modern UI frameworks and best practices to develop responsive, scalable, and maintainable web applications.
"
                  />
                </ListItem>

                <ListItem>
                  {/* <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon> */}
                  <ListItemText
                    primary="
Full-Stack Development Knowledge – Through personal projects, I have expanded my technical proficiency in Express.js, MongoDB, and Node.js, enabling me to build end-to-end solutions that integrate both frontend and backend technologies.
"
                  />
                </ListItem>
                {/* <ListItem>
                  <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon>
                  <ListItemText primary=" Passionate About Innovation – While my backend skills are primarily self-developed, I am eager to apply them in real-world scenarios, continuously learning and refining my approach to building efficient, scalable applications." />
                </ListItem> */}
                <ListItem>
                  {/* <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "gray" }} />
                </ListItemIcon> */}
                  <ListItemText primary=" I believe coding is like art—where logic meets creativity to build amazing experiences.I am building my skill set - I like taking relevant courses (currently focused on DSA) and improving on the existing ones." />
                </ListItem>
                <ListItem>
                  {/* <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "gray" }} />
                  </ListItemIcon> */}
                  <ListItemText primary="I embrace errors because every time I find a solution, it feels like a moment of spiritual enlightenment.😅" />
                </ListItem>
                <ListItem>
                  {/* <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "gray" }} />
                  </ListItemIcon> */}
                  <ListItemText primary="I spend my leisure time reading books (currently reading Ikigai, by Francesc Miralles, Hector Garcia), travelling,watching movies and playing cricket." />
                </ListItem>
              </List>
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About_me;
