import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://cabb82472908343fbf7b.free.beeceptor.com",
});

export const postData = (data) => {
  return API_URL.post("/api/products/", data);
};

export const readData = () => {
  return API_URL.get("/api/products/");
};

export const deleteData = (id) => {
  return API_URL.delete(`/api/products/${id}`);
};

export const putData = (id, updatedPost) => {
  return API_URL.put(`/api/products/${id}`, updatedPost);
};
