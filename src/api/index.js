import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:8080",
});

// read 
export const allBooks = () => API.get("api/book/getBooks");

// create 
export const createBook = (values) =>
  API.post("/api/book/newBook", values);

// update  
export const updateBook = ( id, values) =>
    API.put(`/api/book/updateBook/${id}`, values);

// delete
export const deleteBook = (id) =>
  API.delete(`/api/book/deleteBook/${id}`);