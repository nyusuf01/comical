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
      className="create-comment"
      onSubmit={(e) => {
        e.preventDefault();
        commentCreate(params.id, commentData);
        commentData.content = "";
      }}
    >
      <label>
        <h6>Leave a comment for {comic?.title}?</h6>
        <br></br>
        <textarea
          type="text"
          rows={8}
          cols={78}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </label>
      <div>
        <button>POST</button>
      </div>
    </form>
  );
}

export default CommentCreate;
