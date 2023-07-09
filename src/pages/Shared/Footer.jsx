import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#493120]'>
            <footer className="bg-[#fff] rounded-t-none rounded-l rounded-tl-[200px] md:rounded-tl-[400px] pt-28">
                <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className=''>
                            <Link to='/'>
                                <img className='h-36' src="https://i.ibb.co/mNHCk2h/uk-bangla-leather-removebg.png" alt="" />
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#493120] w-16">Navigation</h3>
                            <ul className="text-gray-400">
                                <li className='text-[#111111] hover:text-[#B67A4F]'><Link to={`/products/${'cattleFeed'}`}>FAQ</Link> </li>
                                <li className='text-[#111111] hover:text-[#B67A4F]'><Link to={`/products/${'broilerFeed'}`}>TEAM</Link></li>
                                <li className='text-[#111111] hover:text-[#B67A4F]'><Link to='/'>PRIVACY & LEGAL</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#493120] w-16">Follow</h3>
                            <div className="flex mt-4">
                                <Link to="/" className="text-[#493120] hover:text-[#B67A4F] mr-2">
                                    <FaTwitter size={30} />
                                </Link>
                                <Link to="/" className="text-[#493120] hover:text-[#B67A4F] mr-2">
                                    <FaFacebook size={30} />
                                </Link>
                                <Link to="/" className="text-[#493120] hover:text-[#B67A4F]">
                                    <FaInstagram size={30} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#111111] font-bold text-3xl mb-2 border-b-[3px] border-[#493120] w-16">Contact</h3>
                            <p className="text-[#111111]">Khandakar Lodge, House-65, Road-2, RK Road,Islambag, Rangpur</p>
                            <p className="text-[#111111]">Email: prestigefeed.bd@gmail.com</p>
                            <p className="text-[#111111]">Phone: 01713337752</p>
                        </div>
                    </div>
                    <hr className="border-[#493120] my-4" />
                    <p className="text-center text-black">
                        &copy; {new Date().getFullYear()} UK-Bangla Leather and Leather Goods Ltd. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;