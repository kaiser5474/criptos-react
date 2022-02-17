import React from "react";
import styled from "styled-components";
import { formatearNumero, formatearFecha } from "../helpers";

const DIV = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
  text-align: right;
  margin-right: 5px;
`;

const Resultado = ({ resultadoMoneda, moneda }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultadoMoneda;
  //console.log(moneda);
  return (
    <DIV>
      <p>
        El Precio es de: <span>{formatearNumero(Number(PRICE), moneda)}</span>
      </p>
      <p>
        Precio más alto del día: <span>{HIGHDAY}</span>
      </p>
      <p>
        Precio más bajo del día: <span>{LOWDAY}</span>
      </p>
      <p>
        Variación ultimas 24 horas:{" "}
        <span>{formatearNumero(CHANGEPCT24HOUR)}</span>
      </p>
      <p>
        Última actualización: <span>{formatearFecha(LASTUPDATE)}</span>
      </p>
    </DIV>
  );
};

export default Resultado;
