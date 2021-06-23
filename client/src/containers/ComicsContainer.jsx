import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Comics from "../screens/Comics";
import ComicDetails from "../screens/ComicDetails";
import ComicCreate from "../screens/ComicCreate";
import { getAllComics, postComic, putComic } from "../services/comics";
import { getAllComments } from "../services/comments";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);
  const [comments, setComments] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

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

  const handleCreate = async (comicData) => {
    const newComic = await postComic(comicData);
    setComics((prevState) => [...prevState, newComic]);
    history.push("/");
  };

  return (
    <Switch>
      <Route path="/comics/:id">
        <ComicDetails comics={comics} comments={comments} />
      </Route>
      <Route path="/add">
        <ComicCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/">
        <Comics comics={comics} currentUser={currentUser} />
      </Route>
    </Switch>
  );
}

export default ComicsContainer;
