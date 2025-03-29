import React, { useState } from 'react';
import Header from './components/header';
import Login from './pages/login.jsx';
import { Outlet } from 'react-router-dom';



function App() {
 

  return (
    <>
    <Header/>
  <Outlet/>
    </>
  )
}

export default App
