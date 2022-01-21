import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";


//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

function AdminHomePage() {

  const history = useHistory()
  
  const goToTripDetailPage = (id) => {
    history.push(`/admin/trips/${id}`)
  }

  const goToCreateTripPage = () => {
    history.push("/admin/trips/create")
  }

  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      <h1>AdminHomePage</h1>
      <p>Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas</p>
      <button onClick={goToTripDetailPage}>Ir para TripsPage</button>
      <button onClick={goToCreateTripPage}>Ir para Criar viagem</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
  
export default AdminHomePage;