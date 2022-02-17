import React from "react";
import styled from "styled-components";
import { formatearNumero, formatearFecha } from "../helpers";

const Contenedor = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Resultado = ({ resultadoMoneda }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultadoMoneda;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          {/* El Precio es de: <span>{PRICE}</span> */}
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
