import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Comics from "../screens/Comics";
import ComicDetails from "../screens/ComicDetails";
import ComicEdit from "../screens/ComicEdit";
import ComicCreate from "../screens/ComicCreate";
import {
  getAllComics,
  postComic,
  putComic,
  destroyComic,
} from "../services/comics";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchComics = async () => {
      const comicData = await getAllComics();
      setComics(comicData);
    };
    fetchComics();
  }, []);

  const handleCreate = async (comicData) => {
    const newComic = await postComic(comicData);
    setComics((prevState) => [...prevState, newComic]);
    history.push("/comics");
  };

  const handleUpdate = async (id, comicData) => {
    const updatedComic = await putComic(id, comicData);
    setComics((prevState) =>
      prevState.map((comic) => {
        return comic.id === Number(id) ? updatedComic : comic;
      })
    );
    history.push("/comics");
  };

  const handleDelete = async (id) => {
    await destroyComic(id);
    setComics((prevState) => prevState.filter((comic) => comic.id !== id));
    history.push("/comics");
  };

  return (
    <Switch>
      <Route path="/comics/add">
        <ComicCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/comics/:id/edit">
        <ComicEdit comics={comics} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/comics/:id">
        <ComicDetails
          comics={comics}
          handleDelete={handleDelete}
          currentUser={currentUser}
        />
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
