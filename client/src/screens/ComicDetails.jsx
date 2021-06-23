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
    // <Layout>
    <>
      <div className="comic-details">
        <img src={comic?.image_url} alt={comic?.title} />
        <h3>{comic?.title}</h3>
        <h4>by {comic?.author}</h4>
        <p>{comic?.summary}</p>
      </div>

      {/* </Layout> */}
      {currentUser?.id === comic?.user_id && (
        <>
          <Link to={`/comics/${id}/edit`}>
            <button>EDIT</button>
          </Link>
          <button onClick={() => handleDelete(comic.id)}>DELETE</button>
        </>
      )}

      <div>Comments!</div>
      <CommentsContainer comic={comic} id={id} currentUser={currentUser} />
    </>
  );
}

export default ComicDetails;
