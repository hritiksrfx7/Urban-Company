import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import mainImage from '../assets/HomePage/main-Image.png'
import AcImage from '../assets/HomePage/Ac.jpeg'
import ElectricalImage from '../assets/HomePage/electrical.jpeg'
import HomeImage from '../assets/HomePage/Home.jpeg'
import PaintingImage from '../assets/HomePage/Painting.jpeg'
import PlumbingImage from '../assets/HomePage/plumbing.jpeg'
import WhyChoose from '../assets/HomePage/WhyChoose.png'
import Verified from '../assets/HomePage/verifiedprofessional.jpeg'
import  Quality from '../assets/HomePage/Quality.jpeg'
import Ontime from '../assets/HomePage/Ontimeservice.jpeg'
import EasyBooking from '../assets/HomePage/EasyBooking.jpeg'
import services from '../data/services'



const Home = () => {

  const navigate = useNavigate();
    
  return (
    <>
   

      <main className="pt-24 bg-white">

      <section className="px-6 py-8">

        <div className="max-w-7xl mx-auto">

          <div className="relative h-130 overflow-hidden rounded-3xl">

            
            <img
              src={mainImage}
              alt="Professional home service"
              className="absolute inset-0 w-full h-full object-cover"
            />

            
            <div
              className="absolute left-0 top-0 h-full w-[62%]
                         bg-linear-to-r
                         from-white/85
                         via-white/45
                         to-transparent"
            ></div>


            
            <div className="relative z-10 h-full flex items-center">

              <div className="max-w-xl px-10 lg:px-14">

              
                <p
                  className="text-xs font-semibold
                             tracking-[0.16em]
                             text-gray-600
                             mb-5"
                >
                  TRUSTED • PROFESSIONAL • AT YOUR DOORSTEP
                </p>


                
                <h1
                  className="text-5xl lg:text-6xl
                             font-extrabold
                             leading-[1.02]
                             tracking-tight
                             text-gray-900"
                >
                  Professional
                  <br />

                  Home Services
                  <br />

                  at Your Doorstep
                </h1>


              
                <p
                  className="mt-6
                             max-w-md
                             text-base
                             leading-7
                             text-gray-600"
                >
                  Get trusted professionals for a cleaner,
                  safer and more comfortable home.
                </p>


            
                <button
                  className="group
                             mt-7
                             inline-flex
                             items-center
                             gap-3
                             rounded-xl
                             bg-black
                             px-6
                             py-3.5
                             text-sm
                             font-semibold
                             text-white
                             shadow-lg
                             transition-all
                             duration-300
                             hover:bg-gray-800
                             hover:-translate-y-1
                             hover:shadow-xl"
                >
                  Explore Services

                  <span
                    className="transition-transform
                               duration-300
                               group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>


            
                <div className="flex items-center gap-7 mt-9">

                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      10K+
                    </p>

                    <p className="text-xs text-gray-800">
                      Happy Customers
                    </p>
                  </div>


                  <div className="h-9 w-px bg-gray-300"></div>


                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      4.8/5
                    </p>

                    <p className="text-xs text-gray-800">
                      Average Rating
                    </p>
                  </div>


                  <div className="h-9 w-px bg-gray-300"></div>


                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      ✓ Verified
                    </p>

                    <p className="text-xs text-gray-800">
                      Professionals
                    </p>
                  </div>

                </div>

              </div>

            </div>


            

            <div
              className="absolute
                         right-7
                         top-7
                         z-20
                         flex
                         flex-col
                         gap-3"
            >

              
              <div
                className="w-56
                           rounded-2xl
                           bg-white/95
                           backdrop-blur-sm
                           px-4
                           py-3.5
                           shadow-xl
                           border
                           border-white/80"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="w-10 h-10
                               rounded-xl
                               bg-black
                               text-white
                               flex
                               items-center
                               justify-center
                               text-sm
                               font-bold"
                  >
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Verified Professionals
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Background checked
                    </p>
                  </div>

                </div>
              </div>


              
              <div
                className="w-56
                           rounded-2xl
                           bg-white/95
                           backdrop-blur-sm
                           px-4
                           py-3.5
                           shadow-xl
                           border
                           border-white/80"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="w-10 h-10
                               rounded-xl
                               bg-gray-100
                               text-gray-900
                               flex
                               items-center
                               justify-center
                               text-sm
                               font-bold"
                  >
                    ★
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      High Quality Service
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      Rated by customers
                    </p>
                  </div>

                </div>
              </div>


              
              <div
                className="w-56
                           rounded-2xl
                           bg-white/95
                           backdrop-blur-sm
                           px-4
                           py-3.5
                           shadow-xl
                           border
                           border-white/80"
              >
                <div className="flex items-center gap-3">

                  <div
                    className="w-10 h-10
                               rounded-xl
                               bg-gray-900
                               text-white
                               flex
                               items-center
                               justify-center
                               text-sm"
                  >
                    ⚡
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      On-Time Service
                    </p>

                    <p className="text-xs text-gray-500 mt-0.5">
                      At your convenience
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      
       {/* second part */}

       <section className="max-w-7xl mx-auto px-6 py-16 bg-[#FAF9F6]">
  
  <div className="flex items-end justify-between mb-8">
    <div>
      <p className="text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
        What we offer
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        Popular Services
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Professional services for your everyday needs
      </p>
    </div>

    <button
      className="hidden sm:flex items-center gap-2
                 text-sm font-semibold text-gray-800
                 hover:text-black transition-all"
    >
      View All
      <span className="transition-transform duration-200 hover:translate-x-1">
        →
      </span>
    </button>
  </div>

  {/* Service Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

    {/* Card 1 */}
    <div 
    onClick={()=>{
      navigate('/detailing',{
        state:{serviceId :1}
      })
    }}
      className="group bg-white rounded-2xl overflow-hidden
                 border border-gray-100
                 shadow-sm
                 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="h-40 bg-[#F1EEE7] flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          <img src={HomeImage} alt="" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">
          Home Cleaning
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Deep cleaning for a fresh home
        </p>

        <button className="mt-4 text-xs font-semibold text-gray-900">

          Explore →
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div 
     onClick={()=>{
      navigate('/detailing',{
        state:{serviceId :2}
      })
    }}
      className="group bg-white rounded-2xl overflow-hidden
                 border border-gray-100
                 shadow-sm
                 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="h-40 bg-[#F1EEE7] flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          <img src={PlumbingImage} alt="" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">
          Plumbing
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Quick and reliable plumbing
        </p>

        <button className="mt-4 text-xs font-semibold text-gray-900">
          Explore →
        </button>
      </div>
    </div>

    {/* Card 3 */}
    <div
    onClick={()=>{
      navigate('/detailing',{
        state: {serviceId:4}
      })
    }}
      className="group bg-white rounded-2xl overflow-hidden
                 border border-gray-100
                 shadow-sm
                 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="h-40 bg-[#F1EEE7] flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
        <img src={ElectricalImage} alt="" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">
          Electrical
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Expert electrical services
        </p>

        <button className="mt-4 text-xs font-semibold text-gray-900">
          Explore →
        </button>
      </div>
    </div>

    {/* Card 4 */}
    <div
    onClick={()=>{
      navigate('/detailing',{
        state: {serviceId:5}
      })
    }}
      className="group bg-white rounded-2xl overflow-hidden
                 border border-gray-100
                 shadow-sm
                 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="h-40 bg-[#F1EEE7] flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          <img src={PaintingImage} alt="" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">
          Painting
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Give your walls a new look
        </p>

        <button className="mt-4 text-xs font-semibold text-gray-900">
          Explore →
        </button>
      </div>
    </div>

    {/* Card 5 */}
    <div
    onClick={()=>{
      navigate('/detailing',{
        state: {serviceId:3}
      })
    }}
      className="group bg-white rounded-2xl overflow-hidden
                 border border-gray-100
                 shadow-sm
                 hover:shadow-xl
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <div className="h-40 bg-[#F1EEE7] flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          <img src={AcImage} alt="" />
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900">
          AC Service
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          Cooling solutions at home
        </p>

        <button className="mt-4 text-xs font-semibold text-gray-900">
          Explore →
        </button>
      </div>
    </div>

  </div>
</section>


 {/* third section */}
                  

<section className="relative overflow-hidden py-20">
  
  <div className="relative max-w-7xl mx-auto px-6">

   
    <div className="text-center max-w-2xl mx-auto mb-12">

      <p className="text-xs font-semibold tracking-[0.15em]
                    text-gray-500 uppercase mb-3">
        WHY CHOOSE US
      </p>

      <h2 className="text-3xl lg:text-4xl font-bold
                     tracking-tight text-gray-900">
        Service You Can Trust
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        We make home services simple, reliable and stress-free.
      </p>

    </div>


  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


      

      <div
        className="group relative h-72.5 overflow-hidden
                   rounded-2xl shadow-md
                   hover:-translate-y-1 hover:shadow-xl
                   transition-all duration-300"
      >

       
        <img
          src={Verified}
          alt="Verified Professionals"
          className="absolute inset-0 w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-[48%]
                     bg-linear-to-t
                     from-black/85
                     via-black/50
                     to-transparent"
        ></div>

       
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

          <div className="w-10 h-10 rounded-xl
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          flex items-center justify-center
                          text-lg mb-3">
            ✓
          </div>

          <h3 className="text-lg font-bold">
            Verified Professionals
          </h3>

          <p className="mt-1 text-sm text-white/80 leading-5">
            Skilled and background-verified professionals
            for your home.
          </p>

        </div>

      </div>



      <div
        className="group relative h-72.5 overflow-hidden
                   rounded-2xl shadow-md
                   hover:-translate-y-1 hover:shadow-xl
                   transition-all duration-300"
      >

        
        <img
          src={Quality}
          alt="Quality Assured"
          className="absolute inset-0 w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

     
        <div
          className="absolute inset-x-0 bottom-0 h-[48%]
                     bg-linear-to-t
                     from-black/85
                     via-black/50
                     to-transparent"
        ></div>

       
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

          <div className="w-10 h-10 rounded-xl
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          flex items-center justify-center
                          text-lg mb-3">
            ★
          </div>

          <h3 className="text-lg font-bold">
            Quality Assured
          </h3>

          <p className="mt-1 text-sm text-white/80 leading-5">
            High-quality service with attention
            to every detail.
          </p>

        </div>

      </div>


      

      <div
        className="group relative h-72.5 overflow-hidden
                   rounded-2xl shadow-md
                   hover:-translate-y-1 hover:shadow-xl
                   transition-all duration-300"
      >

       
        <img
          src={Ontime}
          alt="On-Time Service"
          className="absolute inset-0 w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

       
        <div
          className="absolute inset-x-0 bottom-0 h-[48%]
                     bg-linear-to-t
                     from-black/85
                     via-black/50
                     to-transparent"
        ></div>

       
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

          <div className="w-10 h-10 rounded-xl
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          flex items-center justify-center
                          text-lg mb-3">
            ⚡
          </div>

          <h3 className="text-lg font-bold">
            On-Time Service
          </h3>

          <p className="mt-1 text-sm text-white/80 leading-5">
            Get professionals at the scheduled time,
            without unnecessary delays.
          </p>

        </div>

      </div>


    

      <div
        className="group relative h-72.5 overflow-hidden
                   rounded-2xl shadow-md
                   hover:-translate-y-1 hover:shadow-xl
                   transition-all duration-300"
      >

        
        <img
          src={EasyBooking}
          alt="Easy Booking"
          className="absolute inset-0 w-full h-full
                     object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
        />

      
        <div
          className="absolute inset-x-0 bottom-0 h-[48%]
                     bg-linear-to-t
                     from-black/85
                     via-black/50
                     to-transparent"
        ></div>

       
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">

          <div className="w-10 h-10 rounded-xl
                          bg-white/20 backdrop-blur-md
                          border border-white/30
                          flex items-center justify-center
                          text-lg mb-3">
            ↗
          </div>

          <h3 className="text-lg font-bold">
            Easy Booking
          </h3>

          <p className="mt-1 text-sm text-white/80 leading-5">
            Book your service quickly with a simple
            and smooth process.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

  {/* fourt section */}
     
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">

          <div className="relative h-46.75 overflow-hidden rounded-2xl">

          
            <img
              src={mainImage}
              alt="Professional home service"
              className="absolute inset-0 w-full h-full object-cover"
            />

           
            <div
              className="absolute left-0 top-0 h-full w-[45%]
                         bg-[#F8EFE5]/95
                         rounded-r-2xl"
            ></div>

           
            <div className="relative z-10 h-full flex items-center">

              <div className="px-7 max-w-112.5">

                <h1 className="text-[25px] leading-[1.12]
                               font-extrabold
                               tracking-tight
                               text-gray-900">
                  A Cleaner, Safer
                  <br />
                  and Happier Home
                  <br />
                  is Just a Click Away
                </h1>

                <p className="mt-2 text-[11px]
                              leading-4 text-gray-700">
                  Get professional home services with trusted experts.
                  <br />
                  Quality service, every time.
                </p>

                <button
                  className="mt-2
                             bg-black text-white
                             px-7 py-2.5
                             rounded-md
                             text-[10px]
                             font-semibold
                             shadow-md
                             hover:bg-gray-800
                             transition-all duration-200
                             hover:-translate-y-0.5"
                >
                  Book a Service
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>  

      {/* fifth section */}
       
<section className="bg-white py-10">
  <div className="max-w-6xl mx-auto px-6">

    
    <h2 className="text-2xl font-bold text-gray-900 mb-6">
      How It Works
    </h2>

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

      
      <div className="h-13.5 rounded-xl border border-gray-200
                      bg-white px-3 flex items-center gap-3
                      hover:shadow-sm transition-all">

        <div className="w-7 h-7 shrink-0 rounded-full
                        bg-gray-100 flex items-center justify-center
                        text-xs font-semibold text-gray-700">
          1
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900">
            Select Service
          </h3>
          <p className="text-[8px] text-gray-400 mt-1">
            Choose the service you need
          </p>
        </div>
      </div>


      <div className="h-13.5 rounded-xl border border-gray-200
                      bg-white px-3 flex items-center gap-3
                      hover:shadow-sm transition-all">

        <div className="w-7 h-7 shrink-0 rounded-full
                        bg-gray-100 flex items-center justify-center
                        text-xs font-semibold text-gray-700">
          2
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900">
            Choose Date & Time
          </h3>
          <p className="text-[8px] text-gray-400 mt-1">
            Pick a convenient slot
          </p>
        </div>
      </div>

     
      <div className="h-13.5 rounded-xl border border-gray-200
                      bg-white px-3 flex items-center gap-3
                      hover:shadow-sm transition-all">

        <div className="w-7 h-7 shrink-0 rounded-full
                        bg-gray-100 flex items-center justify-center
                        text-xs font-semibold text-gray-700">
          3
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900">
            Verify OTP
          </h3>
          <p className="text-[8px] text-gray-400 mt-1">
            Verify your mobile number
          </p>
        </div>
      </div>

      
      <div className="h-13.5 rounded-xl border border-gray-200
                      bg-white px-3 flex items-center gap-3
                      hover:shadow-sm transition-all">

        <div className="w-7 h-7 shrink-0 rounded-full
                        bg-gray-100 flex items-center justify-center
                        text-xs font-semibold text-gray-700">
          4
        </div>

        <div>
          <h3 className="text-[10px] font-bold text-gray-900">
            Get Service
          </h3>
          <p className="text-[8px] text-gray-400 mt-1">
            Professional arrives at your home
          </p>
        </div>
      </div>

    </div>
  </div>
</section>      



{/* sixth section */}

<div className=' h-20 w-full bg-[#EEF6FB] flex items-center justify-center gap-25' >
   <div className=' h-14 w-50  font-serif   ' >
    <div className='font-bold '>10k+</div>
    <div>Happy Customer</div>
   </div>
   <div className=' h-14 w-50  font-serif'>
      <div className='font-bold'>4.8/5</div>
    <div>Average rating</div>
   </div>
   <div className=' h-14 w-50 font-serif'>
      <div className='font-bold'>verified</div>
    <div>Professinals</div>
   </div>
   <div className=' h-14 w-50 font-serif'>
      <div className='font-bold'>on time</div>
    <div>You can count on</div>
   </div>
</div>





    </main>
       </>
  )
}

export default Home
