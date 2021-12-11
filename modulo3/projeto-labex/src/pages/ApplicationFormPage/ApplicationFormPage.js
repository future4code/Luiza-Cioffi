import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

function ApplicationFormPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <p>Para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
  
export default ApplicationFormPage;