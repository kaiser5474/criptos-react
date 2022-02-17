import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
  text-align: right;
  margin-right: 5px;
`;

const Resultado = ({ resultadoMoneda }) => {
  return (
    <DIV>
      <label>Precio: {resultadoMoneda.PRICE}</label>
    </DIV>
  );
};

export default Resultado;
