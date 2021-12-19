import axios from "axios";
import { BASE_URL } from "../constants/url"

export const postMessages = (history, id) => {
    axios.get(`${BASE_URL}/posts/${id}/comments`, {
        header: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((err) => {
        alert("Ops... Algo deu errado! Verifique seus dados e tente novamente!")
    }) 
}
