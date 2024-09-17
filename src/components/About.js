const About = () => {
  return (
    <main className="flex-grow bg-[#0a192f] text-white">
      <div className="mx-auto w-full md:w-9/12 lg:w-8/12 xl:w-9/12  max-sm:pt-4 md:pt-12 max-sm:ml-2">
        <div>
          <h1 className="text-xl md:text-2xl font-bold">About Me</h1>
          <div className="md:mt-6 max-sm:mt-2 text-base md:text-lg">
            <h1>I am Vijay, a 24-year-old Software Developer.</h1>
            <h1 className="mt-2">
              I'm a passionate web developer with a strong focus on building
              robust and dynamic web applications.
            </h1>
            <h1 className="mt-2">
              I take into consideration the user experience while writing
              reusable and efficient code. I passionately combine good design,
              technology, and innovation in all my projects.
            </h1>
            <h1 className="mt-2">
              In addition to web development, I have a solid background in data
              analysis, particularly with WebFOCUS.
            </h1>
            <h1 className="mt-2">
              Have completed my bachelor's degree in Computer Science and
              Engineering at GCET, Thanjavur.
            </h1>
          </div>
        </div>

        <div className="md:mt-12 max-sm:mt-6">
          <h1 className="text-xl md:text-2xl font-bold">My Skills</h1>
          <h1 className="mt-3 text-gray-400 text-sm md:text-base">
            Technologies I have worked with and I am familiar with.
          </h1>
          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            Frontend Development
          </h1>

          <div className="md:mt-4 max:mt-3 flex flex-wrap justify-start">
            {/* Frontend Tech Icons */}
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                className="w-8 md:w-10"
                alt="JavaScript"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                className="w-8 md:w-10"
                alt="React"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                className="w-8 md:w-10"
                alt="HTML"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
                className="w-8 md:w-10"
                alt="CSS"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="w-8 md:w-10"
                alt="Tailwind CSS"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                className="w-8 md:w-10"
                alt="Redux"
              />
            </div>
          </div>

          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            Backend Development
          </h1>

          <div className="mt-4 flex flex-wrap justify-start">
            {/* Backend Tech Icons */}
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                className="w-8 md:w-10"
                alt="NodeJS"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png"
                className="w-8 md:w-10"
                alt="MySQL"
              />
            </div>
            <div className="cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
                className="w-8 md:w-10"
                alt="MongoDB"
              />
            </div>
          </div>

          <h1 className="md:mt-6 max-sm:mt-4 text-lg md:text-xl">
            WebFOCUS Development
          </h1>

          <div className="mt-4">
            <div className="cursor-pointer p-2 bg-[#374151] w-14 rounded-md flex justify-center items-center m-2">
              <img
                src="https://store-images.s-microsoft.com/image/apps.200.3ca565e9-ba93-4730-a4f7-0d4e3e9a9a63.2b6b3291-3d7d-4dc9-9197-ab9eb51c3529.b29f50f0-6f2f-425e-b3ec-e7f9bd4598e9"
                className="w-12"
                alt="WebFOCUS"
              />
            </div>
          </div>

          <h1 className="mt-4 text-lg md:text-xl">Mobile Development</h1>
          <div className="mt-1 flex flex-wrap justify-start">
            <div className="mt-4 cursor-pointer p-2 text-center bg-[#374151] rounded-md m-2 flex-shrink-0">
              <img
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                className="w-8 md:w-10"
                alt="React Native"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;