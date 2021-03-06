import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import styled from "styled-components";
import ImagenCripto from "./img/imagen-criptos.png";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

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
  const [cargando, setCargando] = useState(false);

  const { moneda, criptomoneda } = monedas;
  useEffect(() => {
    if (moneda && criptomoneda) {
      const consultarAPI = async () => {
        setCargando(true);
        setResultadoMoneda({});
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        /*aqui estoy usando los corchetes porque es la forma de acceder dinamicamente en el objeto, 
        cuando tiene parametros que varian en dependencia de la consulta */
        const arrayCriptos = resultado.DISPLAY[criptomoneda][moneda];
        setResultadoMoneda(arrayCriptos);
        setCargando(false);
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
        {cargando && <Spinner />}
        {resultadoMoneda.PRICE && (
          <Resultado resultadoMoneda={resultadoMoneda} />
        )}
      </div>
    </Contenedor>
  );
}

export default App;
