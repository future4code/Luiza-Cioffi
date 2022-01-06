import axios from "axios";
import { BASE_URL } from "../constants/url"
import { goToFeed } from "../routes/coordinators";

export const createPost = (body, clear, history) => {
    axios.get(`${BASE_URL}/posts`, body, {
        header: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((resp) => {
        localStorage.setItem('token', resp.data.token)
        goToFeed(history)
    })
    .catch((err) => {
        alert("Ops... Algo deu errado! Verifique seus dados e tente novamente!")
    }) 
}

export const getPost = (id) => {
    axios.get(`/posts/${id}/comments`, {
        header: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem('token')
        }
    })
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((err) => {
        console.log(err.data);
    }) 
}
