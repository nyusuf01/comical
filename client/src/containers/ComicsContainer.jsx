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
import Search from "../components/Search";

function ComicsContainer(props) {
  const [comics, setComics] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const { currentUser } = props;
  const history = useHistory();

  useEffect(() => {
    const fetchComics = async () => {
      const comicData = await getAllComics();
      setComics(comicData);
      setSearchResults(comicData);
    };
    fetchComics();
  }, []);

  const handleSearch = (e) => {
    const query = comics.filter((comic) => {
      return (
        comic.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        comic.author.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setSearchResults(query);
  };

  const handleSubmit = (e) => e.preventDefault();

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

  const searchComics = searchResults.map((comic, index) => (
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
      <Route path="/comics">
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <div className="comics">{searchComics}</div>
      </Route>
    </Switch>
  );
}

export default ComicsContainer;
