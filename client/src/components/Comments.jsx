import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommentEdit from "./CommentEdit";

function Comments(props) {
  const [open, handleOpen] = useState(false);
  const { comments, currentUser, commentUpdate, commentDelete, comic } = props;
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h6>{comment.user?.username}</h6>
          <p>{comment.content}</p>
          {currentUser?.id === comment?.user_id && (
            <>
              <Link to={`/comics/${comic?.id}/comments/${comment.id}`}>
                <button onClick={() => handleOpen(comment.id)}>EDIT</button>
              </Link>
              <button onClick={() => commentDelete(comic?.id, comment.id)}>
                DELETE
              </button>
            </>
          )}
        </div>
      ))}
      {open && (
        <CommentEdit
          // open={open}
          handleOpen={handleOpen}
          commentUpdate={commentUpdate}
          comic={comic}
          currentUser={currentUser}
          comments={comments}
        />
      )}
    </div>
  );
}

export default Comments;
