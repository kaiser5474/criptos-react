import React from "react";
import styled from "styled-components";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  color: white;
  background-color: #9497ff;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  transition: 0.3s ease;

  &:hover {
    background-color: #7b7ffd;
    cursor: pointer;
  }
`;

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu Moneda", monedas);

  return (
    <form>
      <SelectMonedas />
      <InputSubmit type="submit" value="Cotizar" />
      {moneda}
    </form>
  );
};

export default Formulario;
