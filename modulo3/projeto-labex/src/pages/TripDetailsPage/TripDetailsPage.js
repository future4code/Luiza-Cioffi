import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

//Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

function TripDetailPage() {
  
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }
  
  const pathParams = useParams()

  const id = pathParams.id
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1Za2FSeXhVRUkwZ2pDb1Q2WW83IiwiZW1haWwiOiJ1c3VhcmlvQGdtYWlsLmNvbS5iciIsImlhdCI6MTYzOTMyMDg3N30.XI7s8AEz9zk-I4L2yd38-m76LsjoZHTCdSbKNYrZUmU"

  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiza-cioffi-carver/trip/${id}`, {
    headers: {
      "auth": token
    } 
  })
    .then((res) => {
	    this.setState({ people: res.data }) 
    })
    .catch((err) => {
	    console.log(err.response.data)
    })

  return (
    <div>
      <h1>TripDetailPage</h1>

      <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
}
  
export default TripDetailPage;