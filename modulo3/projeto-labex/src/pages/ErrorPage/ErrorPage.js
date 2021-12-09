import React from "react";
import styled from "styled-components";
import axios from "axios";


function ErrorPage() {
    return (
      <div>
          <iframe 
            src="https://giphy.com/embed/8L0Pky6C83SzkzU55a" 
            width="480" 
            height="480" 
            frameBorder="0" 
            class="giphy-embed" 
            allowFullScreen />
          
          <p>Ops... Algo deu errado! Verifique o endereço e tente novamente!</p>
      </div>
    );
  }
  
  export default ErrorPage;




