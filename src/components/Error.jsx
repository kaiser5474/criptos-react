import React from "react";
import styled from "styled-components";

const Div = styled.div`
  color: white;
  font-family: "Lato", sans-serif;
  font-size: 22px;
  width: 95%;
  font-weight: 700;
  background-color: red;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
`;

const Error = ({ mensaje }) => {
  return <Div>{mensaje}</Div>;
};

export default Error;
