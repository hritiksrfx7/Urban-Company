
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SignBG from "../assets/Login signup/Signup.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const fullName = formData.fullName.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim().toLowerCase();

    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:3000/users"
      );

      const existingUser = response.data.find(
        (user) => user.email?.trim().toLowerCase() === email
      );

      if (existingUser) {
        setError("This email is already registered.");
        return;
      }

      await axios.post("http://localhost:3000/users", {
        fullName,
        mobile,
        email,
        password: formData.password,
      });

      setSuccess("Account created successfully!");

      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        password: "",
        confirmpassword: "",
      });

      // Navigate to login after successful registration
      navigate('/login')
    } catch (err) {
      setError("Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-3 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-162.5 max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT SIDE */}
        <div className="relative flex flex-col overflow-hidden bg-[#174B3D] p-7 text-white sm:p-10 lg:p-12">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

          {/* Logo */}
          <Link to="/" className="relative z-10 flex w-fit items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-black text-[#174B3D]">
              U
            </div>
            <span className="text-2xl font-bold tracking-tight">
              UrbanCare
            </span>
          </Link>

          {/* Heading */}
          <div className="relative z-10 mt-10 lg:mt-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-[#C5E8D5]">
              A better way to care
            </p>

            <h1 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
              Your home.
              <br />
              Our experts.
              <span className="mt-2 block text-[#C5E8D5]">
                Your peace of mind.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              Join us to discover reliable home services
              and make everyday living easier.
            </p>
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-8 flex w-full max-w-lg items-center justify-center">
            <div className="absolute h-4/5 w-4/5 rounded-full bg-[#B9D9C4]/20 blur-3xl" />

            <div className="relative flex h-52 w-full items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 sm:h-64 lg:h-72">
              <img
                src={SignBG}
                alt="Home service professional"
                className="h-full w-full rounded-2xl object-contain"
              />
            </div>
          </div>

          {/* Trust cards */}
          <div className="relative z-10 mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4">
              <span className="text-xl">✓</span>
              <p className="mt-2 text-xs font-semibold sm:text-sm">
                Trusted Experts
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4">
              <span className="text-xl">⌂</span>
              <p className="mt-2 text-xs font-semibold sm:text-sm">
                Home Services
              </p>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-3 sm:p-4">
              <span className="text-xl">♡</span>
              <p className="mt-2 text-xs font-semibold sm:text-sm">
                Customer First
              </p>
            </div>
          </div>

          <p className="relative z-10 mt-8 text-xs text-white/50">
            Your home, our care.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-12">
          <div className="w-full max-w-md">

            {/* Heading */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3ED] text-3xl">
              ✨
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-[#39765C]">
                GET STARTED
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#202720] sm:text-4xl">
                Create account
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Join UrbanCare and make your home care easier.
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSignup} className="mt-7 space-y-4">

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-gray-700">
                  Full name
                </label>

                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                />
              </div>

              {/* Mobile */}
              <div>
                <label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-gray-700">
                  Mobile number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={10}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 text-sm outline-none transition focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    minLength={6}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 pr-14 text-sm outline-none transition focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 hover:text-[#174B3D]"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmpassword" className="mb-2 block text-sm font-semibold text-gray-700">
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="confirmpassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    value={formData.confirmpassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    autoComplete="new-password"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-3.5 pr-14 text-sm outline-none transition focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 hover:text-[#174B3D]"
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Error / Success */}
              {error && (
                <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </p>
              )}

              {success && (
                <p role="status" className="rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  {success} Redirecting to login...
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading || Boolean(success)}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#174B3D] px-5 py-4 font-semibold text-white shadow-lg shadow-[#174B3D]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#10392E] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create account"}
                {!loading && <span className="text-lg">→</span>}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-7 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-[#174B3D] hover:underline">
                Log in
              </Link>
            </p>

            {/* Security Note */}
            <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#F5F8F5] p-4">
              <span className="text-xl">🛡️</span>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Your privacy matters
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Create your account to get started with home services.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
