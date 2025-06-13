import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  // INITIAL STATE
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //  CREATE USER EMAIL AND PASSWORD
  const createUserEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  CREATE USER WITH GOOGLE
  const signWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //  UPDATE PROFILE
  const update = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //  LOG OUT
  const signOutAccout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // LOGIN EMAIL AND PASSWRD
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   USER IFORMATION
  const userInfo = {
    user,
    loading,
    setUser,
    createUserEmailPassword,
    signWithGoogle,
    setLoading,
    signOutAccout,
    update,
    login,
  };

// ✅ Global Auth Side Effect (inside AuthProvider.jsx)
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setLoading(false);
      console.log("User logged in:", user);

      const email = user.email;

      // 🔐 Step 1: Create JWT
      fetch("https://abulhasem-blog-server.vercel.app/jwtCreate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("JWT created:", data);

          // 🕒 Step 2: Delay to ensure cookie is set
          setTimeout(() => {
            // 📦 Step 3: Fetch Wishlist
            const email = "abulhasan7bd@gmail.com"
            fetch(`https://abulhasem-blog-server.vercel.app/all-wishlist?email=${email}`, {
              method: "GET",
              credentials: "include",
            })
              .then((res) => res.json())
              .then((wishlistData) => {
                console.log("Wishlist:", wishlistData);
                // ✅ Set wishlist to state if needed
                // setWishlist(wishlistData);
              })
              .catch((err) => {
                console.error("Wishlist fetch error:", err);
              });
          }, 500); // 🔁 Wait for cookie to be available
        })
        .catch((err) => {
          console.error("JWT error:", err);
        });

    } else {
      setUser(null);
      setLoading(false);
      console.log("User signed out");
    }
  });

  return () => unsubscribe(); // 🔄 Clean up on unmount
}, []);


  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
