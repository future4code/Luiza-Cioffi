import React from "react";
import styled from "styled-components";
import axios from "axios";

export default class TelaOuvirMusica extends React.Component {
    render() {
        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Aperte o play e vamos ouvir um som!</h2>
                <button onClick={this.props.irHome}>Home</button>
                <button onClick={this.props.irTelaDasPlaylists}>Ver todas as Playlists</button>
            </div>
        )
    }
}