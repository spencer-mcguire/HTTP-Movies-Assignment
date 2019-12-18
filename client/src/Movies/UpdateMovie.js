import React, { useState, useEffect } from "react";
import axios from "axios";

export const UpdateMovie = props => {
  const [thisMovie, setThisMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });
  console.log(thisMovie);
  useEffect(() => {
    const itemToEdit = props.movies.find(
      e => `${e.id}` === props.match.params.id
    );
    if (itemToEdit) {
      setThisMovie(itemToEdit);
    }
  }, [props.movies, props.match.params.id]);

  const handleChanges = e => {
    e.persist();
    setThisMovie({
      ...thisMovie,
      [e.target.name]:
        e.target.name === "metascore" ? +e.target.value : [e.target.value]
    });
  };

  const updateMovie = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${thisMovie.id}`, thisMovie)
      .then(res => {
        props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={updateMovie}>
      <input
        type="text"
        name="title"
        onChange={handleChanges}
        value={thisMovie.title}
        placeholder="title"
      />
      <input
        type="text"
        name="director"
        onChange={handleChanges}
        value={thisMovie.director}
        placeholder="director"
      />
      <input
        type="text"
        name="metascore"
        onChange={handleChanges}
        value={thisMovie.metascore}
        placeholder="metascore"
      />
      {thisMovie.stars.map(i => (
        <input
          type="text"
          name="stars"
          onChange={handleChanges}
          value={i.index}
          placeholder="stars"
        />
      ))}

      <button>Update</button>
    </form>
  );
};
