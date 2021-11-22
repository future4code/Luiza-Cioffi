import React from "react";
import styled from "styled-components";
import axios from "axios";
import Home from "./Components/Home/Home";
import AbrirPlaylist from "./Components/AbrirPlaylist/AbrirPlaylist"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"



export default class App extends React.Component {

  state = {
    telaAtual: "home"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "home":
        return <Home irAbrirPlaylist={this.irAbrirPlaylist}/>
      case "abrirPlaylist":
        return <AbrirPlaylist irHome={this.irHome}/>
      default:
        return "Erro, página não encontrada!"
    }
  }



  irHome = () => {
    this.setState({telaAtual: "home"})
  }
  irAbrirPlaylist = () => {
    this.setState({telaAtual: "abrirPlaylist"})
  }

  render(){
    return (
      <div>
        <Header 
          // paginaHome={this.state.telaAtual}
          // paginaMusica
        />
        {this.escolheTela()}
        <Footer/>
      </div>
    )
  }
}
