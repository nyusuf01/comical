import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneComic } from "../services/comics";
import CommentsContainer from "../containers/CommentsContainer";
import Layout from "../layouts/Layout";

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
            <h4>{comic?.title}</h4>
            <h5>by {comic?.author}</h5>
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
    </>
  );
}

export default ComicDetails;
