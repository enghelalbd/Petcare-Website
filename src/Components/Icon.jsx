import React from "react";
import icon from "../assets/logo.png";

const Icon = ({ classes }) => {
  return (
    <>
      <img src={icon} alt="logo" className={classes} />
    </>
  );
};

export default Icon;
