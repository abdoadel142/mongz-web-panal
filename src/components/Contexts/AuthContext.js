import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    const user = await axios.put("http://192.168.1.71:8080/auth/adminSignup", {
      email: email,
      password: password,
    });
    setLoading(false);
    setCurrentUser(user.data.userId);
    return user;
  }

  async function login(email, password) {
    const user = await axios.post("http://192.168.1.71:8080/auth/adminLogin", {
      email: email,
      password: password,
    });
    setLoading(false);
    setCurrentUser(user.data.userId);
    return user;
  }

  const value = {
    currentUser,
    login,
    signup,
    getProducts,
  };

  async function getProducts() {
    const products = await axios.get("http://192.168.1.71:8080/");
    return products;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
