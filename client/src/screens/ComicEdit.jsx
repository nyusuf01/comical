import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ComicEdit(props) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    image_url: "",
  });
  const { title, author, summary, image_url } = formData;
  const { id } = useParams();
  const { comics, handleUpdate } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const comicItem = comics.find((comic) => comic.id === Number(id));
      setFormData({
        title: comicItem.title,
        author: comicItem.author,
        summary: comicItem.summary,
        image_url: comicItem.image_url,
      });
    };
    if (comics.length) {
      prefillFormData();
    }
  }, [comics, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(id, formData);
        }}
      >
        <h3>Edit</h3>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image_url"
            value={image_url}
            onChange={handleChange}
          />
        </label>
        <label>
          Summary:
          <textarea
            type="text"
            rows={10}
            cols={78}
            name="summary"
            value={summary}
            onChange={handleChange}
          />
        </label>
        <button>SAVE</button>
      </form>
    </>
  );
}

export default ComicEdit;
