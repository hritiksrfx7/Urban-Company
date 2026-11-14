import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Detailing from './Pages/Detailing'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Address from './Pages/Address'
import OTP from './Pages/OTP'
import BookingConfirmation from './Pages/BookingConfirmation'
import Mybookings from './Pages/Mybookings'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import ForgotPasswordOtp from './Pages/ForgotPasswordOtp'
import ResetPassword from './Pages/ResetPassword'
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile'
import AdminDashboard from './Components/AdminDashboard'
import CustomerSupport from './Pages/CustomerSupport'
import Service from './Pages/Service'



const App = () => {
  return (  
    
 <>

   <BrowserRouter>
   <Routes >

       <Route path='/signup' element={ <Signup/> }/>
      <Route path='/login' element={ <Login/> }/>
      <Route path='/forgot-password'  element={ <ForgotPassword/> }/>
      <Route path='/reset-password' element={ <ResetPassword/> }/>
    
       
      <Route element={ <Layout/> }>
       <Route path='/' element={ <Home/> }/>
       <Route path='/home' element={ <Home/> }/>
       <Route path='/address'  element={ <Address/> } />
       <Route path='/otp' element={ <OTP/> } />
       <Route path='/booking-confirmation' element={ <BookingConfirmation/>}/>
      <Route path='/detailing' element={ <Detailing/> } />
      <Route path='/mybooking' element ={ <Mybookings/> }/>
      <Route path='/forgot-password-otp' element={ <ForgotPasswordOtp/> }/>
      <Route path='profile' element={ <Profile/> }/>
      <Route path='/editprofile' element={ <EditProfile/> }/>
      <Route path='/admin-dashboard' element={ <AdminDashboard/> }/>
      <Route   path='/customer-support' element={ <CustomerSupport/> }  />
      <Route path='/service' element={ <Service/> }/>
      
      </Route>
      
   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App
