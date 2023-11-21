import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SearchComponent = () => {
  const { setSearchParam } = useContext(AppContext);

  const handleInputChange = ({target:{value}}) => {// el target lo desestructuro y saco el value 
    setSearchParam(value);// seteo el valor de searc que lo traigo del context 
  };

  return (
    <input type="text" onChange={handleInputChange} />// cuando se escriba algo en este texto, se captura en onchange y se ejectura esa function que esta en parentesis 
  );
};

export default SearchComponent