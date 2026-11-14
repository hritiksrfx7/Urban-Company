
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Profile = () => {

    const navigate  = useNavigate();
    const[user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const[editName, setEditName] = useState("");
    const[editEmail, setEditEmail] = useState("");
    const[profileImage, setProfileImage] = useState("");
    useEffect(()=>{
       const fetchUser = async ()=>{
             const savedUser = localStorage.getItem("urbancare_user");
        if(savedUser){
          const userdata = JSON.parse(savedUser);
          const response = await axios.get(
            `http://localhost:3000/users/${userdata.id}`,
          )
          setUser(response.data);
          setEditEmail(response.data.email || "");
          setEditName(response.data.fullName || "")
          setProfileImage(response.data.profileImage || "")
          console.log(response.data.profileImage)
         
           
        }
       }
       fetchUser();
    },[])

    const handleSave = async (e)=>{
       
        if(!editEmail.trim() || !editName.trim()){
            alert("Please enter your email or name");
            return;
        }

        const response = await axios.patch(
            `http://localhost:3000/users/${user.id}`,{
                fullName:editName.trim(),
                email:editEmail.trim(),
                profileImage:profileImage
            }
        )
        const updateUser = response.data;
        setUser(updateUser)
        setEditEmail(updateUser.email)
        setEditName(updateUser.fullName)
        setIsEditing(false)
    }

    const handleLogout = () => {
  localStorage.removeItem("urbancare_user");
  window.dispatchEvent(new Event("urban-auth-change"));
  navigate("/home");
};

const handleProfileSave = async ()=>{
  if(!profileImage){
    alert("please select profile photo");
    return;
  }

  const response = await axios.patch(
    `http://localhost:3000/users/${user.id}`,{
      profileImage:profileImage
    }
   
  )
       setUser(response.data)
       const updateProfile = response.data.profileImage
       setProfileImage(updateProfile)
       alert("profile save successfully")
}
    
    
  return (
     <div className="mx-auto w-full max-w-7xl pt-20">
     <div className="mx-auto w-full max-w-330">

        {/* Page Heading */}
        <p className="mb-3 text-xs font-semibold tracking-widest text-gray-500">
          HOME / MY ACCOUNT
        </p>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Your Account
        </h1>

        <p className="mt-2 text-gray-600">
          Everything you need to manage your UrbanCare experience.
        </p>

      
       

       
{/* Welcome Card */}
<div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">

  {/* Profile Avatar */}
  {/* Profile Avatar */}
<div className="flex flex-col items-center">
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-bold text-gray-700 overflow-hidden">
    {profileImage ? (
      <img
        src={profileImage}
        alt="profile"
        className="h-full w-full rounded-full object-cover"
      />
    ) : (
      "U"
    )}
  </div>

  <input
    id="ProfilePhoto"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => {
      const file = e.target.files?.[0];

      if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
          setProfileImage(reader.result);
        };

        reader.readAsDataURL(file);
      }
    }}
  />

  <button
    type="button"
    onClick={() => {
      if (!user) return;

      if (profileImage && profileImage !== user.profileImage) {
        handleProfileSave();
      } else {
        document.getElementById("ProfilePhoto")?.click();
      }
    }}
    className="mt-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-black"
  >
    {profileImage && profileImage !== user.profileImage
      ? "Save Profile"
      : "Change Profile"}
  </button>
</div>

  {/* User Information */}
  <div className="flex-1">
    <p className="text-sm text-gray-500">
      Welcome back!
    </p>

    <h2 className="mt-1 text-2xl font-bold text-gray-900">
  {user ? user.fullName : "UrbanCare User"}
</h2>

    <p className="mt-1 text-gray-600">
      Your home services, in one place.
    </p>
  </div>

 

</div>

   
{/* Manage Your Account */}
<div className="mt-7">

  <h2 className="text-xl font-bold text-gray-900">
    Manage Your Account
  </h2>

  <div className="mt-4 grid gap-5 sm:grid-cols-2">

    {/* My Bookings */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">
        My Bookings
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        View and manage your home service bookings.
      </p>

      <button
        onClick={() => navigate("/mybooking")}
        className="mt-5 rounded-xl bg-[#202020] px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
      >
        View Bookings →
      </button>
    </div>

    {/* Account Settings */}
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">
        Account Settings
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Update your personal account details.
      </p>

      <button
      onClick={()=>navigate('/editprofile')}
       
        className="mt-5 rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
      >
        Edit Details →
      </button>
    </div>

  </div>
</div>

   
   



{/* Personal Details */}
<div className="mt-7 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

  <h2 className="text-xl font-bold text-gray-900">
    Personal Details
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    Your account information.
  </p>
  <div className="mt-4 flex justify-end">
 
<button
  onClick={() => {
    if (isEditing) {
      handleSave()
    } else {
      setIsEditing(true)
    }
  }}
  className="inline-flex items-center gap-2 rounded-xl bg-[#202020] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-gray-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg active:translate-y-0"
>
  {isEditing ? "Save" : "Edit profile"}
  <span>→</span>
</button>

</div>

  <div className="mt-6 grid gap-5 sm:grid-cols-2">

    {/* Full Name */}
    {/* <form onSubmit={(e)=>{
        e.preventDefault();
        handleSave();
    }} > */}
        <div className="rounded-xl bg-[#FAF9F6] p-4">
      <p className="text-sm text-gray-500">
        Full Name
      </p>
      {  isEditing? (
          <input
    type="text"
    value={editName}
    onChange={(e)=>{setEditName(e.target.value)}}
    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
    
  />
      ): (  <p className="mt-2 break-all font-semibold text-gray-900">
    {user ? user.fullName : "Not provided"}
  </p> )  }
    </div>

    {/* Email */}
    <div className="rounded-xl bg-[#FAF9F6] p-4">
      <p className="text-sm text-gray-500">
        Email Address
      </p>
      {isEditing ? (
        <input
    type="email"
    value={editEmail}
    onChange={(e)=>{setEditEmail(e.target.value)}}
    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2"
    
  />
      ):(
         <p className="mt-2 break-all font-semibold text-gray-900">
    {user ? user.email : "Not provided"}
  </p>
      )}
    </div>
    {/* </form> */}

    {/* Account Status */}
    <div className="rounded-xl bg-[#FAF9F6] p-4 sm:col-span-2">
      <p className="text-sm text-gray-500">
        Account Status
      </p>
      <p className="mt-2 font-semibold text-gray-900">
        Active
      </p>
    </div>

  </div>
</div>

         
{/* Sign Out */}
<div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center">

  <div>
    <h3 className="font-bold text-gray-900">
      Sign Out
    </h3>

    <p className="mt-1 text-sm text-gray-600">
      Sign out of your UrbanCare account on this device.
    </p>
  </div>

  <button onClick={handleLogout}
   className="rounded-xl border border-red-200 px-5 py-3 font-medium text-red-600 transition hover:bg-red-50">
    Logout
  </button>

</div>



</div>
    </div>
  )
}

export default Profile
