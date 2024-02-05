import React from 'react'
import styles from './style'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryLight w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className="relative isolate px-6 pt-14 pb-5 lg:px-8">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Hero />}/>
              <Route path="/create-account" element={<SignUp />}/>
              <Route path="/login" element={<Login />}/>
          </Routes>
        </BrowserRouter>
      </div>
      <hr className="rounded-full border-secondaryLight"></hr>
      <Footer/>
    </div>
  )
}

export default App
