import axios from "axios";
import { BASE_URL } from "../constants/url"
import { goToFeed } from "../routes/coordinators";

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body, {
        header: {
            "Content-Type": "application/json"
        }
    })
    .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        alert("Ops... Algo deu errado! Verifique seus dados e tente novamente!")
        clear()
    }) 
}

export const register = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body, {
        header: {
            "Content-Type": "application/json"
        }
    })
    .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        clear()
        goToFeed(history)
    })
    .catch((err) => {
        alert("Ops... Algo deu errado! Verifique seus dados e tente novamente!")
        clear()
    }) 
}