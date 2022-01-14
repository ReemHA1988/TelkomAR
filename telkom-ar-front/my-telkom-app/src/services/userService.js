import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
http.setDefaultCommonHeader("x-auth-token", getJwt());

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post(`${apiUrl}/auth`, { email, password });
  localStorage.setItem(TOKEN_KEY, data.token);
}

export function createUser(user) {
  return http.post(`${apiUrl}/users`, user);
}

const userService = {
  login,
  createUser,
  getCurrentUser,
  logout,
  getJwt,
};

export default userService;
