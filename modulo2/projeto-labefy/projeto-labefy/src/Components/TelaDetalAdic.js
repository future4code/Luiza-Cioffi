import React from "react";
import styled from "styled-components";
import axios from "axios";


const CardMusicas = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin: 3px;
    width: 150px;
    display: flex;
    justify-content: space-between;
`


export default class TelaDetalAdic extends React.Component {
    render() {
        const listaDeMusicas = this.state.listaDeMusicas.map((listaDeMusicas) => {
            return (
                <CardMusicas key={listaDeMusicas.id}>
                {listaDeMusicas.name}
                </CardMusicas>
            )
        })

        return(
            <div>
                <h1>LABEFY</h1>
                <h2>Playlist detalhada:</h2>
                <button onClick={this.props.irTelaDasPlaylists}>Ver Playlists</button>

            </div>
        )
    }
}