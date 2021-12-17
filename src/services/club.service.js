import http from "../http-common";
import authHeader from "./auth-header";

const API_URL = "https://sports-shop-api.herokuapp.com/api";

const getAll = id => {
  return http.get(API_URL + `/sports/${id}/clubs`);
};

const get = (sid, id) => {
    return http.get(API_URL + `/sports/${sid}/clubs/${id}`, { headers: authHeader() });
}

const create = (id, data) => {
    return http.post(API_URL + `/sports/${id}/clubs`, data, { headers: authHeader() });
}

const update = (sid, id, data) => {
    return http.put(API_URL + `/sports/${sid}/clubs/${id}`, data, { headers: authHeader() });
}

const remove = (sid, id) => {
    return http.delete(API_URL + `/sports/${sid}/clubs/${id}`, { headers: authHeader() });
}

export default getAll;
export {get, create, update, remove}