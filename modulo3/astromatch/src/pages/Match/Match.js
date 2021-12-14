import React from "react";
import styled from "styled-components";
import axios from "axios";
import { HeaderContainer } from "../../containers/HeaderContainer";
import { BASE_URL } from "../../constants/urls";
import { FooterContainer } from "../../containers/FooterContainer";
import { BackButton, CleanButton, List, ProfilePhoto, ProfileName } from "./styledMatch";

export default class Match extends React.Component{

  state = {
    matches: []
  }
  componentDidMount(){
    this.getMatches()
  }

  getMatches = () => {
    axios.get(`${BASE_URL}matches`)
    .then((resp) => {
      this.setState({matches: resp.data.matches})
      console.log(resp);
    })
    .catch((err) =>{
      alert("Ops... Algo deu errado! Tente novamente.")
    })
  }

  clearMatches = () => {
    axios.put(`${BASE_URL}clear`, {
      headers: { "Content-Type": "application/json" }
    }).then((resp) => {
      this.getMatches()
    }).catch((err) =>{
      alert("Ops... Algo deu errado! Tente novamente.")
    })
  }

  render(){

    const matchesList = this.state.matches.map((matches) => {
      return <ul key={matches.id}>
          <List>
            <ProfilePhoto src={matches.photo}/>
            <ProfileName>{matches.name}</ProfileName>
          </List>
        </ul>
    })

    return (
      <div>
        <HeaderContainer>
          <p>ASTROMATCH</p>
        </HeaderContainer>
        {matchesList}
        <FooterContainer>
          <BackButton onClick={this.props.goToHome}>⬅ Voltar</BackButton>
          <CleanButton onClick={this.clearMatches}> ❌ Limpar</CleanButton>
        </FooterContainer>
      </div>
    );
  }
  
}


