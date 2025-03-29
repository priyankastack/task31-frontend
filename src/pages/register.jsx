import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';



const Register=()=>{
  const navigate=useNavigate();
    const [name, setName] = useState("");
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
       const [phone, setPhone] = useState("");
      
const submitHandler=async(e)=>{
  e.preventDefault();
  const userData={
    name,
    email,
    password,
    phone
  }
  try {
    const response=await fetch("https://task31-backend-lime.vercel.app/api/register",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const result =await response.json();
    if(!response.ok){
      return alert(result.message);
    }
    else{
      console.log(result);
      alert(result.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone(""); 
     navigate('/');
    }

  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

    return(
        <>
        <form
          onSubmit={(e) => submitHandler(e)}
          className=" h-auto w-96 flex flex-col gap-8  items-center place-self-center mt-10 shadow-xl rounded-lg p-14 "
        >
             <input
            value={name}
            type="name"
            placeholder="Enter name Here"
            required
            onChange={(e) => setName(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
          <input
            value={email}
            type="email"
            placeholder="Enter email Here"
            required
            onChange={(e) => setEmail(e.target.value)}
            className=" px-14 py-2 border-b-1 border-b-black items-self-start pl-0 outline-0"
          ></input>
           <input
            value={phone}
            type="phone"
            placeholder="Enter phone Here"
            required
            onChange={(e) => setPhone(e.target.value)}
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
    )
}

export default Register;