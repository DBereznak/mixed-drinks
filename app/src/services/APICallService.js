import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.thecocktaildb.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getDrink(drink) {
    return apiClient.get(`/api/json/v1/1/search.php?s=${drink}`);
  }
};
