import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Comics from "../screens/Comics";

import { getAllComics } from "../services/comics";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      const comicData = await getAllComics();
      setComics(comicData);
    };
    fetchComics();
  }, []);

  return (
    <Switch>
      <Route path="/">
        <Comics comics={comics} />
      </Route>
    </Switch>
  );
}

export default ComicsContainer;
