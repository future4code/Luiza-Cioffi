import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";

const HeaderContainer = styled.div`
  background-color: #1A1C20;
  padding: 0.5%;
  padding-right: 3%;
  padding-bottom: 0.5%;
  padding-left: 2%;
  text-align: left;
  position: sticky;
  top: 0;
  color: #CF7500;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  h4,
  p,
  img {
    :hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: space-envely;
  }
`;

const CampoBuscar = styled.div`
  input {
    width: 30rem;
    height: 2rem;
    border-radius: 20px;
    background-color: #ffffff;
    border: none;
    padding: 0 2rem;
  }

  img {
    position: relative;
    right: 30px;
    top: 6px;
    width: 4%;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;



export default class Header extends React.Component {
    render() {
            return(
                <HeaderContainer >
                    <p><span>LABEFY</span> - sua caixinha de música</p>
                    <CampoBuscar>
                        <input
                            placeholder="Busca por nome"
                            // value={this.props.query}
                            // onChange={this.props.onchangeQuery}
                        />
                        {/* <img src={Pesquisa} alt="Ícone de pesquisa" /> */}
                    </CampoBuscar>
                </HeaderContainer>                
            )
    }
}