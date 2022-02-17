import { useEffect, useState } from "react";
import styled from "styled-components";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

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
  margin-top: 20px;

  &:hover {
    background-color: #7b7ffd;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  //hooks
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu Moneda", monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elije tu criptomoneda",
    criptos
  );
  const [mensaje, setMensaje] = useState("");

  //funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    if (moneda === "" || criptomoneda === "") {
      setMensaje("Los campos son obligatorios");
    } else {
      setMensaje("");
    }
    setMonedas({
      moneda,
      criptomoneda,
    });
    setTimeout(() => {
      setMensaje("");
    }, 3000);
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arrayCriptos = resultado.Data.map((cripto) => {
        const cryptomonedas = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return cryptomonedas;
      });
      setCriptos(arrayCriptos);
    };
    consultarAPI();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {mensaje && <Error mensaje={mensaje} />}
      <SelectMonedas />
      <SelectCriptomoneda />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
