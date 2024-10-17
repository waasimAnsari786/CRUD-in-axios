import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://ca0f67f0e0126fa3e39c.free.beeceptor.com",
});

export const postData = (data) => {
  return API_URL.post("/api/books/", data);
};

export const getData = () => {
  return API_URL.get("/api/books/");
};
