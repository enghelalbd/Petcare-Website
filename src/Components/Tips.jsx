import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { MdTipsAndUpdates } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Tips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/winterTips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  if (tips.length === 0) return null;

  return (
    <div className="mt-6">
      <h1 className="font-semibold text-4xl md:text-5xl text-center mb-6">
        Winter Care <span className="text-accent">Tips</span>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 mb-2">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="p-4 shadow-sm hover:shadow-md rounded-xl bg-gradient-to-r from-sky-200 to-blue-100 backdrop-blur-sm w-full text-primary"
          >
            <Fade>
              <div className="font-semibold flex items-center gap-2 mb-2 text-lg">
                <MdTipsAndUpdates />
                {tip.title}
              </div>
              <div>{tip.description}</div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
