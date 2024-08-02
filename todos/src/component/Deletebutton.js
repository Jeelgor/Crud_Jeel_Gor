import React from "react";

const Deletebutton = () => {
  const deletebtn = () => {
    console.log("clicked")
  };
  return (
    <>
      <div>
        <button onClick={deletebtn}>Delete</button>
      </div>
    </>
  );
};
export default Deletebutton;
