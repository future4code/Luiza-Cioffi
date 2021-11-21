import React from "react";
import Home from "./Components/Home";
import TelaDasPlaylists from "./Components/TelaDasPlaylists";
import TelaDetalAdic from "./Components/TelaDetalAdic";

import TelaOuvirMusica from "./Components/TelaOuvirMusica";


export default class App extends React.Component {
  state = {
    telaAtual: "home"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "home":
        return <Home irTelaDasPlaylists={this.irTelaDasPlaylists} irTelaOuvirMusica={this.irTelaOuvirMusica}/>
      case "TelaDasPlaylists":
        return <TelaDasPlaylists irHome={this.irHome} irTelaDetalAdic={this.irTelaDetalAdic} irTelaOuvirMusica={this.irTelaOuvirMusica} />
      case "telaDetalAdic":
        return <TelaDetalAdic irHome={this.irHome} irTelaDasPlaylists={this.irTelaDasPlaylists}/>
      case "telaOuvirMusica":
        return <TelaOuvirMusica irHome={this.irHome} irTelaDasPlaylists={this.irTelaDasPlaylists}/>
      default:
        return <div>Ops! Parece que tivemos um imprevisto... Tente novamente mais tarde!</div>
    }
  }

  irHome = () => {
    this.setState({telaAtual: "home"})
  }

  irTelaDasPlaylists = () => {
    this.setState({telaAtual: "TelaDasPlaylists"})
  }

  irTelaDetalAdic = () => {
    this.setState({telaAtual: "telaDetalAdic"})
  }

  irTelaOuvirMusica = () => {
    this.setState({telaAtual: "telaOuvirMusica"})
  }

  
  render(){
    return (
      <div>
        {this.escolheTela()}
      </div>
    );
  }
}