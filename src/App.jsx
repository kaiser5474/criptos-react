import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import styled from "styled-components";
import ImagenCripto from "./img/imagen-criptos.png";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin: 80px auto 50px auto;
  font-size: 34px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [monedas, setMonedas] = useState({});
  const [resultadoMoneda, setResultadoMoneda] = useState({});

  const { moneda, criptomoneda } = monedas;
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      const consultarAPI = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const arrayCriptos = resultado.RAW[criptomoneda][moneda];
        setResultadoMoneda(arrayCriptos);
        //console.log(arrayCriptos);
        //.map((cripto) => {
        //   // const cryptomonedas = {
        //   //   id: cripto.CoinInfo.Name,
        //   //   nombre: cripto.CoinInfo.FullName,
        //   // };
        //   //return cryptomonedas;
        //
        // });
        //setCriptos(arrayCriptos);
      };
      consultarAPI();
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagenes criptomonedas" />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMonedas={setMonedas} />
        <Resultado resultadoMoneda={resultadoMoneda} />
      </div>
    </Contenedor>
  );
}

export default App;
