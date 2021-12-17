import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://obscure-bastion-29177.herokuapp.com/https://sports-shop-api.herokuapp.com";

const getPublicContent = () => {
    return axios.get(API_URL);
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers : authHeader()});
}

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {headers :  authHeader()});
}

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers :  authHeader()});
}
export default getUserBoard;

export {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};