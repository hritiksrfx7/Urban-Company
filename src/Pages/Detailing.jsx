import React, { useState } from 'react'
import services from '../data/services'
import {useLocation,useNavigate } from 'react-router-dom'

const Detailing = () => {
    const location = useLocation();
    const serviceId = location.state?.serviceId;
    const navigate = useNavigate();
    const today = new Date().toLocaleDateString("en-CA");

    const[selectedTime, setSelecetedTime] = useState();
     const[selectedDate, setSelectedDate] = useState("");


    const service = services.find(
        (item) => item.id == serviceId
    );
    
    const serviceName = service.name;
    
  return (
     <>
         <div className="min-h-screen bg-[#FAF9F6] p-8">

    <div className="max-w-5xl mx-auto bg-white rounded-2xl
                    shadow-sm border border-gray-200 p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
        <div>
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-80 object-cover rounded-2xl"
          />
        </div>

       
        <div className="flex flex-col justify-center">

          <p className="text-xs font-semibold uppercase
                        tracking-widest text-gray-500">
            Professional Home Service
          </p>

          <h1 className="text-3xl font-bold text-gray-900 mt-3">
            {service.name}
          </h1>

          <p className="text-gray-600 mt-4 leading-7">
            {service.description}
          </p>

          <h2 className='mt-6 text-lg font-bold text-gray-700'>
            What's Included
            </h2>

            <ul className='mt-3 space-y-3'>
               { (service.features || []).map ((features, index) =>(
                <li key={index} className="flex items-center gap-3 text-sm text-gray-700">
                     <span className="text-green-600 font-bold">✓</span>
                     {features}
                </li>
               )
            )}
            </ul>
                        <div className="mt-5 rounded-xl bg-[#FAF9F6] p-4">
            <p className="text-sm text-gray-500">
                Estimated Duration
            </p>

            <p className="mt-1 font-semibold text-gray-900">
                {service.duration}
            </p>
            </div>
                                <div className="mt-5">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Select Date
                    </label>

                    <input
                        type="date"
                        value={selectedDate}
                        min={today}
                        onChange={(e)=>setSelectedDate(e.target.value)}
                        className="w-full rounded-xl border border-gray-300
                                bg-white px-4 py-3 text-gray-900
                                outline-none focus:border-black"
                    />
                    </div>
                    <div className="mt-5">
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Select Time
                        </label>
               <select
                   value={selectedTime}
                   onChange={(e)=>setSelecetedTime(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-black"
                  >
                    <option value="">Choose a time slot</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
              </select>
                    </div>

          <button
          onClick={()=>{
            const loggedInUser = localStorage.getItem("urbancare_user");
            if(!loggedInUser){
              alert("Please login first")
              navigate("/login")
              return
            }
            if (!selectedTime || !selectedDate){
              alert("Please select date and Time");
              return;
            }
            navigate("/address",
             {
               state: {
                serviceId: service.id,
                selectedTime: selectedTime,
                selectedDate: selectedDate
              }
             }
            );
              
            
          }}
            className="mt-6 bg-black text-white px-6 py-3
                       rounded-xl font-semibold
                       hover:bg-gray-800 transition"
          >
            Continue to Booking →
          </button>

        </div>

      </div>
    </div>

  </div>
    </>
  )
}

export default Detailing
