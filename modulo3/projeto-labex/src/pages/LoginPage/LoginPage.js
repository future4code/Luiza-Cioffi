import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

//Para fazermos login como administrador

function LoginPage() {

  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  const goToAdminHomePage = () => {
    history.push("/admin/trips/list")
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Para fazermos login como administrador</p>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToAdminHomePage}>Ir para AdmPage</button>
    </div>
    );
  }
  
  export default LoginPage;