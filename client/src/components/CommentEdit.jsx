import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentEdit(props) {
  const { handleOpen, commentUpdate, currentUser, comments } = props;
  const { comicId, id } = useParams();
  const [commentData, setCommentData] = useState({
    content: "",
  });
  const { content } = commentData;
  useEffect(() => {
    const prefillCommentData = () => {
      const commentItem = comments.find(
        (comment) => comment?.id === Number(id)
      );
      console.log(commentItem);
      setCommentData({
        content: commentItem?.content,
      });
    };
    if (comments.length) {
      prefillCommentData();
    }
  }, [comments, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="comment-edit-container" onClick={(e) => handleOpen(false)}>
      <div className="comment-edit" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            commentUpdate(comicId, id, commentData);
            handleOpen(false);
          }}
        >
          <label>
            Edit Comment:
            <input
              type="text"
              name="content"
              value={content}
              onChange={handleChange}
            />
          </label>
          <button onClick={() => handleOpen(false)}>CANCEL</button>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </div>
  );
}

export default CommentEdit;
