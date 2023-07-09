import { useEffect, useState } from "react";

const Section = () => {
  const [establishedIn, setEstablishedIn] = useState(0);
  const [productionCapacity, setProductionCapacity] = useState(0);
  const [manufacturingFacility, setManufacturingFacility] = useState(0);

  useEffect(() => {
    const increaseValues = () => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        setEstablishedIn(count);
        if (count === 2023) {
          clearInterval(interval);
        }
      }, 1);

      let count1 = 0;

      const interval1 = setInterval(() => {
        count1++;
        setProductionCapacity(count1);
        if (count1 === 3000) {
          clearInterval(interval1);
        }
      }, 1);

      let count2 = 0;

      const interval2 = setInterval(() => {
        count2++;
        setManufacturingFacility(count2);
        if (count2 === 3500) {
          clearInterval(interval2);
        }
      }, 1);
    };

    increaseValues();
  }, []);

  return (
    <div className="bg-[#493120] p-4 lg:p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 container mx-auto">
        <div className="flex flex-col items-center justify-center rounded-lg ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 lg:h-20 w-14 lg:w-20 text-white mr-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 7l10 5M12 12l9-4M12 22l9-4M12 12v10"></path>
          </svg>
          <p className="font-bold text-white text-xl lg:text-3xl">
            Established In
          </p>
          <p className="text-xl lg:text-2xl text-white">{establishedIn}</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 lg:h-20 w-14 lg:w-20 text-white mr-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6"></path>
          </svg>

          <p className="font-bold text-white text-xl lg:text-3xl">
            Production Capacity/m
          </p>
          <p className="text-xl lg:text-2xl text-white">{productionCapacity}</p>
        </div>

        <div className="flex flex-col items-center justify-center rounded-lg p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 lg:h-20 w-14 lg:w-20 text-white mr-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
          <p className="font-bold text-white text-xl lg:text-3xl">
            Manufacturing Facility
          </p>
          <p className="text-xl lg:text-2xl text-white">
            {manufacturingFacility} sq ft
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
