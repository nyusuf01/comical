import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneComic } from "../services/comics";

import CommentsContainer from "../containers/CommentsContainer";

function ComicDetails(props) {
  const [comic, setComic] = useState(null);
  const { id } = useParams();
  const { currentUser, handleDelete } = props;

  useEffect(() => {
    const fetchComic = async () => {
      const comicData = await getOneComic(id);
      setComic(comicData);
    };
    fetchComic();
  }, []);

  return (
    <>
      <div className="comic-details">
        <img src={comic?.image_url} alt={comic?.title} />
        <div className="comic-details2">
          <div>
            <h5>{comic?.title}</h5>
            <h4>by {comic?.author}</h4>
            <br></br>
            <p>{comic?.summary}</p>
          </div>
          {currentUser?.id === comic?.user_id && (
            <div className="details-buttons">
              <Link to={`/comics/${id}/edit`}>
                <button className="edit">EDIT</button>
              </Link>
              <button onClick={() => handleDelete(comic.id)}>DELETE</button>
            </div>
          )}
        </div>
      </div>
      <CommentsContainer comic={comic} id={id} currentUser={currentUser} />
      <br></br>
      <br></br>
    </>
  );
}

export default ComicDetails;
