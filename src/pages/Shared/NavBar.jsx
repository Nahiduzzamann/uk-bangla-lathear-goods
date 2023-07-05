import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="w-full bg-gradient-to-r from-white via-white to-[#B67A4F]">
      <div>
        <div className="container mx-auto flex items-center justify-between pt-2">
          <div className="h-10 lg:h-40">
            <img
              className="h-10 lg:h-40 hidden lg:flex"
              src="https://i.ibb.co/mNHCk2h/uk-bangla-leather-removebg.png"
              alt=""
            />
          </div>
          <h1 className="text-xl md:text-4xl font-bold italic text-[#1A2753]">
            Western Finished Leather Goods!
          </h1>
        </div>
      </div>
      {/* Navigations section */}
      <nav className="">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 lg:h-10 w-8 lg:w-10 text-[#241810]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box bg-[#7F5537] z-50 max-h-80 overflow-y-auto"
                >
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to="/">
                      Home
                    </NavLink>
                  </li>
                  <p className="text-center underline pb-2 text-white">MENS</p>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/sandal`}>
                      Sandal
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/loafer`}>
                      Loafer/Casual Shoe
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/formal`}>
                      Formal Shoe
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/wallet`}>
                      Wallet
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/belt`}>
                      Belt
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/cardHolder`}>
                      Card Holder
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/jacket`}>
                      Leather Jacket
                    </NavLink>
                  </li>
                  <p className="text-center underline pb-2 text-white">
                    LADIES
                  </p>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/ladiesBag`}>
                      Ladies Bag
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/ladiesShoe`}>
                      Ladies Shoe
                    </NavLink>
                  </li>
                  <p className="text-center underline pb-2 text-white">
                    OTHERS
                  </p>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/corporateGifts`}>
                      Corporate Gifts
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to={`/passportCover`}>
                      Passport Cover
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to="/mission">
                      Mission & Waste
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to="/aboutus">
                      About
                    </NavLink>
                  </li>
                  <li className="text-white  hover:bg-[#5B3D28] px-3 py-[2px] rounded-md ">
                    <NavLink onClick={toggleMenu} to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
            <a className="normal-case text-xl"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 bg-gradient-to-r from-[#92623F] via-[#5B3D28] to-[#493120] border-l-4 border-[#241810] rounded-r-full">
              <li>
                <NavLink
                  className="text-white hover:text-gray-300 lg:text-2xl ml-4 mr-5"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li tabIndex={0}>
                <div className="relative">
                  <div
                    className="text-white hover:text-gray-300 lg:text-2xl mr-5 cursor-pointer"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown")
                        .classList.add("hidden")
                    }
                  >
                    MENS
                  </div>
                  <div
                    id="dropdown"
                    className="hidden absolute text-gray-800 shadow top-10 rounded z-50"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown")
                        .classList.add("hidden")
                    }
                  >
                    <ul className="p-4 bg-[#7F5537] rounded-md">
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Sandal</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Loafer/Casual Shoe</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Formal Shoe</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Wallet</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Belt</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Card Holder</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Leather Jacket</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="text-white hover:text-gray-300 lg:text-2xl mr-5 cursor-pointer"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown1")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown1")
                        .classList.add("hidden")
                    }
                  >
                    LADIES
                  </div>
                  <div
                    id="dropdown1"
                    className="hidden absolute text-gray-800 shadow top-10 left-24 rounded z-50"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown1")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown1")
                        .classList.add("hidden")
                    }
                  >
                    <ul className="p-4 bg-[#7F5537] rounded-md">
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Sandal</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Belt</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="text-white hover:text-gray-300 lg:text-2xl mr-5 cursor-pointer"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown2")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown2")
                        .classList.add("hidden")
                    }
                  >
                    OTHERS
                  </div>
                  <div
                    id="dropdown2"
                    className="hidden absolute text-gray-800 shadow top-10 left-52 rounded z-50"
                    onMouseEnter={() =>
                      document
                        .getElementById("dropdown2")
                        .classList.remove("hidden")
                    }
                    onMouseLeave={() =>
                      document
                        .getElementById("dropdown2")
                        .classList.add("hidden")
                    }
                  >
                    <ul className="p-4 bg-[#7F5537] rounded-md">
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Corporate Gifts</NavLink>
                      </li>
                      <li>
                        <NavLink
                        className="text-white hover:text-gray-300 lg:text-xl"
                          to={`/products/${"cattleFeed"}`}
                        >Passport Cover</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink
                  className="text-white hover:text-gray-300 lg:text-2xl  mr-5"
                  to="/mission"
                >
                  Mission & Waste
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white hover:text-gray-300 lg:text-2xl  mr-5"
                  to="/aboutus"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-white hover:text-gray-300 lg:text-2xl  mr-5"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end h-16 lg:h-28">
            <Link to="/">
              <img
                className="h-16 lg:h-28 flex lg:hidden"
                src="https://i.ibb.co/mNHCk2h/uk-bangla-leather-removebg.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
