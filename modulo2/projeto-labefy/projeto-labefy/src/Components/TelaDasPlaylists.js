import React from "react";
import styled from "styled-components";
import axios from "axios";
import userEvent from "@testing-library/user-event";

// ------- Estilização do Card de uma Playlist
const CardPlaylists = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
const CardMusicas = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 3px;
    width: 150px;
    display: flex;
    justify-content: space-between;
`

export default class TelaDasPlaylists extends React.Component {

    // ------- estado que será preenchido conforme as funções forem chamadas
    state = {
        playlists: [],
        listaDeMusicas: []
    }

    // ------- Para rodar a função verAsPlaylists automaticamente
    componentDidMount() {
        this.verAsPlaylists()
    }

    // ------- Função para ver a lista com todas as Playlists criadas
    verAsPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resp) => {            
            this.setState({playlists: resp.data.result.list})
        })
        .catch((erro) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    // ------- Ver as Músicas dentro de uma playlist
    verMusicasDaPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resp) => {
            this.setState({listaDeMusicas: resp.data.result.tracks})            
            console.log(resp)
            return (
                this.state.listaDeMusicas.map((listaDeMusicas) => {
                    return (
                        <CardMusicas key={listaDeMusicas.id}>
                        {listaDeMusicas.name}
                        </CardMusicas>
                    )
                })
            )
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    // ------- Deletar uma Playlist específica da lista
    deletarPlaylist = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resp) =>{
            alert("Playlist deletada com sucesso!")
            this.verAsPlaylists()
        })
        .catch((erro) => {
            alert("Ops, algo deu errado!")
        })
    }

    //this.props.irTelaDetalAdic
    render() {
       
        const listaDePlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylists key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.verMusicasDaPlaylist(playlist.id)} >Ver Músicas</button>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar Playlist</button>
                </CardPlaylists>
            )
        })

        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Veja aqui todas as suas Playlists!</h2>
                <button onClick={this.props.irHome}>Home</button>
                <button onClick={this.props.irTelaOuvirMusica}>Ouvir Músicas</button>
                {listaDePlaylists}
            </div>
        )
    }
}