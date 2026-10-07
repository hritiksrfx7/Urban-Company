import React from 'react'
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



const Home = () => {
    
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
   {/* ===================== WHY CHOOSE US ===================== */}

<section className="relative overflow-hidden py-20">

  {/* ===== Section Background Image ===== */}

  <img
    src={WhyChoose}
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  />

  {/* Soft Background Overlay */}

  <div className="absolute inset-0 bg-[#FAF9F6]/75"></div>


  {/* ===== Main Content ===== */}

  <div className="relative max-w-7xl mx-auto px-6">


    {/* ===== Section Heading ===== */}

    <div className="text-center max-w-2xl mx-auto mb-12">

      <p className="text-xs font-semibold tracking-[0.15em]
                    text-gray-500 uppercase mb-3">
        WHY CHOOSE US
      </p>

      <h2 className="text-3xl lg:text-4xl
                     font-bold tracking-tight
                     text-gray-900">
        Service You Can Trust
      </h2>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        We make home services simple, reliable and stress-free.
      </p>

    </div>


    {/* ===== Four Cards ===== */}

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">


      {/* ================= CARD 1 ================= */}

      <div
        className="group relative overflow-hidden
                   min-h-[270px]
                   rounded-2xl
                   border border-white/70
                   shadow-sm
                   hover:shadow-xl
                   hover:-translate-y-1
                   transition-all duration-300"
      >

        {/* Background Image */}

        <img
          src={Verified}
          alt="Verified Professionals"
          className="absolute inset-0
                     w-full h-full
                     object-cover
                     opacity-35
                     group-hover:opacity-45
                     transition-opacity duration-300"
        />

        {/* White Overlay */}

        <div className="absolute inset-0 bg-white/55"></div>


        {/* Content */}

        <div className="relative z-10 p-6">

          {/* Icon */}

          <div
            className="w-12 h-12
                       rounded-xl
                       bg-white/90
                       shadow-sm
                       flex items-center justify-center
                       text-xl mb-6
                       group-hover:bg-black
                       group-hover:text-white
                       transition-all duration-300"
          >
            ✓
          </div>

          <h3 className="text-base font-bold text-gray-900">
            Verified Professionals
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Skilled and background-verified professionals
            for your home.
          </p>

        </div>

      </div>


      {/* ================= CARD 2 ================= */}

      <div
        className="group relative overflow-hidden
                   min-h-67.5
                   rounded-2xl
                   border border-white/70
                   shadow-sm
                   hover:shadow-xl
                   hover:-translate-y-1
                   transition-all duration-300"
      >

        {/* Background Image */}

        <img
          src={Quality}
          alt="Quality Assured"
          className="absolute inset-0
                     w-full h-full
                     object-cover
                     opacity-35
                     group-hover:opacity-45
                     transition-opacity duration-300"
        />

        {/* White Overlay */}

        <div className="absolute inset-0 bg-white/55"></div>


        {/* Content */}

        <div className="relative z-10 p-6">

          {/* Icon */}

          <div
            className="w-12 h-12
                       rounded-xl
                       bg-white/90
                       shadow-sm
                       flex items-center justify-center
                       text-xl mb-6
                       group-hover:bg-black
                       group-hover:text-white
                       transition-all duration-300"
          >
            ★
          </div>

          <h3 className="text-base font-bold text-gray-900">
            Quality Assured
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            High-quality service with attention
            to every detail.
          </p>

        </div>

      </div>


      {/* ================= CARD 3 ================= */}

      <div
        className="group relative overflow-hidden
                   min-h-[270px]
                   rounded-2xl
                   border border-white/70
                   shadow-sm
                   hover:shadow-xl
                   hover:-translate-y-1
                   transition-all duration-300"
      >

        {/* Background Image */}

        <img
          src={Ontime}
          alt="On-Time Service"
          className="absolute inset-0
                     w-full h-full
                     object-cover
                     opacity-35
                     group-hover:opacity-45
                     transition-opacity duration-300"
        />

        {/* White Overlay */}

        <div className="absolute inset-0 bg-white/55"></div>


        {/* Content */}

        <div className="relative z-10 p-6">

          {/* Icon */}

          <div
            className="w-12 h-12
                       rounded-xl
                       bg-white/90
                       shadow-sm
                       flex items-center justify-center
                       text-xl mb-6
                       group-hover:bg-black
                       group-hover:text-white
                       transition-all duration-300"
          >
            ⚡
          </div>

          <h3 className="text-base font-bold text-gray-900">
            On-Time Service
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Get professionals at the scheduled time,
            without unnecessary delays.
          </p>

        </div>

      </div>


      {/* ================= CARD 4 ================= */}

      <div
        className="group relative overflow-hidden
                   min-h-67.5
                   rounded-2xl
                   border border-white/70
                   shadow-sm
                   hover:shadow-xl
                   hover:-translate-y-1
                   transition-all duration-300"
      >

        {/* Background Image */}

        <img
          src={EasyBooking}
          alt="Easy Booking"
          className="absolute inset-0
                     w-full h-full
                     object-cover
                     opacity-25
                     group-hover:opacity-45
                     transition-opacity duration-300"
        />

        {/* White Overlay */}

        <div className="absolute inset-0 bg-white/55"></div>


        {/* Content */}

        <div className="relative z-10 p-6">

          {/* Icon */}

          <div
            className="w-12 h-12
                       rounded-xl
                       bg-white/90
                       shadow-sm
                       flex items-center justify-center
                       text-xl mb-6
                       group-hover:bg-black
                       group-hover:text-white
                       transition-all duration-300"
          >
            ↗
          </div>

          <h3 className="text-base font-bold text-gray-900">
            Easy Booking
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Book your service quickly with a simple
            and smooth process.
          </p>

        </div>

      </div>


    </div>

  </div>

</section>
    </main>
       </>
  )
}

export default Home
