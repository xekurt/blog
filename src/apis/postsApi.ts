import api from "./configs/axiosConfig";
import { v4 as uuidv4 } from "uuid";
export const postApi = {
  get: async function (id: number | string) {
    const response = await api.request({
      url: `/posts/${id}`,
      method: "GET",
    });
    return response.data;
  },
  getAll: async function (q?: string) {
    const response = await api.request({
      url: q ? `/posts?q=${q}` : "/posts/",
      method: "GET",
    });
    return response.data;
  },
  create: async function (postObject: any) {
    let { description } = postObject;
    let data = {
      ...postObject,
      id: uuidv4().slice(0, 5),
      publishDate: new Date(),
      userId: "10",
      image: "http://placeimg.com/640/480/technics",
      likes: 17,
      text: description,
    };
    console.info(data);
    const response = await api.request({
      url: "/posts/",
      method: "POST",
      data: data,
    });
  },
};
