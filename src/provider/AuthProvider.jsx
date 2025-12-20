import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const firebaseErrors = [
    { code: "auth/invalid-email", message: "Invalid email address format." },
    {
      code: "auth/user-disabled",
      message: "This account has been disabled. Please contact support.",
    },
    {
      code: "auth/user-not-found",
      message: "No account found with this email.",
    },
    {
      code: "auth/wrong-password",
      message: "Incorrect password. Try again or reset it.",
    },
    {
      code: "auth/email-already-in-use",
      message: "This email is already registered. Try logging in instead.",
    },
    {
      code: "auth/weak-password",
      message: "Password should be at least 6 characters.",
    },
    { code: "auth/missing-password", message: "Please enter a password." },
    {
      code: "auth/invalid-credential",
      message: "Invalid credentials. Please try again.",
    },
    {
      code: "auth/popup-closed-by-user",
      message: "Popup closed before completing the sign-in.",
    },
    {
      code: "auth/cancelled-popup-request",
      message: "Another popup is already open. Please close it first.",
    },
    {
      code: "auth/network-request-failed",
      message: "Network error. Please check your internet connection.",
    },
    {
      code: "auth/too-many-requests",
      message: "Too many attempts. Please try again later.",
    },
  ];

  const auth = getAuth(app);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signInUsingEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const registerUsingEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const logOut = () => {
    signOut(auth);
  };

  const passwordResetEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    signInUsingEmail,
    signInUsingGoogle,
    passwordResetEmail,
    registerUsingEmail,
    updateUserProfile,
    logOut,
    firebaseErrors,
    loading,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
