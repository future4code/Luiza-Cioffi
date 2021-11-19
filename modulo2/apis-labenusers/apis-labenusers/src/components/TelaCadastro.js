import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {

    state = {
        nome: "",
        email: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        }).then((resposta) => {
            alert("Usuário cadastrado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((erro) => {
            alert(erro.response.data.message)
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para a Lista de usuários</button>
                <p>Cadastro</p>
                <input 
                placeholder={"Digite seu nome"}
                value={this.state.nome}
                onChange={this.handleNome}
                />
                <input 
                placeholder={"Digite seu e-mail"}
                value={this.state.email}
                onChange={this.handleEmail}
                />
                <button onClick={this.fazerCadastro}>Enviar</button>
            </div>
        )
    }
} 