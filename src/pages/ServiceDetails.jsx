import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { BiSolidCategory, BiSolidBadgeDollar } from "react-icons/bi";
import { PiFlagBannerFill } from "react-icons/pi";
import { HiMiniTicket } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Snowflake, Star } from "lucide-react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ErrorImage from "../components/ErrorImage";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const ServiceDetails = () => {
  const id = useParams().id;
  const { user } = useContext(AuthContext);

  const [serviceDetails, setServiceDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      return toast.error("You must be logged in to book!");
    }
    setFormData({ name: "", email: "" });
    toast.success("Booking Successful");
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  useEffect(() => {
    fetch("/servicesList.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setServiceDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("An unknown error occurred", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const service = serviceDetails.find((service) => service.serviceId == id);

  if (service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <title>Service Details - WarmPaws</title>

        <div className="text-center mb-8">
          <h1 className="">
            <span className="text-accent">Service</span> Details
          </h1>
        </div>

        <div className="relativerounded-3xl shadow-2xl border border-base-content/50 overflow-hidden rounded-xl bg-base-100">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-10">
            <div className="relative group">
              <Fade className="absolute inset-0 rounded-2xl  group-hover:opacity-30 transition-opacity duration-500"></Fade>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl border-4 border-base-content/50">
                <img
                  src={service.image}
                  alt={service.serviceName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">
                {service.serviceName}
              </h2>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BiSolidCategory className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium">Category:</span>
                  <span className="font-bold text-blue-600">
                    {service.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <PiFlagBannerFill className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-medium">Provider:</span>
                  <span className="font-bold text-amber-600">
                    {service.providerName}
                  </span>
                </div>
              </div>

              <p className="text-lg leading-relaxed p-4 rounded-xl border border-slate-200/70">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border-2 border-emerald-200 text-center hover:scale-105 transition-transform duration-300">
                  <BiSolidBadgeDollar className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm text-emerald-700 font-medium">Price</p>
                  <p className="text-2xl font-black text-emerald-900">
                    ${service.price}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border-2 border-blue-200 text-center hover:scale-105 transition-transform duration-300">
                  <HiMiniTicket className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-blue-700 font-medium">
                    Slots Available
                  </p>
                  <p className="text-2xl font-black text-blue-900">
                    {service.slotsAvailable}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-amber-200 text-center hover:scale-105 transition-transform duration-300">
                  <Star className="w-8 h-8 text-amber-600 mx-auto mb-2 fill-amber-600" />
                  <p className="text-sm text-amber-700 font-medium">Rating</p>
                  <p className="text-2xl font-black text-amber-900">
                    {service.rating}/5
                  </p>
                </div>
              </div>

              <div className="space-y-4 bg-white/70 p-6 rounded-2xl border-2 border-base-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <FaRegCalendarCheck className="text-blue-600" />
                  Book This Service
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full bg-white"
                    value={formData.name}
                    disabled={!user ? true : false}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full bg-white"
                    value={formData.email}
                    disabled={!user ? true : false}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <button
                  className="btn w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold"
                  onClick={handleSubmit}
                >
                  <FaRegCalendarCheck className="w-5 h-5" />
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center">
          <ErrorImage />
        </div>
        <h2 className="text-3xl md:text-4xl font-black">
          <span className="text-accent">OOPS!</span> Service Not Found
        </h2>
        <p className="text-lg">
          The service you are looking for cannot be found. But don't worry, you
          can always go back to the{" "}
          <Link
            to="/services"
            className="text-blue-600 font-bold hover:text-cyan-600 transition-colors duration-300"
          >
            Services Page
          </Link>{" "}
          to find more services.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
