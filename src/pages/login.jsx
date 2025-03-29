import React, { useContext, useState } from "react";
import {TokenContext}  from "../context/context";

const Login = () => {
  const{ storeToken } =useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler=async(e)=>{
    e.preventDefault();
    const userData={
      email,
      password,
    }
    try {
      const response=await fetch("http://localhost:8000/api/login",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const result=await response.json();
      if(!response.ok){
        alert(result.message);
      }
      else{
       storeToken(result.token);
       alert(result.message);
       setEmail("");
       setPassword("");
      }
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }
    return (
      <>
        <form
          onSubmit={(e) => submitHandler(e)}
          className=" h-96 w-96 flex flex-col gap-8  items-center place-self-center mt-10 shadow-xl rounded-lg p-14 "
        >
          <input
            value={email}
            type="email"
            placeholder="Enter email Here"
            required
            onChange={(e) => setEmail(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <input
            value={password}
            type="text"
            placeholder="Enter Password Here"
            required
            onChange={(e)=>setPassword(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <button className="bg-black rounded-lg px-22 py-1 text-lg text-white cursor-pointer">
            Submit
          </button>
        </form>
      </>
    );
  };

export default Login;
