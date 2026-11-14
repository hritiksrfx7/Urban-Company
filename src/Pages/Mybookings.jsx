import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  data, Link, useNavigate } from 'react-router-dom';

const Mybookings = () => {
  console.log("Mybookings rendered");
  const [activeTab, setActiveTab] = useState("Upcoming");
  
  const navigate = useNavigate();
  const[loggedInUser, setloggedInUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("urbancare_user")|| "null");
  })
const[bookings , setBookings] = useState([]);
  
useEffect(() => {
  if (!loggedInUser?.id) {
    setBookings([]);
    console.log("No logged-in user found:", loggedInUser);
    return;
  }

  console.log("Logged-in user:", loggedInUser);

  axios
    .get("http://localhost:3000/bookings", {
      params: { userId: loggedInUser.id },
    })
    .then((res) => {
      console.log("User bookings:", res.data);
      setBookings(res.data);
    })
    .catch((err) => {
      console.log("Booking fetch error:", err);
    });
}, [loggedInUser?.id]);



const handleCancel = (bookingId)=>{
 console.log("Cancel button clicked");
 axios
 .patch(`http://localhost:3000/bookings/${bookingId}`,{
  status:"Cancelled"
 })
 .then((res)=>{
  setBookings((prevBookings)=>
    prevBookings.map((booking)=>
      booking.id === bookingId ? res.data:booking
    )
  );
 })
 .catch((err)=>{
  console.log(err);
 })
}

const filteredBookings = bookings.filter(
  (booking)=>booking.status === activeTab
)


  
  return (
    <>
         
<div className="min-h-screen bg-gray-100">
   

  <div className="flex">

    {/* Sidebar */}
    <aside className="hidden md:flex w-64 min-h-screen flex-col bg-white border-r border-gray-200 p-6">
        
<div className="flex flex-col gap-2">

  <button className="flex items-center gap-3 rounded-lg bg-blue-50 px-4 py-3 text-left text-sm font-semibold text-blue-700">
    <span>▣</span>
    My Bookings
  </button>

  <Link to="/profile" className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-100">
    <span>♙</span>
    Profile
  </Link>

  <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-100">
    <span>⌖</span>
    Addresses
  </button>

  <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-100">
    <span>?</span>
    Help & Support
  </button>

  <button className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-100">
    <span>⚙</span>
    Settings
  </button>
  

<div className="mt-auto pt-8">

  <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-linear-to-br from-white via-blue-50 to-indigo-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

    {/* Decorative Circle */}
    <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-100/60 transition-transform duration-300 group-hover:scale-125"></div>

    {/* Support Header */}
    <div className="relative flex items-center gap-3">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
        >
          <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 1-2Z" />
          <path d="M20 13h-3v5h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-1-2Z" />
          <path d="M17 18a5 5 0 0 1-5 3" />
        </svg>
      </div>

      <div>
        <h3 className="text-sm font-bold text-gray-900">
          Need a Hand?
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-gray-500">
          We're always here to help you.
        </p>
      </div>

    </div>

    {/* Support Button */}
    <button
      className="relative mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg active:scale-95"
    >
      Contact Support

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>

    <p className="relative mt-3 text-center text-[10px] text-gray-400">
      Safe · Simple · Reliable Services
    </p>

  </div>

</div>



</div>

      
    </aside>

    {/* Main Content */}
    <main className="flex-1 min-w-0">
        
<section className="relative mx-4 mt-6 overflow-hidden rounded-2xl bg-linear-to-r from-slate-900 via-teal-900 to-slate-800 px-5 py-6 md:px-8 md:py-8">

  {/* Background Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/20"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-xl">

    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-100 backdrop-blur-sm">
      YOUR SERVICE DASHBOARD
    </span>

    <h1 className="mt-5 text-1xl font-bold leading-tight text-white md:text-2xl">
      My Bookings
      <span className="mt-2 block text-teal-300">
        Your comfort, our priority.
      </span>
    </h1>

    <p className="mt-4 max-w-md text-sm leading-6 text-gray-200 md:text-base">
      Track your services, manage appointments, and keep everything organized in one place.
    </p>

  </div>
   
<section className="px-4 pt-6 md:px-6">

  <div className="flex flex-wrap items-center justify-between gap-4">

    <div>
      <h2 className="text-xl font-bold text-gray-900">
        Your Services
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Keep track of all your bookings
      </p>
    </div>

    <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
     {bookings.length} Bookings 
    </span>

  </div>

  <div className="mt-5 flex gap-2 overflow-x-auto border-b border-gray-200">

    <button onClick={()=>setActiveTab("Upcoming")}
     className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold ${
  activeTab === "Upcoming"
    ? "border-teal-600 text-teal-700"
    : "border-transparent text-gray-500"
}`}>
      Upcoming
    </button>
    

    <button  onClick={()=>setActiveTab("Completed")}
    className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold ${
  activeTab === "Completed"
    ? "border-teal-600 text-teal-700"
    : "border-transparent text-gray-500"
}`}>
      Completed
    </button>

    <button
      type='button'
      onClick={() => setActiveTab("Cancelled")}
     className={`shrink-0 border-b-2 px-4 py-3 text-sm font-semibold ${
  activeTab === "Cancelled"
    ? "border-teal-600 text-teal-700"
    : "border-transparent text-gray-500"
}`}>
      Cancelled
    </button>

  </div>
     
    {filteredBookings.map((booking)=> (  
      <div key={booking.id} className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md">

  {/* Card Header */}
  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-5 py-4">

    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        Booking ID
      </p>
      <p className="mt-1 text-sm font-bold text-gray-800">
        {booking.id}
      </p>
    </div>

    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
      {booking.status}
    </span>

  </div>

  {/* Service Details */}
  <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">

    <img
      src={booking.image}
      alt="Home cleaning service"
      className="h-40 w-full rounded-xl object-cover sm:h-28 sm:w-32"
    />

    <div className="flex-1">
      <h3 className="text-lg font-bold text-gray-900">
        {booking.service}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
       {booking.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-600">
        <span>📅 {booking.date} </span>
        <span>🕒 {booking.time} </span>
      </div>
    </div>

    <div className="sm:text-right">
      <p className="text-xs text-gray-500">Total Price</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">
        ₹{booking.price}
      </p>
    </div>

  </div>

  {/* Card Actions */}
  <div className="flex flex-wrap gap-3 border-t border-gray-100 bg-gray-50/70 px-5 py-4">

    <button
    onClick={() => {
     navigate('/booking-confirmation',{
      state:{booking}
     })
}}
 className="rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800">
      View Details
    </button>

   

    {booking.status !== "Cancelled" &&
        <button 
    onClick={()=>handleCancel(booking.id)}
    
    className="rounded-lg px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
      Cancel Booking
    </button>
    }

  </div>

</div>
     ) )
    }


</section>


  {/* Decorative Circle */}
  <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full border border-white/10"></div>
  <div className="absolute -bottom-12 -right-2 h-40 w-40 rounded-full border border-white/10"></div>

</section>

    </main>

  </div>

</div>

    </>
  )
}

export default Mybookings
