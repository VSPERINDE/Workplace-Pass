import React, { useState, createContext, useRef } from "react";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import { database } from "../../infrastructure/database/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isCoworking, setIsCoworking] = useState(false);
  const auth = useRef(getAuth()).current;
  const collectionRef = collection(database, "workplace-accounts");

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.docs.map((doc) => {
      console.log(doc.id, " => ", doc.data().email);
      if (doc.data().email !== null) {
        setIsCoworking(true);
      }
    });
  };

  const onRegister = async (email, password, repeatedPassword, status) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
    if (status === "checked") {
      await addDoc(collectionRef, {
        email: email,
        createdAt: new Date(),
        isActive: true,
      });
      setIsCoworking(true);
    }
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
      setIsCoworking(false);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isCoworking,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
