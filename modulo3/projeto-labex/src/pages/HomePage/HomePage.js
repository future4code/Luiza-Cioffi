import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

//Para o usuário escolher entre Área Administrativa e Lista de Viagens

function HomePage() {

  const history = useHistory()

  const goToListTripsPage = () => {
    history.push("/trips/list")
  }

  const goToLoginPage = () => {
    history.push("/login")
  }

  return (
    <div>
      <Header />
      <h1>HomePage</h1>
      <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>

      <button onClick={goToListTripsPage}>Ver lista de Viagens</button>
      <button onClick={goToLoginPage}>Ir para área restrita</button>
    </div>
  );
}
  
export default HomePage;
  