import React from "react";

const Updatebutton = () => {
  const updatebtn = () => {
    console.log("clicked");
  };
  return (
    <>
      <div>
        <button onClick={updatebtn}>Update</button>
      </div>
    </>
  );
};
export default Updatebutton;
