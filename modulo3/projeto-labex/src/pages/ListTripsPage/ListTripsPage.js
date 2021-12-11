import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";


//Para vermos todas as viagens

function ListTripsPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToApplicationFormPage = () => {
    history.push("/trips/application")
  }

  return (
    <div>
      <Header/>
      <h1>ListTripsPage</h1>
      <p>Para vermos todas as viagens</p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Ir para Formulário</button>
    </div>
  );
}
  
  export default ListTripsPage;