import { PawPrint } from "lucide-react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { HiMiniTicket } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";
import { PiFlagBannerFill } from "react-icons/pi";
import { NavLink } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:animate__animated hover:animate__pulse">
      <Fade>
        <figure className="w-full overflow-hidden ">
          <img
            src={service.image}
            alt={service.serviceName}
            className="w-full h-65 object-cover hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </figure>
        <div className="card-body py-1 px-4">
          <h2 className="card-title truncate">{service.serviceName}</h2>
          <div className="font-semibold flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <PiFlagBannerFill className="w-5 h-5 text-base-content/70" />
              {service.providerName}{" "}
            </div>
            <div className="badge badge-sm badge-secondary">
              {service.category}
            </div>
          </div>
          <p>{service.description}</p>
          <div className="card-actions justify-between gap-4">
            <div className="px-2 py-1 rounded-xl bg-blue-300 text-blue-900  hidden lg:flex items-center gap-1">
              <HiMiniTicket />
              <div>Slots:</div>
              <div>{service.slotsAvailable}</div>
            </div>
            <div className="px-2 py-1 rounded-xl bg-amber-300 text-amber-900 flex items-center gap-1">
              <MdReviews />
              <div>Rating:</div>
              {service.rating}
            </div>
            <div className="px-2 py-1 rounded-xl bg-green-300 text-green-900 flex items-center gap-1">
              <BiSolidBadgeDollar />
              <div>Charge:</div>${service.price}
            </div>
          </div>
        </div>
        <div className="text-center mx-3 mt-1 mb-4">
          <NavLink
            className="btn btn-primary w-full text-white"
            to={`/services/${service.serviceId}`}
          >
            <PawPrint size={18} />
            View Details
          </NavLink>
        </div>
      </Fade>
    </div>
  );
};

export default ServiceCard;
