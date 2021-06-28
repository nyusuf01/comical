import React, { useState, useEffect } from "react";
import CommentCreate from "../components/CommentCreate";
import Comments from "../components/Comments";
import {
  getAllComments,
  destroyComment,
  putComment,
  postComment,
} from "../services/comments";

function CommentsContainer(props) {
  const { comic, id, currentUser } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async (comicId) => {
      const commentData = await getAllComments(comicId);
      setComments(commentData);
    };
    fetchComments(id);
  }, []);

  const commentCreate = async (comicId, commentData) => {
    const newComment = await postComment(comicId, commentData);
    setComments((prevState) => [...prevState, newComment]);
  };

  const commentUpdate = async (comicId, id, commentData) => {
    const updatedComment = await putComment(comicId, id, commentData);
    setComments((prevState) =>
      prevState.map((comment) => {
        return comment.id === Number(id) ? updatedComment : comment;
      })
    );
  };

  const commentDelete = async (comicId, id) => {
    await destroyComment(comicId, id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };

  return (
    <div className="comments-container">
      <CommentCreate
        comic={comic}
        comments={comments}
        commentCreate={commentCreate}
        currentUser={currentUser}
      />
      <Comments
        comic={comic}
        comments={comments}
        currentUser={currentUser}
        commentUpdate={commentUpdate}
        commentDelete={commentDelete}
      />
    </div>
  );
}

export default CommentsContainer;
