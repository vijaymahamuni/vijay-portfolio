import Portfolioimg from "../images/Portfolio.PNG";
const Project = () => {
  const Food_git = () => {};
  return (
    <div className="flex-grow bg-[#0a192f]  text-white">
      <div className="mx-auto max-md:h-[102%] w-9/12 lg:pt-12 md:pt-4 ">
        <h1 className="lg:text-2xl max-md:text-xl max-md:mt-1 lg:font-bold max-md:text-center">
          Personal Projects
        </h1>
        <h1 className="mt-2 text-gray-500 max-md:text-center">
          This page lists some of my personal projects.
        </h1>
        <div className="flex flex-wrap lg:mt-6 md:mt-1 text-black justify-between">
          <div className="pt-[20px] pl-3 mt-4 w-[280px] h-[320px]  rounded-xl border-2 border-gray-400 shadow-lg">
            <div className="w-[250px]  mr-6">
              <img
                src="https://i3.ytimg.com/vi/d79Iqx5lBsg/maxresdefault.jpg"
                alt=""
                className="h-48 rounded-2xl"
              />
              <h1 className="text-center text-white font-bold mt-2">
                Food App
              </h1>
              <div className="text-white flex justify-around mt-4">
                <button
                  className="p-1 w-24 border-2 border-gray-400 rounded-2xl  hover:bg-white hover:text-black"
                  onClick={() => {
                    window.open(
                      "https://github.com/vijaymahamuni/food-app",
                      "_blank"
                    );
                  }}
                >
                  Github
                </button>
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl hover:bg-white hover:text-black">
                  Link
                </button>
              </div>
            </div>
          </div>
          <div className="pt-[20px] pl-3 mt-4 w-[280px] h-[320px]  rounded-xl border-2 border-gray-400  ">
            <div className="w-[250px]  mr-6">
              <img
                src="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"
                alt=""
                className="h-48 rounded-2xl"
              />
              <h1 className="text-center text-white font-bold mt-2">
                Chat App
              </h1>
              <div className="text-white flex justify-around mt-4">
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl  hover:bg-white hover:text-black">
                  Github
                </button>
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl hover:bg-white hover:text-black">
                  Link
                </button>
              </div>
            </div>
          </div>
          <div className="pt-[20px] pl-3 mt-4 w-[280px] h-[320px]  rounded-xl border-2 border-gray-400  ">
            <div className="w-[250px]  mr-6">
              <img
                src="https://assets.devfolio.co/hackathons/ba2b3586ab9b4adf9542ca7757c5c553/projects/63d05d93a59d4d8fa0804d97985087ec/d7874679-bd47-4092-a610-f870036afdf9.jpeg"
                alt=""
                className="h-48 rounded-2xl"
              />
              <h1 className="text-center text-white font-bold mt-2">
                Netflix Clone
              </h1>
              <div className="text-white flex justify-around mt-4">
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl  hover:bg-white hover:text-black">
                  Github
                </button>
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl hover:bg-white hover:text-black">
                  Link
                </button>
              </div>
            </div>
          </div>
          <div className="pt-[20px] pl-3 mt-4 w-[280px] h-[320px]  rounded-xl border-2 border-gray-400">
            <div className="w-[250px]  mr-6">
              <img
                src="https://img.lovepik.com/photo/45015/7638.jpg_wh860.jpg"
                alt=""
                className="h-48 rounded-2xl"
              />
              <h1 className="text-center text-white font-bold mt-2">
                My Portfolio
              </h1>
              <div className="text-white flex justify-around mt-4">
                <button
                  className="p-1 w-24 border-2 border-gray-400 rounded-2xl  hover:bg-white hover:text-black"
                  onClick={() => {
                    window.open(
                      "https://github.com/vijaymahamuni/vijay-portfolio",
                      "_blank"
                    );
                  }}
                >
                  Github
                </button>
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl hover:bg-white hover:text-black">
                  Link
                </button>
              </div>
            </div>
          </div>
          <div className="pt-[20px] pl-3 mt-4 w-[280px] h-[320px]  rounded-xl border-2 border-gray-400  ">
            <div className="w-[250px]  mr-6">
              <img
                src="https://www.uffizio.com/wp-content/uploads/2022/06/leave-management.jpg"
                alt=""
                className="h-48 rounded-2xl"
              />
              <h1 className="text-center text-white font-bold mt-2">
                Leave Management
              </h1>
              <div className="text-white flex justify-around mt-4">
                <button
                  className="p-1 w-24 border-2 border-gray-400 rounded-2xl  hover:bg-white hover:text-black"
                  onClick={() => {
                    window.open(
                      "https://github.com/vijaymahamuni/leavemanagement-frontend",
                      "_blank"
                    );
                  }}
                >
                  Github
                </button>
                <button className="p-1 w-24 border-2 border-gray-400 rounded-2xl hover:bg-white hover:text-black">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
