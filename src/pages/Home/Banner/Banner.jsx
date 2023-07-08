
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className="relative w-full h-64 lg:h-96 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-64 lg:h-96 object-cover"
        autoPlay
        loop
        muted
        speed="2"
      >
        <source src="/Leather.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full h-full bg-black bg-opacity-60 p-5">
        <h2 className="text-2xl lg:text-5xl text-orange-500 font-bold">
          UK-Bangla Leather and Leather Goods Ltd.
        </h2>
        <Typewriter
          options={{
            strings: [
              '<span class="text-white text-xl">We are passionate about crafting the finest leather products.</span>',
              '<span class="text-white text-xl">Experience luxury with our exquisite collection.</span>',
              '<span class="text-white text-xl">Indulge in the beauty and durability of genuine leather.</span>',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            wrapperClassName: "typewriter-wrapper",
          }}
        />
      </div>
    </div>
  );
};

export default Banner;



