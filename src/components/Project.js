const Project = () => {
  return (
    <div className="bg-[#0a192f] h-[87.5vh] text-white">
      <div className="mx-auto w-9/12 pt-12">
        <h1 className="text-2xl font-bold">Personal Projects</h1>
        <h1 className="mt-2 text-gray-500">
          This page lists some of my personal projects.
        </h1>
        <div className="flex flex-wrap mt-6 text-black">
          <div className="p-24 mt-4 w-[350px] bg-gray-200 rounded-lg">
            <h1 className="text-center">Food App</h1>
          </div>
          <div className="p-24 mt-4 w-[350px] bg-gray-200 rounded-lg ml-6">
            <h1>Leave Management</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
