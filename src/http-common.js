import axios from "axios";

export default axios.create({
  baseURL: "https://sports-shop-api.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});