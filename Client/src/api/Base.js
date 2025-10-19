// src/api/base.js
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  });



  return res.json();
};
