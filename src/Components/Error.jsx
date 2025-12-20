import React from "react";
import { VscError } from "react-icons/vsc";

const Error = ({ message }) => {
  return (
    <div role="alert" className="alert alert-error alert-soft">
      <span className="flex items-center gap-2">
        <VscError />
        {message}
      </span>
    </div>
  );
};

export default Error;
