import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  CalendarDays,
  BriefcaseBusiness,
  Users,
  UserRoundCheck,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  IndianRupee,
  Clock3,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";



const weeklyBookings = [
  { day: "Mon", value: 18 },
  { day: "Tue", value: 25 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 30 },
  { day: "Fri", value: 22 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 27 },
];



const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Bookings", icon: CalendarDays },
  { name: "Services", icon: BriefcaseBusiness },
  { name: "Customers", icon: Users },
  { name: "Professionals", icon: UserRoundCheck },
  { name: "Settings", icon: Settings },
];

const  AdminDashboard =()=> {
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const[bookings, setBookings] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState("");
  const[users,setUsers] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:3000/bookings")
    .then((response) => {
      setBookings(response.data);
     
      setLoading(false);
    })
    .catch((error) => {
      console.log("Bookings fetch error:", error);
      setError("Failed to load bookings");
      setLoading(false);
    });
}, []);
  useEffect(()=>{
    axios.get("http://localhost:3000/users")
    .then((response)=>
       setUsers(response.data)
    )
    .catch((error)=>{
        console.log("User fetch error",error);
        
    })
  },[])

const totalBookings = bookings.length;
const totalCustomer = users.length;
const pendingBookings = bookings.filter(
    (booking)=>
        String(booking.status || "").toLocaleLowerCase() === "pending"
    
).length;
const stats = [
  {
    title: "Total Bookings",
    value: totalBookings,
    change: "All bookings",
    icon: CalendarDays,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Pending Bookings",
    value: pendingBookings,
    change: "Needs attention",
    icon: Clock3,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Total Customers",
    value: totalCustomer,
    change: "+8.2%",
    icon: Users,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Active Services",
    value: "08",
    change: "All available",
    icon: CheckCircle2,
    color: "bg-green-50 text-green-600",
  },
];

  const statusStyle = {
  Upcoming: "bg-blue-100 text-blue-800",
  Confirmed: "bg-indigo-100 text-indigo-800",
  Pending: "bg-amber-100 text-amber-800",
  Completed: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f4ef] text-[#193c32]">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-60 shrink-0 flex-col bg-[#193c32] text-white transition-transform duration-300 md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              Urban<span className="text-[#c6a86b]">Care</span>
            </h1>
            <p className="mt-1 text-[10px] uppercase tracking-[3px] text-white/50">
              Admin Panel
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1 text-white/70 hover:bg-white/10 md:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 pt-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[2px] text-white/40">
            Main Menu
          </p>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = activePage === item.name;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setActivePage(item.name);
                    setSidebarOpen(false);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                    active
                      ? "bg-[#c6a86b] font-semibold text-[#193c32]"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  <span>{item.name}</span>

                  {item.name === "Bookings" && (
                    <span className="ml-auto rounded-full bg-white/15 px-2 py-0.5 text-[10px]">
                      {totalBookings}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c6a86b] text-sm font-bold text-[#193c32]">
                A
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Admin User</p>
                <p className="text-[11px] text-white/50">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main dashboard */}
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-[1600px] p-4 md:p-5 lg:p-6">
          {/* Header */}
          <header className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="rounded-lg border border-gray-200 bg-white p-2 md:hidden"
                aria-label="Open menu"
              >
                <Menu size={19} />
              </button>

              <div>
                <p className="text-[11px] font-medium text-gray-500">
                  Pages / {activePage}
                </p>
                <h2 className="mt-0.5 text-xl font-bold md:text-2xl">
                  {activePage}
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Welcome back! Here&apos;s your business overview.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search"
                className="hidden rounded-xl border border-gray-200 bg-white p-2.5 transition hover:bg-gray-50 sm:block"
              >
                <Search size={17} />
              </button>

              <button
                type="button"
                aria-label="Notifications"
                className="relative rounded-xl border border-gray-200 bg-white p-2.5 transition hover:bg-gray-50"
              >
                <Bell size={17} />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500" />
              </button>

              <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-[#193c32] text-sm font-bold text-white sm:flex">
                A
              </div>
            </div>
          </header>

          {/* Stats cards */}
          <section className="mb-4 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className={`rounded-lg p-2 ${stat.color}`}>
                      <Icon size={17} />
                    </div>

                    <span className="hidden rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500 sm:block">
                      {stat.change}
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <div className="mt-1 flex items-end justify-between gap-1">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <TrendingUp
                      size={15}
                      className="mb-1 text-green-600"
                    />
                  </div>
                </div>
              );
            })}
          </section>

          {/* Compact weekly graph */}
          <section className="mb-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold">
                  Booking Analytics
                </h3>
                <p className="mt-1 text-[11px] text-gray-500">
                  Weekly booking activity
                </p>
              </div>

              <span className="rounded-lg bg-[#f5f4ef] px-3 py-1.5 text-[11px] font-semibold text-[#193c32]">
                This Week
              </span>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold">172</h4>
                <p className="text-[11px] text-gray-500">
                  Total weekly bookings
                </p>
              </div>

              <span className="rounded-lg bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700">
                <TrendingUp className="mr-1 inline" size={12} />
                Weekly overview
              </span>
            </div>

            <div className="mt-3 flex h-28 items-end justify-around gap-2 border-b border-l border-gray-100 px-2">
              {weeklyBookings.map((item) => (
                <div
                  key={item.day}
                  className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1"
                >
                  <span className="text-[9px] font-medium text-gray-500">
                    {item.value}
                  </span>

                  <div
                    className={`w-full max-w-8 rounded-t-md transition-colors ${
                      item.day === "Sat"
                        ? "bg-[#c6a86b]"
                        : "bg-[#315547] hover:bg-[#c6a86b]"
                    }`}
                    style={{
                      height: `${(item.value / 35) * 65}%`,
                    }}
                  />

                  <span className="pb-1 text-[9px] text-gray-500">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Compact recent bookings */}
          <section className="mb-4 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-3 p-4">
              <div>
                <h3 className="text-base font-bold">Recent Bookings</h3>
                <p className="mt-1 text-[11px] text-gray-500">
                  Latest customer requests
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActivePage("Bookings")}
                className="rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-semibold transition hover:bg-[#f5f4ef]"
              >
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-150 text-left text-[11px]">
                <thead className="bg-[#f5f4ef] text-gray-500">
                  <tr>
                    {[
                      "Booking ID",
                      "Customer",
                      "Service",
                      "Date",
                      "Price",
                      "Status",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="whitespace-nowrap px-3 py-2.5 font-semibold"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

               <tbody>
  {loading ? (
    <tr>
      <td colSpan="6" className="px-3 py-6 text-center">
        Loading bookings...
      </td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan="6" className="px-3 py-6 text-center text-red-500">
        {error}
      </td>
    </tr>
  ) : bookings.length === 0 ? (
    <tr>
      <td colSpan="6" className="px-3 py-6 text-center">
        No bookings found.
      </td>
    </tr>
  ) : (
    [...bookings]
  .sort(
    (a, b) =>
      Number(b.bookingId?.replace("UC", "") || b.id) -
      Number(a.bookingId?.replace("UC", "") || a.id)
  )
  .slice(0, 5)
  .map((booking) => (
      <tr key={booking.id}>
        <td className="px-3 py-2.5">
          {booking.bookingId || booking.id}
        </td>
        <td className="px-3 py-2.5">
          {booking.customer || "—"}
        </td>
        <td className="px-3 py-2.5">
          {booking.service || "—"}
        </td>
        <td className="px-3 py-2.5">
          {booking.date || "—"}
        </td>
        <td className="px-3 py-2.5">
          {booking.price != null ? `₹${booking.price}` : "—"}
        </td>
        
<td className="px-3 py-2.5">
  <span
    className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold ${
      statusStyle[booking.status] || "bg-gray-100 text-gray-600"
    }`}
  >
    {booking.status || "Unknown"}
  </span>
</td>

      </tr>
    ))
  )}
</tbody>
              </table>
            </div>
          </section>

          {/* Customers and professionals overview */}
          <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-purple-50 p-2.5 text-purple-600">
                  <Users size={19} />
                </div>
             <p className="text-xl font-bold">{totalCustomer}</p>
                <div>
                  <h3 className="text-sm font-bold">Customers Overview</h3>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Registered customers
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">86</p>
                <p className="text-[10px] text-green-600">+8.2%</p>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-green-50 p-2.5 text-green-600">
                  <UserRoundCheck size={19} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Professionals Overview
                  </h3>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Active professionals
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold">24</p>
                <p className="text-[10px] text-green-600">Active</p>
              </div>
            </div>
          </section>

          <p className="mt-4 text-center text-[10px] text-gray-400">
            © 2026 UrbanCare Admin Dashboard
          </p>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;