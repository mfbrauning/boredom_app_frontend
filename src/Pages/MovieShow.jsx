import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieShow(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const movies = props.movies;
  const [editForm, setEditForm] = useState({});
  const snacks = props.snacks;

  useEffect(() => {
    if (props.movies) {
      const movie = movies.find((m) => m._id === id);
      setEditForm(movie);
    }
  }, [props.movies]);

  const newSnack = () => {
    if (snacks) {
      const getSnack = () => {
        for (const snack of props.snacks.recipes[0].analyzedInstructions[0]
          .steps) {
          console.log(snack.step);
          return snack.step;
        }
      };

      return (
        <div className="snacks">
          <div>
            <h2>{snacks.recipes[0].title}</h2>
            <img src={snacks.recipes[0].image} />
            <br />
          </div>
          <p className="snackText">
            <ul>
              {props.snacks.recipes[0].analyzedInstructions[0].steps.map(
                (step) => {
                  return <li> {step.step}</li>;
                }
              )}
            </ul>
          </p>
        </div>
      );
    }
  };

  if (props.movies) {
    const movie = movies.find((m) => m._id === id);

    const handleChange = (event) => {
      const newState = { ...editForm };
      newState[event.target.name] = event.target.value;
      setEditForm(newState);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateMovie(editForm, movie._id);
      navigate("/");
    };

    const removeMovie = () => {
      props.deleteMovie(movie._id);
      navigate("/");
    };

    const form = (
      <form className="edit" onSubmit={handleSubmit}>
        Edit Movie <br/>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.director}
          name="director"
          placeholder="Director"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.year}
          name="year"
          placeholder="Year"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.genre}
          name="genre"
          placeholder="Genre"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.rating}
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.link}
          name="link"
          placeholder="Link to 3rd party Movie description"
          onChange={handleChange}
        /> <br/>
        <input
          type="text"
          value={editForm.video}
          name="video"
          placeholder="Link Movie Trailer"
          onChange={handleChange}
        /> <br/>
        <input className="update" type="submit" value="Update Movie" />
      </form>
    );

    return (
      <section className="show">
        <div className="showPages">
          <div>
            <h1>{movie.title}</h1>
            <img src={movie.image} />
          </div>
          <div>
            <h3>Director: {movie.director}</h3>
            <h3>Year: {movie.year}</h3>
            <h3>Genre: {movie.genre}</h3>
            <h3>Rating: {movie.rating}</h3>

            <a href={movie.link}>
              <h3>IMDB</h3>
            </a>
          </div>
        </div>
        <iframe width="70%" height="820" src={movie.video}></iframe>
        <section> {newSnack()}</section>
        <section>
          {form}
          <button id="delete" onClick={removeMovie}>
            <span>Delete Movie</span>
          </button>
        </section>
      </section>
    );
  } else {
    return <h1>No Movie found</h1>;
  }
}

export default MovieShow;
