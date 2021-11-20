import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class Home extends React.Component {
    state = {
        nome: ""
    }

    handleNomePlaylist = (event) => {
        this.setState({nome: event.target.value})
    }

    cadastrarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }
        axios.post(url, body, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resp) => {
            alert("OBA! VOCÊ CADASTROU UMA NOVA PLAYLIST!! ---Agora já dá para ir lá espiar a lista de Playlists e adicionar músicas nela!---")
            this.setState({nome: ""})
        })
        .catch((erro) => {
            alert("OPS! ALGO DEU ERRADO... Será que essa Playlist já existe?")
            this.setState({nome: ""})
        })
    }

    render() {
        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Oi Labenuser, bora de música?</h2>
                <button onClick={this.props.irTelaDasPlaylists}>Ver Playlists</button>
                <button onClick={this.props.irTelaOuvirMusica}>Ouvir Músicas</button>
                <input 
                    placeholder={"Nome da Nova Playlist"}
                    value={this.state.nome}
                    onChange={this.handleNomePlaylist}
                >
                </input>
                <button onClick={this.cadastrarPlaylist}>Cadastrar Nova Playlist</button>
            </div>
        )
    }
}