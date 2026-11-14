
import React from "react";
import { useNavigate } from "react-router-dom";
import services from "../data/services";

const Services = () => {
  const navigate = useNavigate();

  const handleBooking = (service) => {
    navigate("/detailing", {
      state: { serviceId: service.id },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-[#171717] px-6 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-green-400">
          UrbanCare Services
        </p>

        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Professional Services
          <span className="block text-green-400">
            At Your Doorstep
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          From home cleaning to electrical repairs, get trusted
          professionals for all your home service needs.
        </p>

        <button
          onClick={() =>
            document.getElementById("all-services")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="mt-8 rounded-xl bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          Explore Services
        </button>
      </section>

      {/* Services Section */}
      <section
        id="all-services"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
              What We Offer
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              Explore Our Services
            </h2>

            <p className="mt-2 text-gray-500">
              Choose the right service for your home.
            </p>
          </div>

          <p className="text-sm font-medium text-gray-500">
            {services.length} Services Available
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow">
                  ₹{service.price}
                </span>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {service.description ||
                    `Professional ${service.name.toLowerCase()} service`}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <span>◷</span>
                  <span>{service.duration}</span>
                </div>

                <div className="my-5 border-t border-gray-100" />

                <h4 className="mb-3 text-sm font-semibold text-gray-800">
                  What's Included
                </h4>

                <ul className="space-y-2">
                  {service.features?.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBooking(service)}
                  className="mt-6 w-full rounded-xl bg-[#171717] py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  Book Service →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="mx-6 mb-16 rounded-3xl bg-green-50 px-6 py-12 text-center md:mx-auto md:max-w-7xl">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Need Help Choosing a Service?
        </h2>

        <p className="mt-3 text-gray-600">
          Our support team is here to help you find the right service.
        </p>

        <button
          onClick={() => navigate("/customer-support")}
          className="mt-6 rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Contact Support
        </button>
      </section>

    </div>
  );
};

export default Services;
