import axios from "axios";

function create(baseURL, options) {
  const instance = axios.create(Object.assign({baseURL}, options));
  return instance;
}

export const posts = create('http://localhost:5000/posts');