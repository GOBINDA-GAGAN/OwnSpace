// src/api/apiList.js
const apiList = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
  },
  user: {
    getProfile: "/user/profile",
    updateProfile: "/user/profile",
  },
};

export default apiList;

