import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/https://sports-shop-api.herokuapp.com/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
    .post(API_URL + "signin", {
        username,
        password,
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    })
}

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default register;

export  {
    register,
    login,
    logout,
    getCurrentUser,
};