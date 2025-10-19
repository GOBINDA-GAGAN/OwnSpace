/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { apiFetch } from "../api/Base";
import apiList from "../api/ApiList";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState();
  const[serverError,setServerError]=useState("")

 const register = async (newUserData) => {
  setLoading(true);
  setServerError("");

  try {
    const data = await apiFetch(apiList.auth.register, {
      method: "POST",
      body: JSON.stringify(newUserData),
    });
    console.log(data.error);
    

    if (data.error) {
      setServerError(data.error);
    } else {
      setUser(data.user); // update context
    }
  } catch (error) {
    console.error("Error:", error);
    setServerError("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  const login = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading,serverError }}>
      {children}
    </AuthContext.Provider>
  );
};
