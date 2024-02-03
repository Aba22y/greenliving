import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import plant from './assets/plant.png'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryLight w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className="relative isolate px-6 pt-14 pb-5 lg:px-8">
        <Hero/>
      </div>
      <hr className="rounded-full border-secondaryLight"></hr>
      <Footer/>
    </div>
  )
}

export default App
