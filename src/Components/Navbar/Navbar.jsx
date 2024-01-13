import React, { useState, useContext, useEffect } from "react";
import myContext from "../../context/Data/myContext";
import { Link, useNavigate } from "react-router-dom";
import Mymodal from "../modal/Mymodal";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { BsHandbag, BsQuestionCircle } from "react-icons/bs";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";



export const Navbar = () => {

  const [user, setUser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.quantity)

  const [highlighted, setHighlighted] = useState(false);
  const [previousCartQuantity, setPreviousCartQuantity] = useState(null);

  // context data
  const context = useContext(myContext);
  const { islogged } = context;


  useEffect(() => {
    if (previousCartQuantity !== null && cartQuantity !== previousCartQuantity) {
      setHighlighted(true);
      setTimeout(() => {
        setHighlighted(false);
      }, 1000); // Adjust the duration of the highlight effect
    }
    setPreviousCartQuantity(cartQuantity);
  }, [cartQuantity, previousCartQuantity]);

  // logout
  const logout = () => {
    setTimeout(() => {
      auth.signOut().then(() => {
        navigate("/");
      });
    }, 300);
  };

  const toggleUser = (event) => {
    event.stopPropagation();
    setUser(!user);
  };

  const userPage = () => {
    navigate("/user");
  };

  const isCart = () => {
    if (islogged) {
      navigate("/cart/products");
    } else {
      openModal();
    }
  };

  // Search
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  const searchdata = () => {
    window.location.href = `/brands?search=${searchTerm}`;
  };

  // Cart Modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-white border-gray-200 py-4 sticky top-0 z-50 ">
      <Mymodal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h1 className="text-lg font-bold mb-2">Cart is Empty</h1>
          <p>You have to log in for that</p>
        </div>
      </Mymodal>
      <div className="w-[95%] m-auto flex flex-wrap gap-x-2 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo/ecommerce.png" className="h-8" alt="TechVerse Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechVerse
          </span>
        </Link>
        <div className="flex">
          <div className="relative md:block">
            <div
              onClick={searchdata}
              className="absolute cursor-pointer inset-y-0 start-0 flex items-center ps-3"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onKeyUp={handleSearch}
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md text-sm focus:ring-1 disabled:shadow-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="items-center justify-between flex " id="navbar-search">
          <ul className="flex items-center justify-center font-medium rtl:space-x-reverse">
            <li className={`flex relative items-center`}>
              <button
                onClick={!islogged ? toggleUser : userPage}
                className="block p-1 text-[1.7rem] text-blue-600 bg-transparent hover:scale-125 transition-all"
              >
                <FaUserCircle />
              </button>
              {!islogged && (
                <div
                  className={`flex text-center items-center transition-all duration-500 scale-x-0 w-0 ${user ? "scale-x-[1] w-20 " : null
                    } `}
                >
                  <Link className="flex-1 user p-1 px-2" to="/register">
                    <button className="text-sm text-slate-600 hover:text-blue-600 relative">
                      New <sup className="text-sm absolute top-[-4px]">+</sup>
                    </button>
                  </Link>
                  <Link className="flex-1 p-1 px-2" to="/login">
                    <button className="text-sm text-slate-600 hover:text-blue-600">
                      User
                    </button>
                  </Link>
                </div>
              )}
            </li>
            {!islogged ? (
              <li className="mx-4 ">
                <button className={`flex text-center items-center transition-all duration-500 scale-x-0 w-0 ${user ? "scale-x-[1] w-20 " : null
                  } `}
                >
                  <BsQuestionCircle />
                </button>
              </li>
            ) : (
              <></>
            )}
            <li className="mx-4 ">


              <button
                onClick={isCart}
                className={` ${cartQuantity > 0 ? " text-blue-600" : " text-slate-600"
                  } block relative p-1 text-center text-[1.7rem] bg-transparent hover:scale-125 transition-all ${highlighted ? "highlight" : ""
                  }`}>
                <BsHandbag />
                <span className="absolute normal-nums font-salar font-medium top-[12px] right-[22px] h-0 w-0 text-sm ">
                  {cartQuantity}
                </span>
              </button>

            </li>
            {islogged && (
              <li>
                <button
                  onClick={logout}
                  className="block p-1 text-[1.7rem] text-blue-600 bg-transparent hover:scale-125 transition-all"
                >
                  <IoLogOut />
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
