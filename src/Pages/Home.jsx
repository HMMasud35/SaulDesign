import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Mywork from '../components/Mywork'
import Projectmind from '../components/Projectmind'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Mywork />
      <Projectmind />
    </div>
  )
}

export default Home