import React from 'react';
import {Link} from 'react-router-dom';

const Error=()=>{
    return(
        <>
        <section className='bg-black h-115'>
        <div className=" text-white flex flex-col justify-center items-center place-self-center gap-2 w-96">
    <h2 className='text-9xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text inline-block pl-5'>404</h2>
    <p className='font-semibold text-xs'>SORRY! PAGE NOT FOUND</p>
    <p className='text-center text-xs'>Ooops! It seems like the page you're trying to access doesn't exist.If you believe there an issue feel free to report it,and we'll look into it.</p>
    <div className='flex gap-4'>
        <Link to='/home' className='border-1 border-[#3a0ca3] rounded-full px-4 py-2 cursor-pointer' >RETURN HOME</Link>
        <Link to='*'Link className='border-1 border-[#3a0ca3] rounded-full px-4 py-2 cursor-pointer'  >REPORT PROBLEM</Link>
    </div>
   </div>
        </section>
   
        </>
    )
}

export default Error;