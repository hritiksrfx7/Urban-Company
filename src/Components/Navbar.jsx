import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import service from '../data/services'

const Navbar = () => {
  const[loggedInUser,setLoggedInUser] = useState(()=>{
    return JSON.parse(localStorage.getItem("urbancare_user")|| "null");
  })
  const[searchItem, setSearchItem] = useState("");
  const[showSuggestions, setShowSuggetions] = useState(false);

  const[scroll, setScroll] =  useState(false);
  const[isDropdownOpen,setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
const filteredServices = service.filter((item) =>
  item.name.toLowerCase().includes(searchItem.toLowerCase())
);
const handleServiceClick = (service) => {
  navigate("/detailing", {
    state: { serviceId: service.id },
  });

  setSearchItem("");
  setShowSuggetions(false);
};
useEffect(() => {
  const handleClickOutside = (e) => {
    if (!e.target.closest(".search-container")) {
      setShowSuggetions(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
   useEffect(()=>{
     const updatedUser = ()=>{
          setLoggedInUser(
            JSON.parse(localStorage.getItem("urbancare_user")|| "null")
          )
         }
         window.addEventListener("urban-auth-change",updatedUser);

         return ()=>{
          window.removeEventListener("urban-auth-change",updatedUser)
         }
   },[])
    

    useEffect(()=>{
      const handleScroll =  ()=>{
        setScroll(window.scrollY >40)
      };
      window.addEventListener("scroll",handleScroll);
      handleScroll();
      return () =>{
        window.removeEventListener("scroll",handleScroll)
      }
    },[]);

    const handleLogout = ()=>{
        localStorage.removeItem("urbancare_user");
        setLoggedInUser(null);
        setIsDropdownOpen(false)
        navigate('/home');
    }

  return (
    <>
        <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50
        w-[94%] max-w-7xl
        transition-all duration-500 ease-in-out
        ${
          scroll
            ? "top-2 scale-[0.98]"
            : "top-4 scale-100"
        }`}
    >
      <div
        className={`flex items-center justify-between
          px-4 sm:px-5
          rounded-2xl border backdrop-blur-xl
          transition-all duration-500 ease-in-out
          ${
            scroll
              ? "h-16 bg-[#202020]/95 border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.30)]"
              : "h-18 bg-white/95 border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          }`}
      >
        {/* Logo */}
        <Link to='/home' className="flex items-center gap-3 shrink-0">
          <div
            className={`relative w-10 h-10 rounded-xl
              flex items-center justify-center
              transition-all duration-500
              ${
                scroll
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
          >
            <span className="font-bold text-sm">UC</span>

            <span
              className={`absolute -top-1 -right-1
                w-2.5 h-2.5 rounded-full border-2
                transition-colors duration-500
                ${
                  scroll
                    ? "bg-green-400 border-[#202020]"
                    : "bg-green-500 border-white"
                }`}
            />
          </div>

          <div>
            <h1
              className={`text-sm sm:text-[17px] font-bold
                tracking-tight transition-colors duration-500
                ${
                  scroll ? "text-white" : "text-gray-900"
                }`}
            >
              Urban Company
            </h1>

            <p
              className={`text-[10px] sm:text-[11px]
                transition-colors duration-500
                ${
                  scroll ? "text-gray-400" : "text-gray-500"
                }`}
            >
              Trusted home services
            </p>
          </div>
        </Link>

      
        <div
          className={`hidden md:flex items-center
            w-60 lg:w-[320px] h-10
            rounded-xl px-3
            border transition-all duration-500
            ${
              scroll
                ? "bg-[#303030] border-white/10 focus-within:border-white/30"
                : "bg-gray-50 border-gray-200 focus-within:bg-white focus-within:border-gray-400"
            }`}
        >
          <span
            className={`text-xl mr-2 transition-colors duration-500
              ${
                scroll ? "text-gray-300" : "text-gray-400"
              }`}
          >
            ⌕
          </span>

          <input
            type="text"
            placeholder="Search services..."
            value={searchItem}
            onChange={(e)=>{
              setSearchItem(e.target.value);
              setShowSuggetions(true);
            }}
            onFocus={()=>setShowSuggetions(true)}
            className={`w-full bg-transparent outline-none
              text-sm transition-colors duration-500
              ${
                scroll
                  ? "text-white placeholder:text-gray-500"
                  : "text-gray-800 placeholder:text-gray-400"
              }`}
          />
          {showSuggestions && searchItem && (
  <div className="absolute left-0 top-full z-50 mt-2 w-full rounded-lg border bg-white shadow-lg">

    {filteredServices.length > 0 ? (
      filteredServices.map((service) => (
        <div
          key={service.id}
          onClick={() => handleServiceClick(service)}
          className="cursor-pointer px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          {service.name}
        </div>
      ))
    ) : (
      <p className="px-4 py-3 text-gray-500">
        No service found
      </p>
    )}

  </div>
)}

          <span
            className={`text-xs transition-colors duration-500
              ${
                scroll ? "text-gray-500" : "text-gray-400"
              }`}
          >
            →
          </span>
        </div>

        
        <div className="flex items-center gap-1 sm:gap-2">
          <Link to='/home'
            className={`px-2 sm:px-4 py-2 rounded-xl
              text-xs sm:text-sm font-semibold
              transition-all duration-300
              ${
                scroll
                  ? "bg-white text-black"
                  : "bg-gray-100 text-gray-900"
              }`}
          >
            Home
          </Link>

          <Link to='/service'
            className={`hidden sm:block px-3 sm:px-4 py-2
              rounded-xl text-sm font-medium
              transition-all duration-300
              ${
                scroll
                  ? "text-gray-300 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            Services
          </Link>

          <Link to='/mybooking'
            className={`hidden sm:block px-3 sm:px-4 py-2
              rounded-xl text-sm font-medium
              transition-all duration-300
              ${
                scroll
                  ? "text-gray-300 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
          >
            Bookings
          </Link>

         
        
            
{loggedInUser ? (
  <div className="relative ml-1">
    <button
      type="button"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className={`flex items-center gap-2 pl-1.5 pr-2 sm:pr-3 py-1.5 rounded-xl border transition-all duration-500 ${
        scroll
          ? "border-white/10 hover:bg-white/10"
          : "border-gray-200 hover:bg-gray-50"
      }`}
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
          scroll
            ? "bg-white text-black"
            : "bg-linear-to-br from-gray-800 to-black text-white"
        }`}
      >
        {loggedInUser.fullName?.charAt(0).toUpperCase() || "U"}
      </div>

      <div className="hidden lg:block text-left">
        <p className={`text-xs font-semibold ${scroll ? "text-white" : "text-gray-900"}`}>
          {loggedInUser.fullName || "User"}
        </p>
        <p className={`text-[10px] ${scroll ? "text-gray-400" : "text-gray-500"}`}>
          My Profile
        </p>
      </div>

      <span className={`hidden sm:block text-xs ${scroll ? "text-gray-300" : "text-gray-400"}`}>
        {isDropdownOpen ? "⌃" : "⌄"}
      </span>
    </button>

    {isDropdownOpen && (
      <div className="absolute right-0 top-full mt-3 w-48 rounded-xl border border-gray-200 bg-white p-2 shadow-xl z-60">
        <Link
          to="/profile"
          onClick={() => setIsDropdownOpen(false)}
          className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Profile
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-lg px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <Link
    to="/login"
    className={`ml-1 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
      scroll
        ? "bg-white text-black"
        : "bg-gray-100 text-gray-900"
    }`}
  >
    Login
  </Link>
)}

          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
