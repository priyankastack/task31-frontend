import React from "react";
import { createContext, useState,useEffect } from "react";

export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");


  //-------------Storing token in localstorage
  const storeToken = (token) => {
    localStorage.setItem("Token", token);
    setToken(token);
    console.log(token);
  };




  //----------logout function

  const logout=(e)=>{
     const isconfirm=confirm("Are you sure?");
     if(isconfirm){
        localStorage.removeItem('Token');
        setToken("");
     }
     else{
      alert("You are still loggedin");
     }
    
  }


  useEffect(()=>{
     const storedToken=localStorage.getItem('Token');
     if(storedToken){
        storeToken(storedToken);
     }
  },[]);


  return (
    <TokenContext.Provider value={{ token, storeToken,logout }}>
      {children}
    </TokenContext.Provider>
  );
};
export default TokenProvider;
