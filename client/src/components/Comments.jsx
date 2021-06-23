import React from "react";
import { Link } from "react-router-dom";

function Comments(props) {
  const { comments, currentUser, commentUpdate, commentDelete, comic } = props;
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h6>{comment.user?.username}</h6>
          <p>{comment.content}</p>
          {currentUser?.id === comment?.user_id && (
            <>
              <Link to={`comic/${comic?.id}/comments/${comment.id}`}>
                <button onClick={commentUpdate}>EDIT</button>
              </Link>
              <button onClick={() => commentDelete(comic?.id, comment.id)}>
                DELETE
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comments;
