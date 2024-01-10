import React, { useContext, useEffect, useState } from "react";
import CartLeft from "../Components/Cart/CartLeft";
import CartRight from "../Components/Cart/CartRight";
import { Layout } from "../Components/Layout/Layout";
import myContext from "../context/Data/myContext";
import { collection, getDocs, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Cart() {
  const [productDetails, setProductDetails] = useState([]);

  // context data
  const context = useContext(myContext);
  const { islogged, CurrentUser } = context;

  const handleDeleteItem = async (itemId) => {
    try {
      const itemRef = doc(db, `cart/${CurrentUser[0].uid}/UserItems`, itemId);
      await deleteDoc(itemRef)
      console.log('Item deleted successfully:', itemId);
      setProductDetails(productDetails.filter(item => item.itemId !== itemId));
      
      // Fetch the updated items after deletion (if required)
      // Refetch the items or update the state after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (islogged) {
        try {
          const subCollectionRef = collection(
            db,
            `cart/${CurrentUser[0].uid}/UserItems`
          );
          const querySnapshot = await getDocs(subCollectionRef);

          const productDetailsArray = [];

          for (const dataDoc of querySnapshot.docs) {

            const item = dataDoc.data();
            console.log(item.quantity);
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
                <div className=" w-[90%] h-[60vh] shadow flex justify-center items-center mx-auto">Loading...</div>
              </>
            )}
        </div>
      </div>
    </Layout>
  );
}
