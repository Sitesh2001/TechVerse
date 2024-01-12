import React, { useContext, useEffect, useState } from "react";
import CartLeft from "../Components/Cart/CartLeft";
import CartRight from "../Components/Cart/CartRight";
import { Layout } from "../Components/Layout/Layout";
import myContext from "../context/Data/myContext";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

export default function Cart() {
  const [productDetails, setProductDetails] = useState([]);

  // context data
  const context = useContext(myContext);
  const { islogged, CurrentUser } = context;

  const handleDeleteItem = async (itemId) => {
    try {
      const itemRef = doc(db, `cart/${CurrentUser[0].uid}/UserItems`, itemId);
      await deleteDoc(itemRef);
      console.log("Item deleted successfully:", itemId);
      setProductDetails(
        productDetails.filter((item) => item.itemId !== itemId)
      );

      // Fetch the updated items after deletion (if required)
      // Refetch the items or update the state after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (islogged && CurrentUser) {
        try {
          const subCollectionRef = collection(
            db,
            `cart/${CurrentUser[0].uid}/UserItems`
          );
          const querySnapshot = await getDocs(subCollectionRef);

          const productDetailsArray = [];

          for (const dataDoc of querySnapshot.docs) {
            const item = dataDoc.data();
            const productCollectionRef = collection(
              db,
              `products-${item.category.toUpperCase()}`
            );
            const productQuery = await getDoc(
              doc(productCollectionRef, item.productid)
            );
            if (productQuery.exists()) {
              const productData = productQuery.data();
              productDetailsArray.push({
                ...productData,
                itemId: dataDoc.id, // Add itemId property with dataDoc.id
              });
            }
          }

          setProductDetails(productDetailsArray);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [islogged, CurrentUser]);

  const totalPrice = productDetails.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <Layout>
      <div className=" mt-10 ">
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
          className="w-[90%] m-auto text-center min-h-16 py-5 rounded"
        >
          {" "}
          <span className="text-xl font-medium text-blue-500 px-2 border-b border-blue-500">
            TechVerse
          </span>
        </div>
        <div className=" flex w-[90%] gap-x-10 flex-wrap mx-auto mt-4 ">
          {productDetails.length > 0 ? (
            <>
              <div className="flex-[2] min-w-[400px] ">
                {productDetails.map((data) => {
                  return (
                    <CartLeft
                      key={data.itemId} // Assuming itemId is unique and can be used as a key
                      pname={data.productname}
                      img={data.image}
                      price={data.price}
                      itemId={data.itemId}
                      onDelete={handleDeleteItem}
                    />
                  );
                })}
              </div>
              <CartRight tprice={totalPrice} ship={50} gst={10} />
            </>
          ) : (
            <>
              <div className=" w-[90%] h-[60vh] flex-col shadow flex justify-center items-center mx-auto">
               
                <img src="/Images/cart.webp" alt="cartimage" className=" w-48 " />
                <h1 className=" text-lg font-semibold mt-3 ">
                Missing Cart items?
                </h1>
                <p className="text-sm font-medium text-slate-600 pt-1 pb-3">Add the items to buy the products. </p>

                <Link
                  to='/'
                  class="relative inline-flex items-center justify-center mt-2 p-4 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-blue-500 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center text-base font-semibold justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Back to Home
                  </span>
                  <span class="relative invisible">Back to Home</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
