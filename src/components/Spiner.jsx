import React from "react";

const Spiner = () => {
    // va a hacer los rings de carga con css
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};
export default Spiner;