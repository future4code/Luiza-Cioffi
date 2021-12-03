import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Home from "./pages/Home/Home"
import Match from "./pages/Match/Match";
import Loading from "./pages/Loading/Loading";
import { useState } from "react";

//display flex-colum

export default class App extends React.Component{
  state = {
    screen: "home"
  }

  selectPage = () => {
    switch (this.state.screen){
      case "home":
        return <Home/>
      case "match":
        return <Match/>
      default:
        return <Loading/>
    }
  }

  render(){
    return (
      <div>
        
        {this.selectPage()}
      </div>
    );
  }
  
}



// function App() {
//   const [perfil, setPerfil] = useState({})
//   const [proximo, setProximo] = useState(0)
//   const [telaPerfis, setTelaPerfis] = useState()

//   const receberPerfil = () => {
//     axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person")
//     .then((resp) => {
//       const novoPerfil = resp.data.profile
//       setPerfil(novoPerfil)
//     })
//     .catch((erro) => {
//       console.log(erro.response)
//     })
//   }

//   useEffect(() => {
//     receberPerfil()
//   }, [proximo])

//   const novoPerfil = () => {
//     setProximo(proximo + 1)
//   }

//   const mudaTela = () => {
//     setTelaPerfis(!telaPerfis)
//   }

//   return (
//     <div>
//       { tela === "perfis" ?
//         <div>
//           {
//             perfil.id ?
//               <p> {perfil.name}</p>
//               :
//               <p> Sem perfis disponíveis agora </p>
//           }
//         </div>
//         :
//         <Match />
//       }
//       <button onClick={mudaTela}></button>
//     </div>
//   );
// }

// export default App;
