import api from "./configs/axiosConfig";

export const postApi = {
  get: async function (id: Number) {},
  getAll: async function (q?: string) {
    const response = await api.request({
      url: q ? `/posts?q=${q}` : "/posts/",
      method: "GET",
    });
    return response.data;
  },
};
