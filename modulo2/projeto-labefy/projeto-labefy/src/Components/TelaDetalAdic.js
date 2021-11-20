import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaDetalAdic extends React.Component {
    render() {
        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Playlists detalhadas:</h2>
                <button onClick={this.props.irHome}>Home</button>
                <button onClick={this.props.irTelaDasPlaylists}>Ver Playlists</button>
                <button onClick={this.props.irTelaOuvirMusica}>Ouvir Músicas</button>
            </div>
        )
    }
}