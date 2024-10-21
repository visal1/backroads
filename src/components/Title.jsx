import React from "react";

const Title = (props) => {
  return (
    <div className="section-title">
      <h2>
        {props.title} <span>{props.subtitle}</span>
      </h2>
    </div>
  );
};

export default Title;
