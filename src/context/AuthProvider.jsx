import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  // INITIAL STATE
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   CREATE USER EMAIL AND PASSWORD
  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   CREATE USER WITH GOOGLE
  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //   USER IFORMATION
  const userInfo = {
    name: "Abul Hasan",
    user,
    setUser,
    createUserEmailPassword,
    signWithGoogle,
    loading,
    setLoading,
  };

  //   GLOBALLY SIDE EFFECT
  useEffect(() => {
    console.log(document.title);
    const suscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("Sing out");
      }
    });
    return () => suscribe();
  }, []);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
