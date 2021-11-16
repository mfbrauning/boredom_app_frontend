import { useState } from "react";
import { Link } from "react-router-dom";

function MovieIndex(props){
      // State to hold form data
  const [newForm, setForm] = useState({
    title: "",
    director: "",
    year: "",
    genre: "",
    image: "",
    rating: "",
    link: "",
    video: "",
  });

  // Handle Change Funciton
  const handleChange = (event) => {
    // Copy State
    const newState = { ...newForm };
    // Update State
    newState[event.target.title] = event.target.value;
    setForm(newState);
  };

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createMovie(newForm);
    setNewForm({
      title: "",
      director: "",
      year: "",
      genre: "",
      image: "",
      rating: "",
      link: "",
      video: "",
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.director}
        name="director"
        placeholder="Director"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.year}
        name="year"
        placeholder="Year"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.genre}
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.rating}
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.link}
        name="link"
        placeholder="Link to 3rd party Movie description"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.video}
        name="video"
        placeholder="Link Movie Trailer"
        onChange={handleChange}
      />
    </form>
  );

  if (props.movies) {
    return (
      <section>
        {form}
        {props.movies.map((movie) => {
          return (
            <div key={movie._id}>
              <Link to={`/movies/${movie._id}`}>
                <h1>{movie.title}</h1>
              </Link>
              <h3>{movie.director}</h3>
              <h3>{movie.year}</h3>
              <h3>{movie.genre}</h3>
              <h3>{movie.rating}</h3>
              <h3>{movie.link}</h3>
              <img src={movie.image} />
              <iframe width="100%" height="820" src={movie.video}></iframe>
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section>
        {form}
        <h1>Loading...</h1>
      </section>
    );
  }
}

export default MovieIndex