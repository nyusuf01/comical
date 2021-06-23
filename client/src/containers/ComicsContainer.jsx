import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Comics from "../screens/Comics";
import ComicDetails from "../screens/ComicDetails";
import { getAllComics, postComic, putComic } from "../services/comics";
import { getAllComments } from "../services/comments";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);
  const [comments, setComments] = useState([]);
  const { currentUser } = props;

  useEffect(() => {
    const fetchComics = async () => {
      const comicData = await getAllComics();
      setComics(comicData);
    };
    fetchComics();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchComments();
  }, []);

  return (
    <Switch>
      <Route path="/comics/:id">
        <ComicDetails comics={comics} />
      </Route>
      <Route path="/">
        <Comics comics={comics} currentUser={currentUser} />
      </Route>
    </Switch>
  );
}

export default ComicsContainer;
