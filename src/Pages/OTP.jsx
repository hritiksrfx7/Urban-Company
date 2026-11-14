import React,{useRef,useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Address from './Address';
import services from '../data/services';
import axios from 'axios';

const OTP = () => {
    const location = useLocation();
    const inpurRefs = useRef([]); 
    const navigate = useNavigate();
    const fullName = location.state?.fullname;
    const mobileNumber = location.state?.mobilenumber;
    const serviceId = location.state?.serviceId;
    const selectedDate = location.state?.selectedDate;
    const selectedTime = location.state?.selectedTime;
    const userId = location.state?.userId;
    const customerName =
      location.state?.fullname ||
      location.state?.customerName ||
      "";
    const [otp,setOtp] = useState("");
    const[error,setError] = useState("");
    const[otpDigits, setOtpDigits ]= useState(["","","","","",""]);

    const handleVerify = ()=>{
      const enteredOtp = otpDigits.join("");
      if(enteredOtp.length !== 6){
        setError("Please enter all 6 digit")
        return;
      }
      
      if(enteredOtp != "123456"){
        setError("Invalid otp. Please try again");
        return;
      }
         
      const newBookings = {
        bookingId: "UC" + Date.now().toString().slice(-6),
        userId:userId,
        serviceId: serviceId,
        service: service?.name || "service name",
         description: service?.description || "",
         customer: customerName.trim(),
          date: selectedDate,
          time: selectedTime,
          price: Number(service?.price) || 0,
          status: "Upcoming",
          image: service?.image || ""
      };
      axios
      .post("http://localhost:3000/bookings",newBookings)
      .then((res)=>{
        navigate('/booking-confirmation',{
          state:{
            ...location.state,
            booking:res.data
          }
        })
      }
     
    
    )
     .catch((err)=>{
        console.log(err);
        setError("Booking save ni hui? please try again")
      })

    
      
    }
     const service = services.find(
      (e)=>e.id==serviceId
     )
  return (
    <>
      <div className="min-h-screen w-max3/5 bg-[#F5F6F8] px-6 py-8 ">

      <p className="text-xs text-gray-500">
        Home / Service Details / Address / OTP Verification
      </p>

      <h1 className="mt-10 text-2xl font-bold text-gray-900">
        Verify your mobile number
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Enter the OTP sent to your mobile number to confirm your booking.
      </p>
       <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-slate-200/60">

  {/* Header */}
  <div className="bg-linear-to-r from-teal-900 to-teal-700 px-6 py-5">
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl text-white">
        <span>▤</span>
      </div>

      <h2 className="text-xl font-bold tracking-tight text-white">
        Booking Summary
      </h2>
    </div>
  </div>

  {/* Booking Details */}
  <div className="space-y-5 p-6">

    {/* Service */}
    <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-50 text-2xl">
        🔧
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          Service
        </p>

        <p className="mt-1 text-lg font-bold text-gray-900">
          {service?.name || "Service"}
        </p>
      </div>
    </div>

    {/* Date & Time */}
    <div className="flex items-center gap-4 border-b border-gray-100 pb-5">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal-50 text-2xl">
        📅
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
          Date & Time
        </p>

        <p className="mt-1 text-lg font-bold text-gray-900">
          {selectedDate || "Date not selected"}
        </p>

        <p className="mt-1 text-sm font-medium text-gray-500">
          {selectedTime || "Time not selected"}
        </p>
      </div>
    </div>

    {/* Starting Price */}
    <div className="flex items-center gap-4 rounded-2xl bg-linear-to-r from-teal-50 to-emerald-50 p-5">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-teal-700 text-3xl font-bold text-white shadow-md">
        ₹
      </div>

      <div className="border-l border-teal-200 pl-4">
        <p className="text-xs font-bold uppercase tracking-wider text-teal-800/80">
          Starting Price
        </p>

        <p className="mt-1 text-3xl font-extrabold text-teal-900">
          ₹{service?.price ?? 799}
        </p>
      </div>
    </div>

  </div>
</div>
  
{/* OTP Verification Card */}
<div className="rounded-xl border border-gray-200 bg-white p-6 md:col-span-2">

  <h2 className="text-xl font-bold text-gray-900">
    OTP Verification
  </h2>

  <p className="mt-3 text-sm text-gray-500">
    We've sent a 6-digit OTP to your mobile number
  </p>

  <p className="mt-2 font-semibold text-teal-700">
    +91 {mobileNumber || "Mobile number not available"}
  </p>

  <p className="mt-6 text-sm font-semibold text-gray-700">
    Enter Verification Code
  </p>
 <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center">
  <div className="flex flex-wrap gap-3">
{[1, 2, 3, 4, 5, 6].map((num) => (
  
    <input
      key={num}
      type="text"
      inputMode="numeric"
      maxLength={1}
      
className="h-14 w-14 rounded-2xl border border-slate-400 bg-linear-to-br from-slate-500 to-slate-700 text-center text-2xl font-bold text-white shadow-md outline-none transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 focus:border-teal-400 focus:shadow-[0_0_16px_rgba(45,212,191,0.3)]"
   
   onChange={(e)=>{
    const value =    e.target.value.replace(/\D/g,"").slice(-1);
    const inputs = e.target.parentElement.querySelectorAll("input");
    const index = Array.from(inputs).indexOf(e.target);
    const updated = [...otpDigits];
    updated[index]= value;
    setOtpDigits(updated);
    setOtp(updated.join(""))
    setError("");
    if(value && e.target.nextElementSibling){
      e.target.nextElementSibling.focus();
    }
    
   }}

      onKeyDown={(e)=>{
        if(e.key === "Backspace" && !e.target.value && e.target.previousElementSibling ){
          e.target.previousElementSibling.focus();
        }
      }}
    />
  ))}
</div>
<div className="w-full rounded-xl border border-gray-200 bg-[#F7F8F7] p-4 ml-10 lg:max-w-55">
  <h3 className="text-xs font-bold text-green-600">
    Your information is safe
  </h3>

  <p className="mt-2 text-xs leading-5 text-gray-500">
    OTP verification helps protect
    <br />
    your booking and contact details.
  </p>
</div>
</div>
  


   <div className="mt-5 flex items-center gap-2 text-sm">
  <span className="text-gray-500">
    Didn't receive the OTP?
  </span>

 <button
    type="button"
   className="font-semibold text-emerald-700 underline decoration-transparent underline-offset-4 transition-all duration-200 hover:text-emerald-900 hover:underline"
  >
    Resend OTP
  </button>
</div>
<button onClick={handleVerify}
className="mt-8 w-3/5 rounded-md bg-[#261313] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-[#3A2020] active:scale-[0.99]"
>
  Verify & Confirm Booking →

 </button>
 {
  error &&(
    <p className="mt-3 text-sm text-red-600"> {error} </p>
  )
 }

 

</div>


</div>





    </div>
     
          
        

   </>
  )
}

export default OTP
