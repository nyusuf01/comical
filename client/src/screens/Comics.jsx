import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Comics(props) {
  const { id, title, image_url, currentUser } = props;
  return (
    <div className="comic">
      {currentUser ? (
        <Link to={`/comics/${id}`}>
          <Card title={title} image={image_url} />
        </Link>
      ) : (
        <Link to="/login">
          <Card title={title} image={image_url} />
        </Link>
      )}
    </div>
  );
}

export default Comics;
