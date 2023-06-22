import api from "./configs/axiosConfig";

export const postApi = {
  get: async function (id: Number) {},
  getAll: async function () {
    const response = await api.request({ url: "/posts/", method: "GET" });
    return response.data;
  },
};
