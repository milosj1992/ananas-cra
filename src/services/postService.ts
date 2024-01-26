import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/";

export const fetchPosts = () => {
  return axios.get(`${API_BASE_URL}posts`);
};

export const fetchUsers = () => {
  return axios.get(`${API_BASE_URL}users`);
};

export const fetchPostById = (id: string) => {
  return axios.get(`${API_BASE_URL}posts/${id}`);
};

export const fetchCommentsByPostId = (postId: string) => {
  return axios.get(`${API_BASE_URL}posts/${postId}/comments`);
};
