import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaReact } from "react-icons/fa";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Circle,
  Dashboard,
  Laptop,
  PresentToAll,
  Work,
} from "@mui/icons-material";
import GCE_Clg from "../images/GCE_Clg.png";
import Tigma_img from "../images/logo_tigma.png";
const Experience = () => {
  return (
    <main className="flex-grow bg-gray-100 dark:bg-[#0a192f]  text-black dark:text-white">
      <div className="mx-auto  md:w-9/12 max-md:h-[101%] max-md:w-12/12 lg:w-8/12 xl:w-9/12  max-sm:pt-2 md:pt-12 max-sm:ml-2">
        <h1 className="text-2xl text-center font-bold">My Journey</h1>
        <div className="mt-10">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(55,65,81)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(55,65,81)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<Laptop />}
              date="Jan 2024 to Present"
            >
              <h1 className="vertical-timeline-element-title text-[#08a078] text-[22px] ">
                Projects & Experience
              </h1>
              <div className="flex ">
                <div>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Worked on a Eudox Projects – Student Learning App for a US-based college, using React.js and React Native for frontend development."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Collaborated with senior management to develop the Citizen Project, creating dashboards, reports, charts, and maps for data analysis. Worked on processing and matching large datasets to extract meaningful insights and enhance decision-making."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Built end-to-end applications using React.js, Express.js, and MongoDB, improving problem-solving and development workflow."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Currently focusing on frontend development, specializing in React.js, UI/UX best practices, and performance optimization. Additionally, beginning to explore Data Structures and Algorithms (DSA) to strengthen problem-solving skills."
                        />
                      </ListItem>
                    </List>
                  </Box>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(55,65,81)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(55,65,81)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaReact />}
              date="June 2023 to Dec 2023"
            >
              <h1 className="vertical-timeline-element-title text-[#08a078] text-[22px] ">
                Learning & Expanding Skills
              </h1>
              <div className="flex ">
                <div>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Deep dived into React.js,React Native, JavaScript, and UI frameworks, building personal projects to strengthen frontend skills."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Worked on a Casting Networks Projects – using React.js and MySQL  for development."
                        />
                      </ListItem>
                    </List>
                  </Box>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(55,65,81)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(55,65,81)",
              }}
              iconStyle={{ background: "green", color: "#fff" }}
              icon={<Dashboard />}
              date="Nov 2022 to May 2023"
            >
              <h1 className="vertical-timeline-element-title text-[#08a078] text-[22px] ">
                Transition to a Permanent Role
              </h1>
              <div className="flex ">
                <div>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Promoted to Permanent Software Engineer, taking on more responsibilities in data reporting, dashboard creation, and automation."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Started exploring React.js, aiming to shift towards frontend development."
                        />
                      </ListItem>
                    </List>
                  </Box>
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(55,65,81)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(55,65,81)",
              }}
              iconStyle={{ background: "#ea6024", color: "#fff" }}
              icon={<Work />}
              date="Aug 2022 - Oct 2022"
            >
              <h1 className="vertical-timeline-element-title text-[#08a078] text-[22px] ">
                First Job as a Trainee
              </h1>
              <div className="lg:flex ">
                <div>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Joined Tigma Technology Company as a Trainee Software Engineer."
                        />
                      </ListItem>
                    </List>
                  </Box>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>

                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Gaining hands-on experience in Reactjs and WebFOCUS and business intelligence tools."
                        />
                      </ListItem>
                    </List>
                  </Box>
                </div>
                <div>
                  <img src={Tigma_img} className="mt-10  w-[300px] h-[70px]" />
                </div>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(55,65,81)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(55,65,81)",
              }}
              iconStyle={{ background: "#ed987b", color: "#fff" }}
              icon={<FaGraduationCap />}
              date="Aug 2018 - June 2022"
            >
              <h1 className="vertical-timeline-element-title text-[#08a078] text-[22px] ">
                College Graduation
              </h1>
              <div className="lg:flex">
                <div>
                  <Box sx={{ maxWidth: "md" }}>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <Circle sx={{ color: "white", fontSize: "10px" }} />
                        </ListItemIcon>
                        <ListItemText
                          className=" text-[7px] text-white"
                          primary="Completed my Bachelor’s degree in Computer Science Engineering
                from Government Collge Of Engineering,Thanjavur."
                        />
                      </ListItem>
                    </List>
                  </Box>
                </div>
                <div>
                  <img src={GCE_Clg} className="mt-8 w-[400px] h-[100px]" />
                </div>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </main>
  );
};

export default Experience;
