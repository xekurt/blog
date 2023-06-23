import api from "./configs/axiosConfig";

export const userApi = {
  get: async function (id: Number) {
    const response = await api.request({ url: `/users/${id}`, method: "GET" });
    return response.data;
  },
};
