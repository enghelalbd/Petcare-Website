import React from "react";

const DoctorCard = ({ doctor }) => {
  return (
    <div
      className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:animate__animated hover:animate__pulse"
      key={doctor.id}
    >
      <figure className="relative w-full overflow-hidden mb-1">
        <img
          src={doctor.image}
          alt={doctor.doctorName}
          className="w-full h-95 object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </figure>
      <div className="card-body py-1.5">
        <h2 className="card-title text-2xl">{doctor.name}</h2>
        <div className="font-semibold text-sky-600">
          {doctor.specialty} ({doctor.experience})
        </div>
        <p className="mb-2">{doctor.bio}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
