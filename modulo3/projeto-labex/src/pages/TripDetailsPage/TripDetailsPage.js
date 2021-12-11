import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

function TripDetailPage() {
  
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  
  return (
    <div>
      <h1>TripDetailPage</h1>
      <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
  
export default TripDetailPage;