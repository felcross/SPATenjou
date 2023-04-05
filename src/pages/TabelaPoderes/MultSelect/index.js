import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.css";

const animatedComponents = makeAnimated();

const options = [
  { value: 10, label: "Energia vital 10MP" },
  { value: 8, label: "Energia Mana 8MP" },
  { value: 5, label: "Miasma  5MP" },
];
const options2 = [
  { value: 10, label: "AGUA 10MP" },
  { value: 10, label: "FOGO  10MP" },
  { value: 10, label:  "VENTO 10MP" },
  { value: 5, label: "TERRA 10MP" },
  { value: 5, label: "GELO 10MP" },
  { value: 5, label: "LUZ 10MP" },
  { value: 5, label: "TREVAS 07MP" },
 
];

export default function MultSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  


  return (
    <>
      <Select
        defaultValue={[]}
        components={animatedComponents}
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select"
        isClearable={false}
        isSearchable={false}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />
        <Select
        defaultValue={[]}
        components={animatedComponents}
        options={options2}
        onChange={(item) => setSelectedOptions2(item)}
        className="select"
        isClearable={false}
        isSearchable={false}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />
       
     
    <h2>Seu Gasto de MP foi:</h2>
   <h3>{selectedOptions.value + selectedOptions2.value}</h3>
    </>
  );
};