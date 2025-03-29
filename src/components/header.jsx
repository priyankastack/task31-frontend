import React,{useContext} from 'react';
import { NavLink ,Link} from 'react-router-dom';
import { TokenContext } from '../context/context';

const Header=()=>{
    const {token,logout}=useContext(TokenContext);
    return (
        <>
        <div className='h-20  flex flex-row justify-between items-center shadow-sm  '>
            <div className='ml-5 text-3xl text-black font-semibold '>
               <Link to="home" >Home</Link> 
            </div>
            <div className='mr-5 flex flex-row gap-3'>
                
                {!token?( <><NavLink to=''> <button className='bg-black rounded-lg px-4 py-2 text-lg text-white cursor-pointer'>Register</button></NavLink>
                    <NavLink to='login'><button className='bg-black rounded-lg px-4 py-2 text-lg text-white cursor-pointer'>Login</button></NavLink></>):(<NavLink to='login'><button onClick={(e)=>logout(e)} className='bg-black rounded-lg px-4 py-2 text-lg text-white cursor-pointer'>Logout</button></NavLink> )}
               
              
            </div>
        </div>
        </>
    )
}


export default Header;