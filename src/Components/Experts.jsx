import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import DoctorCard from "./DoctorCard";

const Experts = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/expertsList.json")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  if (doctors.length === 0) return null;

  return (
    <div className="mt-2 md:mt-4">
      <h1 className="mb-6 md:mb-6">
        Meet Our <span className="text-accent">Vet Experts</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
