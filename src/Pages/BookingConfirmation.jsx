
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import services from '../data/services';

const BookingConfirmation = () => {
  const location = useLocation();
  const booking = location.state?.booking ?? location.state;

  const service = services.find(
    (e) => e.id == booking?.serviceId
  );

  
return (
  <div className="min-h-screen bg-[#F5F6F8] px-5 py-6">

  
    {/* Confirmation Card */}
    <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">

      {/* Success Icon */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#252525] text-3xl font-bold text-white">
          ✓
        </div>
      </div>

      {/* Success Message */}
      <h1 className="mt-3 text-center text-2xl font-bold text-gray-900">
        Booking Confirmed!
      </h1>

      <p className="mt-2 text-center text-sm text-gray-500">
        Your service has been successfully booked.
      </p>

      <p className="mt-3 text-center text-xs text-gray-500">
       Booking ID: {booking?.bookingId || "Not available"}
      </p>

      {/* Booking Details */}
      <div className="mt-6 rounded-xl bg-[#F7F7F7] p-5">

        <h2 className="text-sm font-bold text-gray-900">
          Booking Details
        </h2>

        {/* First Row */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div>
            <p className="text-xs uppercase text-gray-500">
              Service
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {service?.name || "service name" }
            </p>
          </div>

         <div>
  <p className="text-xs uppercase text-gray-500">
    Date & Time
  </p>

  <p className="mt-1 text-sm font-semibold text-gray-900">
    {booking?.date || booking?.selectedDate || "Date not available"}
  </p>

  <p className="mt-1 text-sm font-semibold text-gray-900">
    {booking?.time || booking?.selectedTime || "Time not available"}
  </p>
</div>

          <div>
            <p className="text-xs uppercase text-gray-500">
              Price
            </p>
            <p className="mt-1 text-sm font-bold text-gray-900">
              ₹{service?.price ?? 799}
            </p>
          </div>

        </div>

        {/* Second Row */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div>
            <p className="text-xs uppercase text-gray-500">
              Status
            </p>
            <p className="mt-1 text-sm font-semibold text-green-700">
              Confirmed
            </p>
          </div>

         

        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

  <Link to='/mybooking'
    type="button"
    className="group relative overflow-hidden rounded-xl bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/30 active:translate-y-0 active:scale-95"
  >
    <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    <Link to='/mybooking' className="relative flex items-center justify-center gap-2">
      View My Booking
      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
        →
      </span>
    </Link>
  </Link>

  <Link to='/home'
    type="button"
    className="group rounded-xl border border-gray-300 bg-white px-8 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-600 hover:bg-teal-50 hover:text-teal-800 hover:shadow-lg hover:shadow-teal-900/10 active:translate-y-0 active:scale-95"
  >
    <span className="flex items-center justify-center gap-2">
      <span className="transition-transform duration-300 group-hover:-translate-x-1">
        ←
      </span>
      Back to Home
    </span>
  </Link>

</div>

    </div>

  </div>
)

 
    
}

export default BookingConfirmation
