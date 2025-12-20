import Loading from "./Loading";
import Error from "./Error";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { CgMoreO } from "react-icons/cg";
import { Search, X } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = ({ button }) => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetch("/servicesList.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(services.map((service) => service.category)),
  ];

  // Filter and sort services
  useEffect(() => {
    let result = services;

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        (service) =>
          service.serviceName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          service.providerName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      result = result.filter(
        (service) => service.category === selectedCategory
      );
    }

    // Apply sorting
    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "slots") {
      result = [...result].sort((a, b) => b.slotsAvailable - a.slotsAvailable);
    }

    setFilteredServices(result);
  }, [searchTerm, selectedCategory, sortBy, services]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("default");
  };

  const hasActiveFilters =
    searchTerm || selectedCategory !== "All" || sortBy !== "default";

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h1 className={button ? "mt-6 mb-6" : "mb-6"}>
        Our <span className="text-accent">Services</span>
      </h1>
      {!button && (
        <p className="mb-6 px-3 text-md lg:text-xl lg:text-center">
          Explore our wide range of services designed to keep your furry friends
          happy and healthy even in the winter.
        </p>
      )}

      {!button && (
        <>
          <div className="my-6 flex items-center flex-col lg:flex-row gap-2 lg:gap-6 justify-center lg:px-24">
            <div className="relative lg:w-1/3">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 text-gray-400 z-10" />
              <input
                type="text"
                placeholder="Search services by name, description, or provider..."
                className="w-full input pl-12 pr-4 py-3 border-2 focus:border-blue-400 focus:outline-none transition-colors duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 lg:w-1/3">
              <select
                className="select select-bordered w-full"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <select
              className="select select-bordered lg:w-1/3"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sort By: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="slots">Slots: Most Available</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="btn btn-primary items-center gap-2"
              >
                <X className="h-4" />
                Clear Filters
              </button>
            )}
          </div>
          <p className="text-center mb-6 font-semibold">
            Showing {filteredServices.length} of {services.length} services
          </p>
        </>
      )}

      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard service={service} key={service.serviceId} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-2xl font-bold text-gray-400 mb-2">
            No services found
          </p>
          <p className="text-gray-500 mb-4">
            Try adjusting your search or filters
          </p>
          <button onClick={clearFilters} className="btn btn-primary">
            Clear All Filters
          </button>
        </div>
      )}

      {button && (
        <div className="py-6 text-center">
          <NavLink to="/services" className="btn btn-secondary text-white">
            <CgMoreO />
            More Services
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Services;
