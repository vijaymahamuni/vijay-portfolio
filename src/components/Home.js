import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Home = () => {
  return (
    <div className="h-[87.5vh] bg-[#0a192f]  text-white overflow-hidden">
      <div className="mx-auto w-9/12 mt-28 ">
        <h1 className="text-5xl font-bold">Hi, I am Vijay</h1>
        <h1 className="text-5xl font-bold text-blue-400 mt-3">
          Full Stack Developer
        </h1>
        <h1 className="mt-14 text-base text-white  sm:text-lg sm:max-w-xl sm:mx-auto  md:text-xl lg:mx-0">
          I am a Full-Stack Developer/Data Analyst . I am currently working at
          Tigma Technologies as a Front-End Developer / Data Analyst
        </h1>
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
        <button className="px-20 py-4 m-2 mt-12 text-center rounded-md font-bold  bg-blue-500">
          Resume
        </button>
      </div>
    </div>
  );
};
export default Home;
