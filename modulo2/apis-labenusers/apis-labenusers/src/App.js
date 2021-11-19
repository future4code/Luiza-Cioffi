import React from "react";
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuarios from "./components/TelaListaUsuarios";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastre"
  }

  choseScren = () => {
    switch (this.state.telaAtual) {
      case "cadastre":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "list":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Ops... Something went wrong! Please, try again latter.</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastre"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "list"})
  }

  render(){
    return (
      <div>
        {this.choseScren()}
      </div>
    )
  }
}