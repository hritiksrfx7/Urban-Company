
import React from "react";
import { Headset, Phone, Mail, Clock, Send, ChevronRight } from "lucide-react";
import HeroImage from '../assets/customersupport.png'

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-r from-[#e8f7f5] to-[#f5faff] px-8 py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">
              <Headset size={17} />
              CUSTOMER SUPPORT
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              We're here
              <br />
              <span className="text-teal-700">to help you.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg">
              Have a question, facing an issue, or need support
              with your booking? Our team is always ready to assist you.
            </p>
          </div>
<div className="flex justify-center">
  <img
    src={HeroImage}
    alt="Customer Support"
    className="w-full max-w-lg h-87.5 object-contain"
  />
</div>

        </div>
      </section>

      {/* Main Section */}
      <section className="mx-auto grid max-w-7xl gap-7 px-6 py-12 lg:grid-cols-3 lg:px-10">

        {/* Support Form */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:p-8 lg:col-span-2">

          <h2 className="text-2xl font-bold text-slate-900">
            Send us a Support Request
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Tell us about your issue and we'll get back to you as soon as possible.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email (Optional)
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Booking ID (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter booking ID"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-teal-600"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Issue Category
              </label>
              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600 outline-none focus:border-teal-600">
                <option>Select issue category</option>
                <option>Booking Issue</option>
                <option>Service Complaint</option>
                <option>Professional Issue</option>
                <option>Account Issue</option>
                <option>Other</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Describe Your Issue
              </label>
              <textarea
                rows="5"
                placeholder="Please provide details about your concern..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-600"
              />
            </div>

          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-teal-800 py-4 font-semibold text-white transition hover:bg-teal-900">
            <Send size={19} />
            Submit Request
          </button>

        </div>

        {/* Contact Support */}
        <div className="rounded-2xl bg-gradient-to-b from-teal-50 to-[#effaf8] p-6 md:p-8">

          <h2 className="text-2xl font-bold text-slate-900">
            Need immediate assistance?
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            You can also reach out to us directly.
          </p>

          <div className="mt-7 space-y-4">

            <div className="flex items-center gap-4 rounded-xl border border-white bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Phone size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Call Us</h3>
                <p className="mt-1 text-sm text-slate-600">
                  +91 98765 43210
                </p>
              </div>
              <ChevronRight className="text-slate-400" />
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Email Us</h3>
                <p className="mt-1 text-sm text-slate-600">
                  support@urbancare.in
                </p>
              </div>
              <ChevronRight className="text-slate-400" />
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-white bg-white p-4 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                <Clock size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">Support Hours</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Mon - Sun, 8:00 AM - 10:00 PM
                </p>
              </div>
              <ChevronRight className="text-slate-400" />
            </div>

          </div>

          <div className="mt-8 rounded-xl bg-teal-100 p-5 text-center">
            <Headset size={35} className="mx-auto text-teal-800" />
            <h3 className="mt-3 font-bold text-teal-950">
              We're always happy to help!
            </h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default CustomerSupport;
