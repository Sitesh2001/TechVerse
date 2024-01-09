import React, { useState, useContext, useEffect } from "react";
import myContext from "../../context/Data/myContext";
import { Link, useNavigate } from "react-router-dom";
import Mymodal from "../modal/Mymodal";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { BsHandbag, BsQuestionCircle } from "react-icons/bs";
import { auth } from "../../firebase";

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const [userName,setUserName ] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // context data
  const context = useContext(myContext);
  const { islogged, CurrentUser } = context;

  useEffect(() => {
    if (islogged) {
      setUserName(CurrentUser[0].username)
    }
  }, [CurrentUser]);

  //logout
  const logout = () => {
    setTimeout(() => {
      auth.signOut().then(() => {
        setValue(0);
        navigate("/");
      });
    }, 500);
  };

  const toggleUser = () => {
    setUser(!user);
  };

  const userPage = () => {
    navigate("/user")
  };

  const btn = document.querySelector("#user");
  useEffect(() => {
    const handleBodyClick = (event) => {
      if (event.target !== btn) {
        setUser(false);
      }
    };

    document.body.addEventListener("mousedown", handleBodyClick);

    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick);
    };
  }, []);

  const isCart = () =>{
    if (islogged) {
      navigate("/cart/abc")
    }
    else{
      openModal();
    }
  }

  // Cart Modal
  function openModal(){
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <nav className="bg-white border-gray-200 py-4 sticky top-0 z-50 ">
      <Mymodal isOpen={isModalOpen} onClose={closeModal}>
        {/* Content for your modal */}
        <div>
          <h1 className="text-lg font-bold mb-2">Cart is Empty</h1>
          <p>You have to log in for that</p>
        </div>
      </Mymodal>
      <div className=" w-[95%] m-auto flex flex-wrap items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo/ecommerce.png" className="h-8" alt="TechVerse Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechVerse
          </span>
        </Link>
        <div className="flex">
          {/* search section for desktop */}
          <div className="relative md:block">
            <div className="absolute  cursor-pointer inset-y-0 start-0 flex items-center ps-3">
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
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 disabled:shadow-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div
          className="items-center justify-between w-full md:flex md:w-auto"
          id="navbar-search"
        >
          <ul className="flex items-center justify-center p-4 z-0 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            {/* user section  */}
            <li
              className={`flex relative items-center ${
                user ? " gap-x-3" : null
              }`}
            >
              {islogged?'':''}
              <button
                onClick={!islogged?toggleUser:userPage}
                className="block text-[1.7rem] text-blue-600 bg-transparent hover:scale-125 transition-all"
              >
                <FaUserCircle id="user" />
              </button>
              {!islogged && (
                <>
                  <div
                    className={`flex gap-x-4 transition-all duration-500 scale-x-0 w-0 ${
                      user ? "scale-x-[1] w-[80px]" : null
                    } `}
                  >
                    <Link to="/register">
                      {" "}
                      <button className="text-sm text-slate-600 hover:text-blue-600 relative">
                        New <sup className="text-sm absolute top-[-4px]">+</sup>
                      </button>{" "}
                    </Link>
                    <Link to="/login">
                      {" "}
                      <button className="text-sm text-slate-600 hover:text-blue-600">
                        User
                      </button>
                    </Link>
                  </div>
                </>
              )}
            </li>
            {/* contact button  */}
            {!islogged ? (
              <li>
                <button className="block text-[1.7rem] text-slate-600 bg-transparent hover:scale-125 transition-all">
                  <BsQuestionCircle />
                </button>
              </li>
            ) : (
              <></>
            )}
            {/* cart button */}
            <li>
              <button onClick={isCart}
                className={` ${
                  value > 0 ? " text-blue-600" : " text-slate-600"
                } block relative text-center text-[1.7rem] bg-transparent hover:scale-125 transition-all`}
              >
                <BsHandbag />
                <span className="absolute normal-nums font-salar font-medium top-[7.5px] right-[18px] h-0 w-0 text-sm ">
                  {value}
                </span>
              </button>
            </li>
            {islogged && (
              <li>
                <button
                  onClick={logout}
                  className="block text-[1.7rem] text-blue-600 bg-transparent hover:scale-125 transition-all"
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
