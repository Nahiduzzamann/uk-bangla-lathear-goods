import { Link } from "react-router-dom";

const MissionAndWaste = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Our Mission & Waste Initiatives
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">
            At Leatherina, our mission is to create sustainable and high-quality
            leather products that embody craftsmanship, style, and environmental
            responsibility. We strive to make a positive impact by promoting
            ethical practices, embracing innovation, and advocating for a
            circular economy.
          </p>
          <p>
            We believe in the power of collaboration and transparency, working
            closely with our artisans, suppliers, and partners to create a
            sustainable value chain. Through our products and initiatives, we
            aim to inspire conscious consumerism and contribute to a greener and
            more inclusive future.
          </p>
        </div>

        <div className="relative">
          <img
            src="https://www.callofthewild.co.uk/wip/wp-content/uploads/2016/07/Vision-web.jpg"
            alt="Our Mission"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-6">
              To be a global leader in sustainable leather goods, recognized for
              our commitment to quality, innovation, and social responsibility.
            </p>
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Our Zero Waste Initiative</h2>
        <p>
          Mission Zero Waste (MØW) is a strategic and innovative initiative of
          Leatherina. Our goal is to keep raw materials, wastage, and
          end-of-life residuals within the economy, minimizing production
          wastage to zero. Leatherina is committed to sustainable production,
          environmental protection, and social security for all workers. We are
          a certified member of the World Fair Trade Organization (WFTO) and
          adhere to fair trading practices and non-discrimination.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-4">6R Basics of Our MØW</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Rethink:</strong> In a world grappling with the urgent need
            for sustainable practices, we prioritize sustainability, material
            selection, and eco-conscious design choices.
          </li>
          <li>
            <strong>Refuse:</strong> We refuse to engage in any activities that
            contribute to environmental degradation or compromise well-being.
          </li>
          <li>
            <strong>Reduce:</strong> We are dedicated to minimizing waste
            generation through innovative design techniques and efficient
            production planning.
          </li>
          <li>
            <strong>Reuse:</strong> We repurpose and extend the life cycle of
            materials through initiatives such as upcycling.
          </li>
          <li>
            <strong>Repair:</strong> We prioritize the repair of our products to
            minimize waste generation and unnecessary costs.
          </li>
          <li>
            <strong>Recycle:</strong> We creatively repurpose waste materials,
            contributing to waste reduction and customer satisfaction.
          </li>
        </ul>

        <p className="mt-8">
          Join us in our mission to create a sustainable economy and make a
          positive impact. Contact us to learn more.
        </p>
      </div>
    </div>
  );
};

export default MissionAndWaste;
