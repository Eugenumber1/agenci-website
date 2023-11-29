import PropTypes from "prop-types";
import React from "react";

//TODO check text1 and text, that is not how it is supposed to be
export const Buttons = ({ type, text, text1, className, onClick }) => {
  return (
    <div className={`buttons ${type} ${className}`}>
      <div className="button-primary" onClick={onClick}>
        {type === "primary" && <>{text}</>}

        {type === "secondary" && <>{text1}</>}
      </div>
    </div>
  );
};

Buttons.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
};
