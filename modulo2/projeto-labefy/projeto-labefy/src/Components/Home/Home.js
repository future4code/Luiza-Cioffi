import React from "react";
import styled from "styled-components";
import axios from "axios";

const CardPlaylists = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    background-color: #CF7500;

    button{
        color: #FEFECC;
        border-radius: 20px;
        border: none;
        justify-content: left;
        background-color: #1A1C20;
        font-family: Arial, Helvetica, sans-serif;
    }
`



export default class Home extends React.Component {

    state = {
        playlists: [],
        nome: "",
    }

    componentDidMount() {
        this.verAsPlaylists()
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
            console.log(resp)
        })
        .catch((erro) => {
            alert("OPS! ALGO DEU ERRADO... Será que essa Playlist já existe?")
        })
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
            console.log(resp)
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
                    <button onClick={() => this.verMusicasDaPlaylist(playlist.id), 
                        this.props.irAbrirPlaylist}>Abrir</button>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar Playlist</button>
                </CardPlaylists>
            )
        })

        return(
            <div>
                <h1>Home - LABEFY</h1>
                <h2>Oi Labenuser, bora de música?</h2>
                
                <button onClick={this.props.irAbrirPlaylist}>Ver Playlists</button>
                <h2>Quer criar uma nova Playlist?</h2>
                <h3>Digite o Nome da sua nome da sua nova Playlist.</h3>
                <p>Lembre-se: cada Playlists deve ter um nome diferente, ok?</p>
                <input 
                    placeholder={"Nome da Nova Playlist"}
                    value={this.state.nome}
                    onChange={this.handleNomePlaylist}
                >
                </input>
                <button onClick={this.cadastrarPlaylist}>Cadastrar Nova Playlist</button>   
                {listaDePlaylists}
            </div>
        )
    }
}