
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignBG from "../assets/Login signup/Signup.png";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const email = formdata.email.trim().toLowerCase();

      const response = await axios.get(
        "http://localhost:3000/users",
        { params: { email } }
      );

      const user = response.data.find(
        (item) =>
          item.email?.trim().toLowerCase() === email &&
          item.password === formdata.password
      );

      if (!user) {
        setError("Invalid email or password.");
        return;
      }
      localStorage.setItem("urbancare_user",
        JSON.stringify({
          id:user.id,
          fullName:user.fullName,
          email:user.email
        })
      );
      window.dispatchEvent(new Event("urban-auth-change"))

      setFormdata({ email: "", password: "" });
      navigate("/home");
    } catch (err) {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] p-3 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-162.5 max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">

        {/* LEFT SIDE */}
        <div className="relative flex flex-col overflow-hidden bg-[#174B3D] p-7 text-white sm:p-10 lg:p-12">

          {/* Decorative Circles */}
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
              Welcome back
            </p>

            <h1 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl lg:text-[42px]">
              Your home deserves
              <br />
              the best care.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              Sign in to book reliable home services and
              make everyday life a little easier.
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

          {/* Service Highlights */}
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
        <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-md">

            {/* Welcome Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF3ED] text-3xl">
              👋
            </div>

            {/* Heading */}
            <div className="mt-7">
              <p className="text-sm font-semibold text-[#39765C]">
                YOUR ACCOUNT
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#202720] sm:text-4xl">
                Welcome back!
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                Login to continue your journey with UrbanCare.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="mt-8 space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm font-semibold text-[#39765C] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formdata.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAF8] px-4 py-4 pr-14 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#39765C] focus:bg-white focus:ring-4 focus:ring-[#39765C]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-gray-500 hover:text-[#174B3D]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#174B3D] px-5 py-4 font-semibold text-white shadow-lg shadow-[#174B3D]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#10392E] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login to your account"}
                {!loading && <span className="text-lg">→</span>}
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">NEW HERE?</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-[#174B3D] hover:underline"
              >
                Create account
              </Link>
            </p>

            {/* Security Note */}
            <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#F5F8F5] p-4">
              <span className="text-xl">🛡️</span>

              <div>
                <p className="text-sm font-semibold text-gray-700">
                  Your privacy matters
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Your account details are handled with care.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
