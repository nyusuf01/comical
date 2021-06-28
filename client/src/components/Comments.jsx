import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import CommentEdit from "./CommentEdit";

function Comments(props) {
  const [open, handleOpen] = useState(false);
  const { comments, currentUser, commentUpdate, commentDelete, comic } = props;
  console.log(comments);
  console.log(comic);
  return (
    <div>
      {comments.map((comment) => (
        <div className="comment" key={comment?.id}>
          <div>
            <h6>
              {comment?.user_id === currentUser?.id
                ? currentUser?.username
                : comment?.user?.username}
            </h6>
            {currentUser?.id === comment?.user_id && (
              <div>
                <Link to={`/comics/${comic?.id}/comments/${comment?.id}`}>
                  <button
                    className="edit"
                    onClick={() => handleOpen(comment?.id)}
                  >
                    EDIT
                  </button>
                </Link>
                <button onClick={() => commentDelete(comic?.id, comment?.id)}>
                  DELETE
                </button>
              </div>
            )}
          </div>
          <p>{comment?.content}</p>
        </div>
      ))}
      {open && (
        <Route path="/comics/:comic_id/comments/:id">
          <CommentEdit
            comic={comic}
            comments={comments}
            handleOpen={handleOpen}
            commentUpdate={commentUpdate}
          />
        </Route>
      )}
    </div>
  );
}

export default Comments;
