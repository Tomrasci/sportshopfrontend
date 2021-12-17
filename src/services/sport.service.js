import http from "../http-common";
import authHeader from "./auth-header";

const API_URL = "https://sports-shop-api.herokuapp.com/api";

const getAll = () => {
  return http.get(API_URL + "/sports");
};

const get = id => {
    return http.get(API_URL + `/sports/${id}`, { headers: authHeader() });
}

const create = data => {
    return http.post(API_URL + "/sports", data, { headers: authHeader() });
}

const update = (id, data) => {
    return http.put(API_URL + `/sports/${id}`, data, { headers: authHeader() });
}

const remove = id => {
    return http.delete(API_URL + `/sports/${id}`, { headers: authHeader() });
}

export default getAll;
export {get, create, update, remove}