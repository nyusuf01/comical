import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CommentEdit(props) {
  const [commentData, setCommentData] = useState({
    content: "",
  });

  const { content } = commentData;
  const params = useParams();
  const { handleOpen, commentUpdate, comments, comic } = props;

  console.log(comic?.id, params);

  useEffect(() => {
    const prefillCommentData = () => {
      const commentItem = comments.find(
        (comment) => comment?.id === Number(params.id)
      );
      console.log(commentItem);
      setCommentData({
        content: commentItem?.content,
        comic_id: commentItem?.comic_id,
        user_id: commentItem?.user_id,
      });
    };
    if (comments?.length) {
      prefillCommentData();
    }
  }, [comments, params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="modal-container" onClick={(e) => handleOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            commentUpdate(comic?.id, params.id, commentData);
            handleOpen(false);
          }}
        >
          <label>
            Edit comment:
            <textarea
              type="text"
              rows={10}
              cols={78}
              name="content"
              value={content}
              onChange={handleChange}
            />
          </label>
          <div className="modal-buttons">
            <button className="edit">UPDATE</button>
            <button onClick={() => handleOpen(false)}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentEdit;
