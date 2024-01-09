import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "../../firebase";

function MyState(props) {
    const [islogged, setIslogged] = useState(null)
  const GetUser = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
      auth.onAuthStateChanged((userlogged) => {
        setIslogged(userlogged)
        if (userlogged) {
          const getUser = async () => {
            const q = query(
              collection(db, "users"),
              where("uid", "==", userlogged.uid)
            );
            const data = await getDocs(q);
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };
          getUser();
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  };

  const CurrentUser = GetUser();


  return (
    <MyContext.Provider value={{islogged, CurrentUser }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
