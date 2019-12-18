import React, { useState, useEffect } from "react";
import axios from "axios";

export const UpdateMovie = props => {
  const [thisMovie, setThisMovie] = useState({
    title: "",
    director: "",
    metascore: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => setThisMovie(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChanges = e => {
    e.persist();
    setThisMovie({
      ...thisMovie,
      [e.target.name]:
        e.target.name === "metascore" ? +e.target.value : e.target.value
    });
  };

  const updateMovie = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${thisMovie.id}`, thisMovie)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.history.push(`/movies/${thisMovie.id}`);
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
      <button>Update</button>
    </form>
  );
};

// const itemToEdit = props.movie.find(
//     e => `${e.id}` === props.match.params.id
//   );
//   if (itemToEdit) {
//     setThisMovie(itemToEdit);
//   }
