import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Comics from "../screens/Comics";
import ComicDetails from "../screens/ComicDetails";
import ComicCreate from "../screens/ComicCreate";
import ComicEdit from "../screens/ComicEdit";
import Search from "../components/Search";

import {
  getAllComics,
  postComic,
  putComic,
  destroyComic,
} from "../services/comics";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { currentUser } = props;
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchComics = async () => {
      const comicData = await getAllComics();
      setComics(comicData);
      setSearchResults(comicData);
    };
    fetchComics();
  }, [toggleFetch]);

  const handleSearch = (e) => {
    const query = comics.filter((comic) => {
      return (
        comic.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        comic.author.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchResults(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleFetch((curr) => !curr);
  };

  const handleCreate = async (comicData) => {
    const newComic = await postComic(comicData);
    setComics((prevState) => [...prevState, newComic]);
    setToggleFetch((curr) => !curr);

    history.push("/");
  };

  const handleUpdate = async (id, comicData) => {
    const updatedComic = await putComic(id, comicData);
    setComics((prevState) =>
      prevState.map((comic) => {
        return comic.id === Number(id) ? updatedComic : comic;
      })
    );
    setToggleFetch((curr) => !curr);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyComic(id);
    setComics((prevState) => prevState.filter((comic) => comic.id !== id));
    setToggleFetch((curr) => !curr);
    history.push("/");
  };

  const comicSearch = searchResults.map((comic, index) => (
    <Comics
      key={index}
      id={comic.id}
      title={comic.title}
      image_url={comic.image_url}
      currentUser={currentUser}
    />
  ));

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
      <Route path="/">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <div className="comics">{comicSearch}</div>
      </Route>
    </Switch>
  );
}

export default ComicsContainer;
