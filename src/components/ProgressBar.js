import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 13,
    width: "35vw",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    border: "2px solid gray",
    display: "block",
    marginLeft: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "whitesmoke",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
