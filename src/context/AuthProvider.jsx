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

  //   GLOBALLY SIDE EFFECT
  useEffect(() => {
    const suscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false)
        setUser(user);
        console.log(user);
      } else {
        setLoading(false)
        console.log("Sing out");
      }
    });
    return () => suscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
