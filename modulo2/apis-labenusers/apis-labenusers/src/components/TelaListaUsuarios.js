import React from "react";
import axios from "axios";
import styled from "styled-components"

const CardUsuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 200px;
    display: flex;
    justify-content: space-between;
`

export default class TelaListaUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }
 
    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resposta) => {
            this.setState({usuarios: resposta.data})
        })
        .catch((erro) => {
            alert("Ops... Something went wrong! Please, try again latter.")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

        axios.delete(url, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resposta) => {
            alert("Pessoa usuária deletada com sucesso!")
            this.pegarUsuarios()
        })

        .catch((erro) => {
            alert(erro.response.data.message)
        })

    }

    render () {
        const listaDeUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuarios key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>X</button>
            </CardUsuarios>
            )
        })

        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <p>Lista de usuários</p>
                {listaDeUsuarios}
            </div>
        )
    }
}

