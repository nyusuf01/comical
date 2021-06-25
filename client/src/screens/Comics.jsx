import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Comics(props) {
  const { id, title, image_url, currentUser } = props;
  return (
    <div>
      {currentUser ? (
        <Link to={`/comics/${id}`}>
          <Card title={title} image={image_url} />
        </Link>
      ) : (
        <Card title={title} image={image_url} />
      )}
    </div>
  );
}

export default Comics;
