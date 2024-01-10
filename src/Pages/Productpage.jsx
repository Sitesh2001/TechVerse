import React, { useState, useContext, useEffect } from "react";
import { Layout } from "../Components/Layout/Layout";
import { SubNav } from "../Components/Navbar/SubNav";
import { FaCartPlus } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import myContext from "../context/Data/myContext";
import Mymodal from "../Components/modal/Mymodal";
import { Bars} from "react-loader-spinner";

const Productpage = () => {
  const { type, id } = useParams();
  const [product, setProduct] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // context data
  const context = useContext(myContext);
  const { islogged, CurrentUser } = context;

  useEffect(() => {
    const getProducts = async () => {
      let AllProduct = {};
      let path = `products-${type.toUpperCase()}`;
      await getDocs(collection(db, path))
        .then((SnapShot) => {
          SnapShot.forEach((doc) => {
            if (doc.id === id) {
              AllProduct = { ...doc.data(), id: doc.id };
            }
          });
          setProduct(AllProduct);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    getProducts();
  }, [type]);

  const rate = Number(product.rating);

  const renderRating = () => {
    const ratingElements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        ratingElements.push(<IoMdStar key={i} className="text-blue-600" />);
      } else {
        ratingElements.push(<IoMdStar key={i} className="text-gray-300 " />);
      }
    }
    return ratingElements;
  };

  const addtoCart = async () => {
    if (islogged) {
      setLoading(true);
      try {
        const cartRef = doc(collection(db, "cart"), CurrentUser[0].uid);
        const subCollectionRef = collection(cartRef, "UserItems");

        // Create a new document reference within the UserItems subcollection
        const newDocRef = doc(subCollectionRef);

        // Set the data directly to the new document reference using setDoc
        await setDoc(newDocRef, {
          userId: CurrentUser[0].uid,
          productid: product.id,
          category: product.category,
          quantity: 1,
        });
        setLoading(false);

      } catch (error) {
        setLoading(false);
        console.error("Error adding product to cart:", error);
      }
    } else {
      openModal();
    }
  };

  const buy = () => {
    if (islogged) {
      console.log("buy now");
    } else {
      openModal();
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SubNav />
      {product ? (
        <div className="pt-9 mt-10">
          <Mymodal isOpen={isModalOpen} onClose={closeModal}>
            {/* Content for your modal */}
            <div>
              <h1 className="text-lg font-bold mb-2">Cart is Empty</h1>
              <p>You have to log in to buy</p>
            </div>
          </Mymodal>
          <div
            style={{
              boxShadow: "0 2px 4px 0 rgba(0,0,0,.08)",
              background:
                "linear-gradient(70deg, rgb(255, 254, 254) 0%, rgb(250, 250, 250) 35%, rgb(255, 255, 255) 100%)",
            }}
            className="flex p-1 gap-x-2 md:w-[90%] m-auto "
          >
            <div className=" w-[300px]">
              <img
                className="w-full h-[400px] p-5 object-contain rounded-sm border-none outline-none "
                src={product.image}
                alt=""
              />
            </div>
            <div className="px-5 pb-8 pt-10 flex gap-y-4 flex-col flex-1">
              <div className=" text-4xl font-medium mb-0">
                {product.productname}
              </div>
              <div className=" text-lg font-medium tracking-wide ">
                Rs {product.price}
              </div>
              <div className="flex flex-wrap justify-between ">   
                <div>
                  <p className="w-full text-slate-700"> {product.desc} </p>
                </div>
              </div>
              <p className="text-slate-700">{product.warranty}</p>
              <div className="text-xl flex items-center">
              <p className=" text-lg font-normal tracking-wide  mr-4"><span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
            {product?.rating}
          </span> </p>
                 {renderRating()} </div>
                 
              <div className="flex gap-x-3 ">
                <button
                  onClick={addtoCart}
                  type="button"
                  className="flex items-center rounded h-10 w-[150px] justify-center bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-semibold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-700 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                >
                  {loading ? (
                    <Bars
                      visible={true}
                      height="25"
                      width="25"
                      color="#fff"
                      riaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    <>
                      <FaCartPlus className="mr-1 h-4 w-4" />
                      Add to cart
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={buy}
                  className="text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </Layout>
  );
};

export default Productpage;
