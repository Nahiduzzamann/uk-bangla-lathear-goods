const AboutUs = () => {
  return (
    <div className="bg-[#fff]">
      {/* Hero section */}
      <section className="bg-[#493120] text-[#fff] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
          UK-Bangla Leather and Leather Goods Ltd. is a newly established company based in Bangladesh. With a focus on quality and sustainability, they specialize in producing leather goods using sustainable materials. They prioritize gender equality, social inclusion, and responsible production. As a member of the World Fair Trade Organization, they adhere to fair trade principles and promote ethical environmental practices. With B2B and B2C sales opportunities, they aim to make a positive impact on the leather industry.
          </p>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://www.thealternativeboard.biz/wp-content/uploads/Strategie-langfristiger-Erfolg-900x500-3.png"
                alt="Mission"
                className="w-full h-auto rounded-xl object-fill"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0 pl-0 lg:pl-4">
              <h2 className="text-3xl font-bold mb-4 text-[#1A2753]">Our Mission</h2>
              <p className="text-lg text-[#797979]">
              Our mission is to craft exceptional leather products that embody timeless style, superior craftsmanship, and sustainability. We strive to deliver premium-quality leather goods that meet the diverse needs and preferences of our customers, while promoting ethical practices and responsible production methods. Our mission is to create lasting value and satisfaction for our customers through our dedication to excellence.
              </p>
              <h2 className="text-3xl font-bold mt-4 mb-4 text-[#1A2753]">Our Vision</h2>
              <p className="text-lg text-[#797979]">
              Our vision is to be a globally recognized leader in the leather industry, known for our commitment to quality, innovation, and social responsibility. We envision a future where our brand represents the epitome of luxury, craftsmanship, and sustainability. We aim to continually push the boundaries of design and functionality, while staying true to our core values of integrity, respect, and environmental stewardship. Our vision is to inspire and empower individuals to embrace the beauty and versatility of genuine leather, while making a positive impact on the world around us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 bg-[#493120]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[#fff]">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
                <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">John Doe</h4>
              <p className='text-gray-200'>CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Jane Smith</h4>
              <p className='text-gray-200'>COO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Michael Johnson</h4>
              <p className='text-gray-200'>CTO</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-blue-500 w-24 h-24 mb-4">
              <img className='rounded-full w-24 h-24' src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" alt="" />
              </div>
              <h4 className="text-lg font-bold text-[#fff]">Sarah Williams</h4>
              <p className='text-gray-200'>CFO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;