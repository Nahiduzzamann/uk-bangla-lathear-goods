import { useState } from "react";

const OurProducts = () => {
  const products = [
    {
      type: "Men Leather",
      images: [
        { src: "https://i.insider.com/639cdb89b5600000185b2761?width=1000&format=jpeg&auto=webp", alt: "Men Product 1" },
        { src: "https://cdn.shopify.com/s/files/1/0712/1227/files/Mens-Breaker-Boot-Cognac-Lifestyle-2023-2-9-6_ce0e0a62-9007-44d8-9a7c-ae7e7ab3a2c9.jpg?v=1683137830", alt: "Men Product 2" },
        { src: "https://i.pinimg.com/originals/5f/84/14/5f84140c3c41fb935bfa96e1b0e0aafd.jpg", alt: "Men Product 3" },
        { src: "https://cdn.shopify.com/s/files/1/2726/4990/files/von-baer-no.1-mens-full-grain-leather-large-briefcase-for-laptop-with-male-model.jpg?v=1679408889", alt: "Men Product 4" },
      ],
      descriptions: [
        "Crafted with precision and style, our collection of men's leather products combines elegance with durability. From wallets to briefcases, our products are designed to make a statement.",
        "Discover the perfect accessory for any occasion. Our men's leather collection features a variety of options, including belts, cardholders, and travel accessories. Upgrade your style with our premium craftsmanship.",
        "Experience the luxury of genuine leather. Our collection of men's bags and backpacks combines functionality with timeless design. Carry your essentials in style with our meticulously crafted products.",
        "Elevate your style with our range of men's leather accessories. From phone cases to keychains, our products are made to enhance your everyday life with their exquisite craftsmanship.",
      ],
    },
    {
        type: "Women Leather",
        images: [
          { src: "https://static-01.daraz.com.bd/p/a216032f1dbe4da6b80154011fd97c11.jpg", alt: "Women Product 1" },
          { src: "https://cdn.shopify.com/s/files/1/2726/4990/files/prime-leather-backpack-von-baer.jpg?v=1633439004", alt: "Women Product 2" },
          { src: "https://static-01.daraz.com.bd/p/4da753e3fced4a66d61f068b39ea2051.jpg", alt: "Women Product 3" },
          { src: "https://cdn.shopify.com/s/files/1/0712/1227/files/womens-dune-soho-wedge-sandal-patina-11.jpg?v=1660679887", alt: "Women Product 4" },
        ],
        descriptions: [
          "Make a statement with our women's leather collection. Our products blend fashion and functionality, offering a range of options from handbags to clutches. Embrace elegance with our premium leather goods.",
          "Step into the world of sophistication with our women's leather accessories. From wallets to belts, our collection is designed to complement your personal style and enhance your everyday look.",
          "Experience the luxury of fine craftsmanship with our women's leather bags. Whether you're looking for a tote, crossbody, or backpack, our collection offers a perfect blend of style and practicality.",
          "Add a touch of elegance to your outfit with our women's leather accessories. From phone cases to key holders, our products are meticulously crafted to elevate your style.",
        ],
      },
      {
        type: "Others Leather",
        images: [
          { src: "https://images-na.ssl-images-amazon.com/images/I/81QmqiOWVFL._AC_UL600_SR600,600_.jpg", alt: "Others Product 1" },
          { src: "https://m.media-amazon.com/images/I/51BWEEFXDDL._AC_UY1100_.jpg", alt: "Others Product 2" },
          { src: "https://img.zcdn.com.au/lf/8/hash/22876/20033497/4/custom_image.jpg", alt: "Others Product 3" },
          { src: "https://www-article-com-blog.exactdn.com/blog/wp-content/uploads/2019/08/ARTICLE-blog-Leather-lizzypowersdesign-1571x1920-1-1571x1920.jpg", alt: "Others Product 4" },
        ],
        descriptions: [
          "Discover our collection of leather goods designed for various purposes. From small accessories to unique pieces, our others leather collection offers something for everyone. Experience the beauty of genuine leather craftsmanship.",
          "Upgrade your everyday essentials with our others leather accessories. From passport holders to organizers, our collection is tailored to provide functionality and style for your daily needs.",
          "Indulge in the timeless elegance of our others leather bags. Whether you're looking for a duffle bag, laptop case, or travel accessories, our collection offers versatility and sophistication.",
          "Explore the world of exquisite craftsmanship with our others leather products. From desk accessories to home decor, our collection is designed to add a touch of luxury to your surroundings.",
        ],
      },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products[0].images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="mx-auto bg-gradient-to-b from-[#2F2C2C] to-[#181515] py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl lg:text-5xl text-orange-500 font-bold mb-8 text-center pt-5 lg:pt-10">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-[#322F2F] rounded-lg overflow-hidden shadow-xl hover:bg-[#484545] transition duration-300`}
            >
              <img
                src={product.images[activeIndex].src}
                alt={product.images[activeIndex].alt}
                className="w-full h-52 sm:h-60 md:h-64 lg:h-80 xl:h-96 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl lg:text-2xl text-white font-bold mb-2">
                  {product.type}
                </h3>
                <p className="text-gray-300">
                  {product.descriptions[activeIndex]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-[#493120] hover:bg-[#9E683E] text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;











