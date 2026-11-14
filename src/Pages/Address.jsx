import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import services from '../data/services';

const Address = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(
    localStorage.getItem("urbancare_user") || "null"
  )
  
   const selectedDate = location.state?.selectedDate;
   const selectedTime = location.state?.selectedTime;
   const serviceId = location.state?.serviceId;
   const service = services.find(
    (e)=>e.id==serviceId
   );

  
  return (
    <>
      <div className="min-h-screen w-7xl pl-40 bg-[#FAF9F6] px-6 py-10 ">
         <div>
          <p className="text-sm text-gray-500">
           Home　›　Booking
          </p>
           
            
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            Where should we provide the service?
          </h1>

                      <p className="mt-2 text-sm text-gray-500">
                  Enter your address so our professional can reach you.
                </p>

                    

                     <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">

                          <div className="rounded-2xl border border-gray-200 bg-white p-7 md:col-span-2">

                               <h2 className="text-xl font-bold text-gray-900">
                                  Service Address
                                </h2>

                                 <p className="mt-2 text-sm text-gray-500">
                                  Add the address where the service should be provided.
                                </p>
                                 <form 
                                   id="addressForm"
                                 
                                 onSubmit={(e)=>{
                                 
                                  e.preventDefault();
                                 
                                   if (e.nativeEvent.submitter?.name=== "continue") {
                                    const formData = new FormData(e.currentTarget);
                                    const addressData = Object.fromEntries(formData.entries());
                                    const customerName = addressData.fullName;
                                    navigate('/otp',{
                                      state:{
                                        ...addressData,
                                        customerName,
                                        serviceId,
                                        selectedDate,
                                        selectedTime,
                                        userId:loggedInUser?.id,
                                        
                                      }
                                    })
                                    return;
                                   }
                                alert("Address save Successfully")

                                  
                                 }}>

                    <div className="mt-6">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="fullname"
                        required
                        minLength={3}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                      />
                    </div>


                       <div className="mt-5">
                          <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Mobile Number
                          </label>

                          <input
                          required
                          name="mobilenumber"
                            type="tel"
                            placeholder="Enter mobile number"
                            maxLength={10}
                            minLength={10}
                            pattern="[0-9]{10}"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                          />
                        </div>

                  <div className="mt-5">
                          <label className="mb-2 block text-sm font-semibold text-gray-700">
                            House / Flat / Office No.
                          </label>

                          <input
                            type="text"
                            name="house"
                            required
                            placeholder="Enter house or flat number"
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                          />
                        </div>

                          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Area / Street
    </label>

    <input
      type="text"
      name="area"
      required
      placeholder="Enter area or street"
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-semibold text-gray-700">
      Pincode
    </label>

    <input
      type="text"
      name="pincode"
      inputMode="numeric"
      required
      minLength={6}
      maxLength={6}
      pattern="[0-9]{6}"
      placeholder="Enter pincode"
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
    />
  </div>

</div>
                               <div className="mt-5">
                              <label className="mb-2 block text-sm font-semibold text-gray-700">
                                City
                              </label>

                              <input
                                type="text"
                                name="city"
                                required
                                placeholder="Enter your city"
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                              />
                            </div>
                             <div className="mt-5">
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        State
                      </label>

                      <input
                        type="text"
                        name="state"
                        required
                        placeholder="Enter your state"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-teal-500"
                      />
                    </div>
                      <button
                        type="submit"
                        name='save'
                        className="mt-7 w-full rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
                      >
                        Save Address
                      </button>
                      </form>
                 </div>

                           <div className="rounded-2xl border border-gray-200 bg-white p-7">
          <h2 className="text-lg font-bold text-gray-900">
            Booking Summary
          </h2>
          <div className="mt-5 rounded-2xl bg-[#F4F8F7] p-5">
  <p className="text-xs text-gray-500">
    SERVICE
  </p>

  <p className="mt-1 font-bold text-gray-800">
   {service?.name || "service name"}
  </p>

  <p className="mt-1 text-xs text-gray-500">
    {service?.duration || "service duration varies"}
  </p>
</div>

        <div className="mt-6 space-y-5">
  <div className="flex items-center justify-between gap-4">
    <p className="text-xs text-gray-500">DATE</p>

    <p className="text-sm font-semibold text-gray-700">
      {selectedDate || "Not selected"}
    </p>
  </div>

  <div className="flex items-center justify-between gap-4">
    <p className="text-xs text-gray-500">TIME</p>

    <p className="text-sm font-semibold text-gray-700">
      {selectedTime || "Not selected"}
    </p>
  </div>
</div>
    <div className="mt-6 border-t border-gray-200 pt-5">
  <p className="text-xs text-gray-500">
    STARTING PRICE
  </p>

  <p className="mt-3 text-2xl font-bold text-gray-900">
    ₹{service?.price || "serice price"}
  </p>
</div>
<button
  type="submit"
  name='continue'
  form='addressForm'
  // onClick={()=>{
  //   document.getElementById("addressForm").requestSubmit();
  // }}
  className="mt-10 w-full rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
>
  
  Continue to Booking →
</button>
<div className="mt-10 rounded-xl bg-teal-50 p-4">
  <h3 className="font-semibold text-teal-800">
    🔒 Your Information Is Safe
  </h3>

  <p className="mt-2 text-sm leading-6 text-gray-600">
    Your personal details are used only for booking and service-related communication.
  </p>
</div>
        </div>
        
                     </div>
                     
         </div>

              
             
   
      </div>
    </>
  )
}

export default Address
