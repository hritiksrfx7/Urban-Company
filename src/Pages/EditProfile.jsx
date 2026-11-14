
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const[editName,setEditName] =useState("");
    const[editEmail, setEditEmail] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const[loading,setLoading] = useState(false);
    const[currentPassword,setCurrentPassword] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    useEffect(()=>{
        const fetchUser = async ()=>{
             const savedUser = localStorage.getItem("urbancare_user");
             if(!savedUser){
                navigate('/login');
                return;
             }
             const userdata = JSON.parse(savedUser);
             const response = await axios.get(
                `http://localhost:3000/users/${userdata.id}`
             );
             setUser(response.data);
             setEditEmail(response.data.email || "");
             setEditName(response.data.fullName || "");
             setProfileImage(response.data.profileImage || "");
             setLoading(true);
        }
        fetchUser();
    },[navigate]);
    const handleSave  =async (e)=>{
      e.preventDefault();
      if(!editName.trim() || !editEmail.trim()){
        alert("please enter email and name");
        return;
      }
      if(!user) return;
      if(currentPassword || newPassword || confirmPassword){
        if(!currentPassword || !newPassword || !confirmPassword){
            alert("Please fill all password fields");
            return;
        }
        if(currentPassword !== user.password){
            alert("current password is incorrect");
            setConfirmPassword("");
            setCurrentPassword("");
            setNewPassword("")
            return;
        }

        if(newPassword.length < 8){
            alert('New password must be at least 8 digits');
            return;
        }

            if(newPassword !== confirmPassword){
                alert("New password and confirm passworf do not match!")
                return;
            }
      }

      const response = await axios.patch(
        `http://localhost:3000/users/${user.id}`,{
            fullName: editName.trim(),
            email:editEmail.trim(),
            profileImage:profileImage
        }   

      )
        setUser(response.data);
        alert("profile updated successfully");
        navigate('/profile')
    }
  return (
    <div className="min-h-screen bg-[#F5F4F0] px-4 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            UrbanCare / My Account
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#202020] sm:text-4xl">
            Personalise your profile<span className="text-amber-600">.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Keep your information up to date for a smoother UrbanCare experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.5fr]">

          {/* Left Profile Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#202020] p-7 text-white shadow-xl sm:p-9">

            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
                Account settings
              </span>

              <div className="mt-10 flex flex-col items-center text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white/20 bg-[#D8C8AC] text-4xl font-bold text-[#202020] shadow-lg">
                  {profileImage? (
                    <img src={profileImage}
                     alt="profile"
                     className="h-full w-full object-cover rounded-full" />
                  ):(
                    "U"
                  ) }
                </div>
                      
                <input type="file" id="profilePhoto"
                      accept="image/*"
                      className="hidden"
                      onChange={(e)=>{
                        const file = e.target.files?.[0];
                        if(!file) return;
                        
                        const reader = new FileReader();
                        reader.onloadend = ()=>{
                            setProfileImage(reader.result)
                        }
                        reader.readAsDataURL(file)
                      }}
                       />


                <button
                  type="button"
                  onClick={()=>{
                    document.getElementById("profilePhoto")?.click();
                  }}
                  className="mt-4 rounded-full border border-white/25 px-5 py-2 text-xs font-semibold transition hover:bg-white hover:text-[#202020]"
                >
                  ↑ Upload new photo
                </button>

                <h2 className="mt-6 text-2xl font-bold">
                 {editName || " Your Name"}
                </h2>

                <p className="mt-2 text-sm text-gray-400">
                  UrbanCare Member
                </p>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm font-semibold">Your account, your way.</p>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Manage your personal information and keep your account details current.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-3 text-xs text-gray-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Account settings
              </div>
            </div>
          </div>

          {/* Right Edit Form */}
          <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-9">

            <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
                  Profile details
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#202020]">
                  Edit your information
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Update the details associated with your account.
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#F5F1E8] text-xl sm:flex">
                ✦
              </div>
            </div>

            {/* Personal Information */}
            <div className="mt-7">
              <h3 className="text-sm font-bold text-gray-900">
                Personal information
              </h3>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-600">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e)=>setEditName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#202020] focus:bg-white focus:ring-4 focus:ring-gray-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-600">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e)=>setEditEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#202020] focus:bg-white focus:ring-4 focus:ring-gray-100"
                  />
                </div>

              </div>
            </div>

            {/* Password */}
            <div className="mt-9 border-t border-gray-100 pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F1E8]">
                  🔒
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    Security & password
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Choose a strong password for your account.
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-gray-600">
                    CURRENT PASSWORD
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e)=>setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#202020] focus:bg-white focus:ring-4 focus:ring-gray-100"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-600">
                      NEW PASSWORD
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e)=>setNewPassword(e.target.value)}
                      placeholder="New password"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#202020] focus:bg-white focus:ring-4 focus:ring-gray-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold text-gray-600">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#202020] focus:bg-white focus:ring-4 focus:ring-gray-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={()=>navigate('/profile')}
                className="rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="rounded-xl bg-[#202020] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-700"
              >
                Save Changes →
              </button>
            </div>

          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Made for a better home service experience · UrbanCare
        </p>

      </div>
    </div>
  );
};

export default EditProfile;
