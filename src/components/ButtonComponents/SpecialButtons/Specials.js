import React, {useState} from "react";
import {specials} from '../../../data';
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [commands] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {commands.map((command, idx) => {
        return <SpecialButton key={idx} command={command}/>
      })}
    </div>
  );
};

export default Specials;
