import React from "react";
import styled from "styled-components";
import axios from "axios";

const FooterContainer = styled.div`
  background: #CF7500;
  padding-top: 0.5%;
  padding-right: 3%;
  padding-bottom: 0.5%;
  padding-left: 0.5%;
  text-align: center;
  position: sticky;
  top: 0;
  color: #1A1C20;
  font-weight: bold;
  align-items: center;

  h4,
  p,
  img {
    :hover {
      cursor: pointer;
    }
  }
  img {
    width: 3%;
    margin-right: 0.2rem;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;


export default class Footer extends React.Component {
    render() {
        return(
            <FooterContainer>
                <p>Todas as suas músicas, em um só lugar!</p>
            </FooterContainer>
        )
    }
}