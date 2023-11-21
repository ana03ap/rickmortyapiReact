import { createContext, useEffect, useState } from "react";
 // se importa para poder hacer peticiones de http como get 
// creo primero el contexto
import RickApi from "../api/RickApi"
// useefect es para que la funcion que se pase de parametro se ejecute despues de que se renderice un componente 

import useCountere from "../hook/useCountere"
export const AppContext = createContext()
export const AppContextProvider = ({children}) => {
  
  //const [isMobileDevice, setIsMobile] = useState(false);
  const [data, setData] = useState([]);// creamos un estado para los datos
  const { counter, decrease, increase } = useCountere();
  const[search, setSearch]= useState("")
  const[status, setStatus]= useState("")
  const[gender, setGender]= useState("")
  const[species, setSpecies]= useState("")
  useEffect(() => {
    // funcion para poder hacer el fetch 
    //setIsMobile(isMobile);
    GetData();

     
  }, [counter,search,status,gender,species])// como esta lista esta vacias, esta funcion solo se va a ejecutar una vez , cuado agrego cosas la funcion de adentro se va a cambiar cuando esas cosas que agregué se rendericen 


// vamos a hacer esta funcion de maner asyncronica 
  const GetData = async () => {
    try{
      const {data:{results}}= await RickApi.get(`?page=${counter}&name=${search}&status=${status}&gender=${gender}&species=${species}`);// esperar que se devuelva el get )
        console.log(results)
      setData(results)
    }catch(error){
      console.error("error fetching")
    }
     
  };


  const setSearchParam = (value) => {
    setSearch(value);
  };

  const setStatusParam = (value) => {
    setStatus(value);
  };

  const setGenderParam = (value) => {
    setGender(value);
  };

  const setSpeciesParam = (value) => {
    setSpecies(value);
  };


  // value son los valores que quiero pasar en el contexto 
  return (
    <AppContext.Provider
      value={{
        data,
        GetData,
        increase,
        decrease,
        counter,
        setSearchParam,
        setStatusParam,
        setGenderParam,
        setSpeciesParam,
      }}
    >
      {children}
    </AppContext.Provider>
  );


}