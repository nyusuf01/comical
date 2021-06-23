import React from "react";
import { Link } from "react-router-dom";

function Comics(props) {
  const { comics, currentUser } = props;
  return (
    <div>
      <p>Some comic strips</p>
      {comics.map((comic) => (
        <div key={comic.id}>
          <Link to={`/comics/${comic.id}`}>
            <p>{comic.title}</p>
            <img src={comic.image_url} alt="comic strip" />
          </Link>
          {currentUser?.id === comic.user_id && (
            <>
              <Link to={`/comics/${comic.id}/edit`}>
                <button>Edit</button>
              </Link>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Comics;
