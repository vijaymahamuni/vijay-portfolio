import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const show_DeveloperJourney = () => {
    navigate("/blog/My_Developer_Journey");
  };
  return (
    <div className="flex-grow bg-gray-100 dark:bg-[#0a192f]  text-black dark:text-white cursor-pointer">
      <div className="mx-auto w-9/12 pt-12">
        <div>
          <h1 className="text-2xl font-bold">Blog Writing</h1>
          <div
            className="pt-[20px]  mt-8 w-[250px] rounded-xl"
            onClick={show_DeveloperJourney}
          >
            <div className="h-[270px] border-[1px] border-gray-600">
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-kid-playing-online_23-2150898633.jpg"
                alt=""
                className="h-48  w-[250px]"
              />
              <h1 className="text-center text-black dark:text-white  mt-2">
                My Developer Journey
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
