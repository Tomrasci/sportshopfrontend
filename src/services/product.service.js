import http from "../http-common";
import authHeader from "./auth-header";

const API_URL = "https://sports-shop-api.herokuapp.com/api";

const getAll = (sid, cid) => {
  return http.get(API_URL + `/sports/${sid}/clubs/${cid}/products`);
};

const get = (sid, cid, id) => {
    return http.get(API_URL + `/sports/${sid}/clubs/${cid}/products/${id}`, { headers: authHeader() });
}

const create = (sid, cid, data) => {
    return http.post(API_URL + `/sports/${sid}/clubs/${cid}/products`, data, { headers: authHeader() });
}

const update = (sid, cid, id, data) => {
    return http.put(API_URL + `/sports/${sid}/clubs/${cid}/products/${id}`, data, { headers: authHeader() });
}

const remove = (sid, cid, id) => {
    return http.delete(API_URL + `/sports/${sid}/clubs/${cid}/products/${id}`, { headers: authHeader() });
}

export default getAll;
export {get, create, update, remove}