import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { HeaderContainer } from "../../containers/HeaderContainer";
import { GoToMatchesButton, ProfilePic, DislikeButton, LikeButton } from "./styledHome";
import { FooterContainer } from "../../containers/FooterContainer";

export default class Home extends React.Component{

  state = {
    person: {}
  }

  componentDidMount(){
    this.getPerson()
  }

  getPerson = () => {
    axios.get(`${BASE_URL}person`)
    .then((resp) => {
      this.setState({person: resp.data.profile})
    })
    .catch((err) =>{
      alert("Ops... Algo deu errado! Tente novamente!")
    })
  }

  postMatch = () => {
    const body = {
      id: `${this.state.person.id}`, 
	    choice: true
    }
    axios.post(`${BASE_URL}choose-person`, body, {
      headers: { "Content-Type": "application/json" }
    }).then((resp) => {
      this.getPerson()
    }).catch((err) =>{
      this.getPerson()
    })
  }
  
  render(){
    
    return (
      <div>
        <HeaderContainer>
          <p>ASTROMATCH</p>
          <GoToMatchesButton onClick={this.props.goToMatches}>🔥</GoToMatchesButton>
        </HeaderContainer>
        <ProfilePic src={this.state.person.photo} alt={`imagem de ${this.state.person.name}`} />
        <h1>{this.state.person.name}</h1>
        <h2>{this.state.person.age}</h2>
        <p>{this.state.person.bio}</p>
        <FooterContainer>
          <DislikeButton onClick={this.getPerson}>👎</DislikeButton>
          <LikeButton onClick={this.postMatch}>👍</LikeButton>
        </FooterContainer>
      </div>
    );
  }
  
}
