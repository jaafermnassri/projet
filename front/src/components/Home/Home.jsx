import React from 'react'
// import { useSelector } from 'react-redux'

// import DormList from '../DormList/DormList'
import Contact from '../GuestHome/Contact/Contact'
import Features from '../GuestHome/Features/Features'
import Footer from '../GuestHome/Footer/Footer'
import Header from '../GuestHome/Header/Header'
import Pricing from '../GuestHome/Pricing/Pricing'
import Testimonial from '../GuestHome/Testimonial/Testimonial'

const Home = () => {
  // const nm = useSelector((state)=>state.userReducer.user.firstName)
  return (
    // console.log(nm),
    <div>
      <Header/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home