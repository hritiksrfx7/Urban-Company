import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ResetPassword = () => {
    const[password,setPassword]  =  useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[error,setError] = useState("");
    const[success, setSuccess] = useState("");
     const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);    
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || "";

    const handleResetPassword =(e)=>{
      e.preventDefault();
      if(!password  || !confirmPassword){
        setError("Please fill in both password filled.");
        return;
      }
      if(password.length<8){
        setError("password must be al least 8 character");
        return;
      }
      if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    setError("Password must contain letters and numbers.");
    return;
  }
      if(password !== confirmPassword){
        setError("Password do not match.")
        return;
      }

      if(!email){
        setError("Email not found.")
        return;
      }
      axios.get(`http://localhost:3000/users?email=${encodeURIComponent(email)}`)
      .then((response)=>{
        if(response.data.length === 0){
            setError("User Not found.Please check your email.")
            return;
        }

        const user = response.data[0];

        return axios.patch(`http://localhost:3000/users/${user.id}`,{
            password:password,
        })
        .then(()=>{
            setError("");
            setSuccess("password updated successfully");
            navigate('/login');
        })
      })


    }

  return (
    <>
        <div className="min-h-screen bg-[#F5F1E8] p-3 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-162.5 max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">

        {/* Left Side */}
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
              A fresh start.
              <br />
              A stronger password.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-white/75">
              Create a new password and get back to enjoying hassle-free
              home services.
            </p>
          </div>

          {/* Security Card */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-lg font-semibold">
                🛡️ Your account, protected
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Keep your personal information safe with a strong password.
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
              <p className="text-lg font-semibold">
                🔐 Secure password recovery
              </p>
              <p className="mt-2 text-sm text-white/70">
                One final step to regain access to your account.
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
              to="/login"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#174B3D]"
            >
              ← Back to Login
            </Link>

            {/* Icon */}
            <div className="mt-9 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3ED] text-3xl">
              🔐
            </div>

            <p className="mt-7 text-sm font-semibold tracking-wider text-[#39765C]">
              PASSWORD RECOVERY
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#202720] sm:text-4xl">
              Reset password
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Create a new password for your account. Choose something
              strong and easy for you to remember.
            </p>

            {/* Email */}
            <div className="mt-5 rounded-xl bg-[#F5F8F5] p-4">
              <p className="text-xs text-gray-500">
                Resetting password for
              </p>
              <p className="mt-1 break-all font-semibold text-[#174B3D]">
                {email || "Your registered email"}
              </p>
            </div>

            {/* New Password */}
           <form onSubmit={handleResetPassword}>
             <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                New Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#39765C] focus-within:ring-4 focus-within:ring-emerald-500/10">
                <span className="mr-3 text-lg">🔒</span>

                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                    setError("");
                }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full bg-transparent py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-sm text-gray-500 hover:text-[#174B3D]"
                  aria-label="Toggle new password visibility"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 transition focus-within:border-[#39765C] focus-within:ring-4 focus-within:ring-emerald-500/10">
                <span className="mr-3 text-lg">🔒</span>

                <input
                value={confirmPassword}
                onChange={(e)=>{
                    setConfirmPassword(e.target.value);
                    setError("");
                }}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter new password"
                  className="w-full bg-transparent py-4 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="ml-2 text-sm text-gray-500 hover:text-[#174B3D]"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="mt-5 rounded-xl bg-[#F5F8F5] p-4">
              <p className="mb-3 text-sm font-semibold text-[#174B3D]">
                Password requirements
              </p>

              <div className="space-y-2 text-sm text-gray-500">
                <p>✓ At least 8 characters</p>
                <p>✓ Contains letters and numbers</p>
                <p>✓ Both passwords should match</p>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-[#174B3D] py-4 font-semibold text-white shadow-lg shadow-[#174B3D]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#10392E] hover:shadow-xl"
            >
              Update Password →
            </button>
         

           </form>
              {error && (
  <p className="mt-3 text-sm text-red-600">{error}</p>
)}

{success && (
  <p className="mt-3 text-sm text-green-700">{success}</p>
)}
            {/* Security Note */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
              <span>🛡️</span>
              <span>Your account security matters to us.</span>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default ResetPassword
