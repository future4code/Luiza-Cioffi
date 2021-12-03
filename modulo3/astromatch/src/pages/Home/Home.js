import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

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
      alert("Ops... Algo deu errado! Mas tente novamente, pois o amor sempre vence no final!")
    })
  }


  render(){
    console.log(this.state.person)
    return (
      <div>
        <p>Home</p>
        <h1>{this.state.person.name}</h1>
        <h2>{this.state.person.age}</h2>
        <p>{this.state.person.bio}</p>
        <img src={this.state.person.photo} alt={`imagem de ${this.state.person.name}`} />
      </div>
    );
  }
  
}
