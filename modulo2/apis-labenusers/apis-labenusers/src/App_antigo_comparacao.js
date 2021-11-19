// export default class App extends React.Component {

//     state = {
//       nomeUsuario: "",
//       emailUsuario: "",
//       listaUsuarios: "",
//       userId: "",
//       usuario: "",
//     }
//     listaUsuarios
//     onChangeNome = (event) => {
//       this.setState({ inputValue: event.target.value });
//     }
  
//     onChangeEmail = (event) => {
//       this.setState({ inputValue: event.target.value });
//     }
  
//     onChangeId = (event) => {
//     this.setState({ inputValue: event.target.value });
//     }
  
//     recebeUsuarios = () => {
//       axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
//         headers: {
//           Authorization: "luiza-cioffi-carver"
//         }
//       })
//       .then((resposta) => {
  
//       })
//       .catch((erro) => {
//         console.log(erro.response)
//       })
//     }
  
//     recebeIdUsuario = () => {
//       axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', {
//         headers: {
//           Authorization: "luiza-cioffi-carver"
//         }
//       })
//       .then((resposta) => {
//         console.log(resposta.data)
//       })
//       .catch((erro) => {
//         console.log(erro.response)
//       })
//     } 
  
//     enviarDados = () => {
//       const body = {
//         name: this.state.nomeUsuario,
//         email: this.state.emailUsuario
//       }
  
//       axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
//         headers: {
//           Authorization: "luiza-cioffi-carver"
//         }
//       })
  
//       .then(() => {
//         console.log("Sucesso!")
//       })
//       .catch((erro) => {
//         console.log(erro.response)
//       })
    
//     }
  
//     deletarUsuario = () => {
//       axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', {
//         headers: {
//           Authorization: "luiza-cioffi-carver"
//         }
//       })
//       .then((resposta) => {
//         console.log(resposta)
//       })
//       .catch((erro) => {
//         console.log(erro.response)
//       })
//     }
  
//     render() {
//       return (
//         <div>
//           <p>Método post</p>
//           <input value={this.state.nomeUsuario} onChange={this.onChangeNome}/>
//           <input value={this.state.emailUsuario} onChange={this.onChangeEmail}/>
//           <button onClick={this.enviarDados}>Enviar</button>
//           <p>Método get</p>
//           <button onClick={this.recebeUsuarios}> Pegar usuários da API </button>
//           {/* {
//             this.state.listaUsuarios.map((usuario) => {
//               if(usuario.name) {
//                 return <p key={usuario.id}> {usuario.name} - {usuario.id} </p>
//               }
//             })
//           } */}
//           <p>Método Get e Delete com uso de path params</p>
//           <input value={this.state.userId} onChange={this.onChangeId} />
//           <button onClick={() => this.recebeIdUsuario(this.state.userId)}>Pegar um usuário por ID</button>
//           <button onClick={() => this.deletaUsuarioID(this.state.userId)}>Deletar usuário por ID</button>
//           {/* {
//             this.state.usuario.name && <p>{this.state.usuario.name} - {this.state.usuario.email}</p>
//           } */}
//         </div>
//       )
//     }
  
//   }
  