import React from 'react';
import { createBrowserRouter, createRoutesFromElements ,Route, RouterProvider} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import TokenProvider from './context/context.jsx';
import Home from './pages/home.jsx';
import Error from './pages/error.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
     <Route path='' element={<App/>} >
    <Route path="login" element={<Login/>}/>
    <Route index element={<Register/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path='*' element={<Error/>}/>
    
     </Route>
  )
)




createRoot(document.getElementById('root')).render(
<TokenProvider>
<RouterProvider router={router}>
</RouterProvider>
</TokenProvider>
 


  

);
