import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import MovieCard from "./MovieCard";
//
// export default class MovieList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       movies: []
//     };
//   }
//
//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/api/movies")
//       .then(res => this.setState({ movies: res.data }))
//       .catch(err => console.log(err.response));
//   }
//
//   render() {
//     return (
//       <div className="movie-list">
//         {this.state.movies.map(movie => (
//           <MovieDetails key={movie.id} movie={movie} />
//         ))}
//       </div>
//     );
//   }
// }
//
// function MovieDetails({ movie }) {
//   return (
//     <Link to={`/movies/${movie.id}`}>
//       <MovieCard movie={movie} />
//     </Link>
//   );
// }
