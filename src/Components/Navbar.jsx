import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50">

      <div className="h-[72px] px-5 flex items-center justify-between
                      bg-white/95 backdrop-blur-xl
                      border border-gray-200
                      rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">

        {/* Logo */}
        <div className="flex items-center gap-3 min-w-[190px]">

          <div className="relative w-11 h-11 rounded-xl bg-black
                          flex items-center justify-center
                          shadow-lg">
            <span className="text-white font-bold text-sm">
              UC
            </span>

            <span className="absolute -top-1 -right-1 w-2.5 h-2.5
                             bg-green-500 rounded-full border-2 border-white">
            </span>
          </div>

          <div>
            <h1 className="text-[17px] font-bold tracking-tight text-gray-900">
              Urban Company
            </h1>

            <p className="text-[11px] text-gray-500">
              Trusted home services
            </p>
          </div>

        </div>


        {/* Search */}
       <div
  className="flex items-center w-[380px] h-12
             bg-gray-50
             border border-gray-200
             rounded-2xl
             px-4
             shadow-sm
             transition-all duration-300
             focus-within:bg-white
             focus-within:border-gray-400
             focus-within:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
>
  <span className="text-gray-400 text-xl mr-3">
    ⌕
  </span>

  <input
    type="text"
    placeholder="What service are you looking for?"
    className="flex-1 bg-transparent
               outline-none
               text-sm text-gray-800
               placeholder:text-gray-400"
  />

  <button
    className="ml-2 w-8 h-8
               rounded-lg
               bg-black
               text-white
               flex items-center justify-center
               hover:bg-gray-800
               transition"
  >
    →
  </button>
</div>


      
        <div className="flex items-center gap-2">

          <button className="px-4 py-2.5 rounded-xl
                             bg-gray-100 text-gray-900
                             text-sm font-semibold
                             transition-all duration-200
                             hover:bg-black hover:text-white">
            Home
          </button>

          <button className="px-4 py-2.5 rounded-xl
                             text-gray-600
                             text-sm font-medium
                             transition-all duration-200
                             hover:bg-black hover:text-white">
            Services
          </button>

          <button className="px-4 py-2.5 rounded-xl
                             text-gray-600
                             text-sm font-medium
                             transition-all duration-200
                             hover:bg-black hover:text-white">
            Bookings
          </button>


          
          <button className="ml-2 flex items-center gap-2
                             pl-2 pr-3 py-1.5
                             rounded-xl
                             border border-gray-200
                             hover:bg-gray-50
                             transition-all">

            <div className="w-9 h-9 rounded-lg
                            bg-linear-to-br from-gray-800 to-black
                            text-white
                            flex items-center justify-center
                            text-xs font-bold">
              HS
            </div>

            <div className="hidden lg:block text-left">
              <p className="text-xs font-semibold text-gray-900">
                Hritik
              </p>

              <p className="text-[10px] text-gray-400">
                My Profile
              </p>
            </div>

            <span className="text-gray-400 text-xs">
             ⌄
            </span>

          </button>

        </div>

      </div>

    </nav>
    </>
  )
}

export default Navbar
