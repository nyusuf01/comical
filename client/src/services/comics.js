import api from "./api-config";

export const getAllComics = async () => {
  const resp = await api.get("/comics");
  return resp.data;
};

export const getOneComic = async (id) => {
  const resp = await api.get(`/comics/${id}`);
  return resp.data;
};

export const postComic = async (comicData) => {
  const resp = await api.post("/comics", { comic: comicData });
  return resp.data;
};

export const putComic = async (id, comicData) => {
  const resp = await api.put(`/comics/${id}`, { comic: comicData });
  return resp.data;
};

export const destroyComic = async (id) => {
  const resp = await api.delete(`/comics/${id}`);
  return resp;
};
