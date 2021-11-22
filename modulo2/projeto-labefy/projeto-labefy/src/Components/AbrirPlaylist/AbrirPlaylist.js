import React from "react";
import styled from "styled-components";
import axios from "axios";


const CardMusicas = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 3px;
    width: 150px;
    display: flex;
    justify-content: space-space-around;
`


export default class Home extends React.Component {

    state = {
        playlistId: [],
    }
//'67f65911-b290-46eb-9b87-562312b07a6a'
    componentDidMount() {
        this.verMusicasDaPlaylist()
    }

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
        })

        .catch((erro) => {
            console.log(erro)
        })
    }

    adicionarMusicas = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.artist,
        }
        axios.post(url, body, {
            headers: {
                Authorization: "luiza-cioffi-carver"
            }
        })
        .then((resp) => {
            alert("Música adicionada com sucesso!")
            this.setState({nome: "", artista: "", link: ""})
            console.log(resp)
        })
        .catch((erro) => {
            alert("OPS! Algo deu errado, tente novamente")
        })
    }

    render() {
        const listaDeMusicas = this.state.playlistId.map((musica) => {
            return (
                <CardMusicas key={musica.id}>
                    {musica.name}
                    {/* <button onClick={() => this.verMusicasDaPlaylist(musica.id), this.props.irTelaDetalAdic} >Ver Músicas</button> */}
                </CardMusicas>
            )
        })
        

        return(
            <div>
                <h1>Tela da playlist em detalhes - LABEFY</h1>
                <h2>Oi Labenuser, bora de música?</h2>
                <button onClick={this.props.irHome}>Home</button>
                {listaDeMusicas}
            </div>
        )
    }
}