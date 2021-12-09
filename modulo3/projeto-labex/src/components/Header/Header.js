import React from "react";
import { useHistory } from "react-router-dom";
import { StyledHeader } from "./StyledHeader"

function Header() {
  const history = useHistory()

  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <StyledHeader>
        <button onClick={goToHomePage}>Home</button>
        <p>LabeX</p>
    </StyledHeader>
  );
}
export default Header;