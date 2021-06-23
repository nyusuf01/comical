import api from "./api-config";

export const getAllComments = async () => {
  const resp = await api.get("/comics/${id}/comments");
  return resp.data;
};

export const postComment = async (comicId, commentData) => {
  const resp = await api.post(`/comics/${comicId}/comments`, {
    comment: commentData,
  });
  return resp.data;
};

export const putComment = async (comicId, id, commentData) => {
  const resp = await api.put(`/comics/${comicId}/comments/${id}`, {
    comment: commentData,
  });
  return resp.data;
};

export const destroyComment = async (comicId, id) => {
  const resp = await api.delete(`/comics/${comicId}/comments/${id}`);
  return resp;
};
