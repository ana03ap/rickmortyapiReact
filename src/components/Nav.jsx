import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';// importa el contexto 
import SearchComponent from './SearchComponent';// importa el componente para setear el components

const Nav = () => {
  const { GetData, setGenderParam } = useContext(AppContext);// desestructurar lo que quiero del context

  // funcion para handler el clinck cuando 
  const handleGenderClick = (gender) => {
    setGenderParam(gender);// seteto el gender por el que oprimí 
    GetData();//vuelvo a traer la info con los parametros, por defecto pa tiene los parametros en appconetxt 
  };

  return (
    <>
      <nav>
        <h1>Api Rick</h1>
        <ul>
          <li>
            <ul>
              Generos
              <li>
                <button onClick={() => handleGenderClick('Male')}>Male</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('Female')}>Female</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('genderless')}>genderless</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('unknown')}>unknown</button>
              </li>
              <li>
                <button onClick={() => handleGenderClick('')}>Reset</button>
              </li>
              {/* Agrega más botones según tus necesidades */}
            </ul>
          </li>
          <li>
            <SearchComponent />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;