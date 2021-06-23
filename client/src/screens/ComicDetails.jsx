import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneComic } from "../services/comics";
import Layout from "../layouts/Layout";

function ComicDetails(props) {
  const [comic, setComic] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchComic = async () => {
      const comicData = await getOneComic(id);
      setComic(comicData);
    };
    fetchComic();
  }, []);

  return (
    <Layout>
      <div className="comic-details">
        <img src={comic?.image_url} alt={comic?.title} />
        <h3>{comic?.title}</h3>
        <h4>{comic?.author}</h4>
        <p>{comic?.summary}</p>
      </div>
    </Layout>
  );
}

export default ComicDetails;
