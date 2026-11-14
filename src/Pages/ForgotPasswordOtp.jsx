import React, { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ForgotPasswordOtp = () => {
  const[otp,setOtp] = useState(["","","","","",""]);
  const[error,setError] = useState("");
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "";
  const handleOtpChange = (value,index)=>{
         if (!/^\d*$/.test(value)) return;

         const updatedOtp = [...otp];
         updatedOtp[index] = value.slice(-1);
         setOtp(updatedOtp);
         setError("");

         if(value && index  < 5){
          inputRef.current[index+1]?.focus();
         }
  }

    const handleKeyDown = (e,index)=>{
      if(e.key === "Backspace" && !otp[index] && index >0 ){
        inputRef.current[index-1]?.focus();
      }
    }

    const handleVerifyOtp = (e)=>{
      e.preventDefault();
      const enterOtp = otp.join("");
      if(enterOtp.length !== 6){
        setError("Please enter all 6 digits");
        return;
      }
      if(enterOtp === "123456"){
        setError("");
        navigate('/reset-password',{
          state:{email}
      })
      }
      else{
        setError("Invalid Otp. Please try again.")
      }

    }
  return (

    <>
     <div className="min-h-screen bg-[#F5F1E8] p-3 sm:p-6 lg:p-10">
  <div className="mx-auto grid min-h-162.5 max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">

    <div className="relative flex flex-col justify-between overflow-hidden bg-[#174B3D] p-7 text-white sm:p-10 lg:p-12">

  {/* Logo */}
  <div className="flex items-center gap-3">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-black text-[#174B3D]">
      U
    </div>
    <span className="text-2xl font-bold">UrbanCare</span>
  </div>

  {/* Heading */}
  <div className="my-12">
    <p className="text-xs font-bold uppercase tracking-[3px] text-[#C5E8D5]">
      Account Security
    </p>

    <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
      Your security.
      <br />
      Our priority.
    </h1>

    <p className="mt-5 max-w-md text-base leading-7 text-white/75">
      One small step to get back to your account.
    </p>
  </div>

  {/* Security Cards */}
  <div className="space-y-4">
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
      <p className="font-semibold">🛡️ Secure recovery</p>
      <p className="mt-1 text-sm text-white/70">
        Protect your account
      </p>
    </div>

    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
      <p className="font-semibold">✉️ Email verification</p>
      <p className="mt-1 text-sm text-white/70">
        Verify before resetting
      </p>
    </div>
  </div>

  <p className="mt-8 text-xs text-white/50">
    Your home, our care.
  </p>
</div>

    {/* Right Side */}
    

     <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-14">
  <div className="w-full max-w-md">

    <Link
      to="/forgot-password"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#174B3D]"
    >
      ← Back to Forgot Password
    </Link>

    <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3ED] text-3xl">
      ✉️
    </div>

    <p className="mt-7 text-sm font-semibold text-[#39765C]">
      EMAIL VERIFICATION
    </p>

    <h2 className="mt-2 text-3xl font-bold text-[#202720] sm:text-4xl">
      Verify your email
    </h2>

    <p className="mt-4 text-sm leading-7 text-gray-500">
      Enter the 6-digit code to continue resetting your password.
    </p>

    {/* Email Box */}
    <div className="mt-5 rounded-xl bg-[#F5F8F5] p-4">
      <p className="text-xs text-gray-500">Verification code sent to</p>
      <p className="mt-1 break-all font-semibold text-[#174B3D]">
       {email || "Your register otp"}
      </p>
    </div>

   <form onSubmit={handleVerifyOtp}>
     <div className="mt-7">
  <label className="mb-3 block text-sm font-semibold text-gray-700">
    Enter OTP
  </label>

  <div className="flex justify-center gap-2">
   
  {otp.map((digit,index)=>(
      <input
      key={index}
      ref={(el)=>(inputRef.current[index]=el)}
      type="text"
      value={digit}
      onChange={(e)=>{handleOtpChange(e.target.value,index)}}
      onKeyDown={(e)=>handleKeyDown(e,index)}
      maxLength={1}
      className="h-12 w-12 rounded-full border border-emerald-200 bg-linear-to-br from-white via-[#F0F7F1] to-[#DCEBE0] text-center text-lg font-bold text-[#174B3D] shadow-[0_4px_12px_rgba(23,75,61,0.12)] outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-[0_0_18px_rgba(52,211,153,0.35)]"
    />
  ))}
  </div>
  {error && (
    <p className='mt-3 text-center text-sm text-red-600'> {error} </p>
  )}
</div>

    {/* Resend OTP */}

  <button
  type="submit"
  className="mt-6 w-full rounded-xl bg-[#174B3D] py-4 font-semibold text-white shadow-lg shadow-[#174B3D]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#10392E] hover:shadow-xl"
>
  Verify OTP →
</button>
   </form>

    {/* Security Note */}

  </div>
</div>

  </div>
</div>
    </>
  )
}

export default ForgotPasswordOtp
