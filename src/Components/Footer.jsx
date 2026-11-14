import { Link } from 'react-router-dom'


const Footer = ()=>{
    return(
        <>
       
<footer className="bg-[#1C1C1C] text-white">

  <div className="max-w-6xl mx-auto px-6 py-14">

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

     
      <div>
        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-10 rounded-xl bg-white
                          text-black flex items-center
                          justify-center font-bold text-sm">
            UC
          </div>

          <div>
            <h2 className="text-lg font-bold">
              Urban Company
            </h2>

            <p className="text-[10px] text-gray-400">
              Trusted home services
            </p>
          </div>

        </div>

        <p className="text-sm leading-6 text-gray-400 max-w-xs">
          Professional and reliable home services delivered
          by trusted experts at your doorstep.
        </p>
      </div>


    
      <div>
        <h3 className="text-sm font-semibold mb-5">
          Quick Links
        </h3>

        <div className="space-y-3 text-sm text-gray-400">

          <Link to='/admin-dashboard' className="block hover:text-white transition">
            Home
          </Link>

          <button className="block hover:text-white transition">
            Services
          </button>

          <button className="block hover:text-white transition">
            My Bookings
          </button>

          <button className="block hover:text-white transition">
            My Profile
          </button>

        </div>
      </div>


      
      <div>
        <h3 className="text-sm font-semibold mb-5">
          Services
        </h3>

        <div className="space-y-3 text-sm text-gray-400">

          <button className="block hover:text-white transition">
            Home Cleaning
          </button>

          <button className="block hover:text-white transition">
            Plumbing
          </button>

          <button className="block hover:text-white transition">
            Electrical
          </button>

          <button className="block hover:text-white transition">
            AC Service
          </button>

        </div>
      </div>


     
      <div>
        <h3 className="text-sm font-semibold mb-5">
          Support
        </h3>

        <div className="space-y-3 text-sm text-gray-400">

          <Link to='/customer-support'>
            Need help with your booking?
          </Link>

          <p className="text-white font-medium">
            support@urbancompany.com
          </p>

          <p>
            Mon – Sat · 9:00 AM – 6:00 PM
          </p>

        </div>
      </div>

    </div>


   
    <div className="border-t border-white/10 mt-12 pt-6
                    flex flex-col sm:flex-row
                    items-center justify-between gap-4">

      <p className="text-xs text-gray-500">
        © 2026 Urban Company. All rights reserved.
      </p>

      <div className="flex items-center gap-5
                      text-xs text-gray-500">

        <button className="hover:text-white transition">
          Privacy Policy
        </button>

        <button className="hover:text-white transition">
          Terms & Conditions
        </button>

      </div>

    </div>

  </div>

</footer>
        
        </>
    )
}

export default Footer;