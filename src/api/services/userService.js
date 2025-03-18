import axios from "../axios";

export const postUser = (data) => axios.post('/usuario/login', data)