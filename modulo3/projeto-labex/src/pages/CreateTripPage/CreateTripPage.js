import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Formulário para o administrador criar uma nova viagem

function CreatTripPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return (
    <div>
      <h1>CreatTripPage</h1>
      <p>Formulário para o administrador criar uma nova viagem</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
  
export default CreatTripPage;