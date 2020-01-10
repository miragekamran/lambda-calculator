import React from "react";

const SpecialButton = (props) => {
  console.log(props, 'special buttons')
  return (
    <>
      <button>{props.command}</button>
    </>
  );
};

export default SpecialButton;