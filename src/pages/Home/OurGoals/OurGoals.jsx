import { FiCheckCircle } from "react-icons/fi";

const OurGoals = () => {
  return (
    <section className="bg-[#493120] py-12">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-8 relative">
          <div className="h-80 w-80 xl:h-96 xl:w-96 border-8 border-orange-500 animate-bounce-slow">   
          </div>
          <img className="absolute top-10 -left-2 h-80 w-80 xl:h-96 xl:w-96 rounded" src="https://www.conovercompany.com/wp-content/uploads/2023/01/top-view-of-goals-word-made-of-wooden-blocks-on-2022-12-16-15-23-14-utc-scaled.jpg" alt="" />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 p-8">
          <h2 className="text-2xl lg:text-5xl text-orange-500 font-bold mb-6"> 
            Our Goals
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FiCheckCircle className="text-orange-300 h-10 w-10 lg:h-16 lg:w-16 mt-1" />
              <p className="ml-3 text-lg text-white">
                Goal 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </p>
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-orange-300 h-10 w-10 lg:h-16 lg:w-16 mt-1" />
              <p className="ml-3 text-lg text-white">
                Goal 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-orange-300 h-10 w-10 lg:h-16 lg:w-16 mt-1" />
              <p className="ml-3 text-lg text-white">
                Goal 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco. 
              </p>
            </li>
            <li className="flex items-center">
              <FiCheckCircle className="text-orange-300 h-10 w-10 lg:h-16 lg:w-16 mt-1" />
              <p className="ml-3 text-lg text-white">
                Goal 4: Duis aute irure dolor in reprehenderit in voluptate velit. 
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
