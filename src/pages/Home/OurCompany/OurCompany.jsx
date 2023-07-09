import { Parallax } from "react-parallax";

const OurCompany = () => {
    return (
        <div className="">
            
            <div>
                <div className="relative">
                    <Parallax bgImage="https://agriorbit.com/wp-content/uploads/2019/10/Leather-header-min.jpg" strength={500}>
                        <div className="h-screen bg-black bg-opacity-60">
                        <h3 className="text-center text-2xl lg:text-5xl font-bold pt-5 lg:pt-10 text-orange-500">Our Company</h3>
                            <div className="flex flex-col justify-center items-center h-screen pl-2 pr-2">
                                <div className="container mx-auto py-12 flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2">
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                                            <div className="flex justify-center">
                                                <img className="h-32 w-32 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://www.jwoodleathers.co.uk/wp-content/uploads/2022/09/MOD_7290.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-32 w-32 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://i.shgcdn.com/ba27b086-ebd0-47d2-8f85-6f00662e17da/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                                            </div>
                                            <div className="flex justify-center">
                                                <img className="h-32 w-32 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://tandyleather.com/cdn/shop/products/a765a4de37b587309f2d4882cfbf7fb78f57afb0_1350x1350.jpg?v=1645724648" alt="" />
                                            </div>
                                            <div>
                                                <img className="h-32 w-32 md:h-60 md:w-60 drop-shadow-2xl rounded-full shadow-2xl" src="https://midlandsmeander.co.za/wp-content/uploads/4-3-scaled.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12 shadow-2xl shadow-gray-800">
                                        <h2 className="text-xl md:text-3xl font-bold mb-4 text-white">There are several reasons why you should choose our company.</h2>
                                        <p className=" text-sm md:text-base text-gray-100">
                                        UK-Bangla Leather and Leather Goods Ltd. is a newly established company based in Bangladesh. With a focus on quality and sustainability, they specialize in producing leather goods using sustainable materials. They prioritize gender equality, social inclusion, and responsible production. As a member of the World Fair Trade Organization, they adhere to fair trade principles and promote ethical environmental practices. With B2B and B2C sales opportunities, they aim to make a positive impact on the leather industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </div>
        </div>
    )

}
export default OurCompany;