import React from "react";
import styled from "styled-components";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const CardPlaylists = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 250px;
    display: flex;
    justify-content: space-between;
`

export default class TelaDasPlaylists extends React.Component {

    state = {
        playlists: []
    }

    componentDidMount() {
        this.verAsPlaylists()
    }

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

    render() {
       
        const listaDePlaylists = this.state.playlists.map((playlist) => {
            return (
                <CardPlaylists key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar Playlist</button>
                </CardPlaylists>
            )
        })

        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Veja aqui todas as suas Playlists!</h2>
                <button onClick={this.props.irHome}>Home</button>
                <button onClick={this.props.irTelaDetalAdic}>Detalhar Playlists e Adicionar Músicas</button>
                <button onClick={this.props.irTelaOuvirMusica}>Ouvir Músicas</button>
                {listaDePlaylists}
            </div>
        )
    }
}