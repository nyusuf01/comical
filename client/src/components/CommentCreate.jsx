import { useState } from "react";
import { useParams } from "react-router-dom";

function CommentCreate(props) {
  const { comic, commentCreate, currentUser } = props;
  const params = useParams();
  const [commentData, setCommentData] = useState({
    content: "",
    user_id: currentUser?.id,
    comic_id: Number(params.id),
  });
  const { content } = commentData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        commentCreate(params.id, commentData);
      }}
    >
      <label>
        Leave a comment for {comic?.title}:
        <input
          type="text"
          name="content"
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>POST</button>
    </form>
  );
}

export default CommentCreate;