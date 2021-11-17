import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieShow(props){
    const params = useParams()
    const navigate = useNavigate()
     const id = params.id
     const movies = props.movies
     const [editForm, setEditForm] = useState({})

     useEffect(() => {
         if(props.movies){
             const movie = movies.find((m) => m._id === id)
             setEditForm(movie)
         }
     }, [props.movies])

     if(props.movies){
        const movie = movies.find((m) => m._id === id)

        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value 
            setEditForm(newState)
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateMovie(editForm, movie._id)
            navigate("/")
        }

        const removeMovie = () => {
            props.deleteMovie(movie._id)
            navigate("/")
        }

        const form = (
            <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editForm.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.director}
        name="director"
        placeholder="Director"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.year}
        name="year"
        placeholder="Year"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.genre}
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.image}
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.rating}
        name="rating"
        placeholder="Rating"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.link}
        name="link"
        placeholder="Link to 3rd party Movie description"
        onChange={handleChange}
      />
      <input
        type="text"
        value={editForm.video}
        name="video"
        placeholder="Link Movie Trailer"
        onChange={handleChange}
      />
      <input type="submit" value="Update Movie" />
    </form>
        )

    return (
        <div>
            <h1>Title: {movie.title}</h1>
            <h3>Director: {movie.director}</h3>
              <h3>Year: {movie.year}</h3>
              <h3>Genre: {movie.genre}</h3>
              <h3>Rating: {movie.rating}</h3>
              <h3>IMDB: {movie.link}</h3>
              <img src={movie.image} />
              <iframe width="100%" height="820" src={movie.video}></iframe>
            {form}
            <button id="delete" onClick={removeMovie}>
                Delete Movie
            </button>
        </div>
    )
     }else{
        return <h1>No Movie found</h1>
     }
}

export default MovieShow