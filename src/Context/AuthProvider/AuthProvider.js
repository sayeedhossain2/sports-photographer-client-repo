import React, { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authItem = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authItem}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
