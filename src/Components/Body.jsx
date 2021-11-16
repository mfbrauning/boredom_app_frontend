import BookIndex from "../Pages/BookIndex";
import BookShow from "../Pages/BookShow";
import MovieIndex from "../Pages/MovieIndex";
import MovieShow from "../Pages/MovieShow";
import MainPage from "../Pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"


function Body(props) {
  // Movies
  
  // Movie State
  const [movies, setMovies] = useState(null);
  // Movie Link
  const moviesURL = "https://boredom-app-backend.herokuapp.com/movies/";
 

  const getMovies = async () => {
    const response = await fetch(moviesURL);
    const data = await response.json();
    setMovies(data);
  };

  // Create Movie Function
  const createMovie = async (movie) => {
    await fetch(moviesURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    getMovies();
  };

  // Update Movie Function
  const updateMovie = async (movie, id) => {
    await fetch(moviesURL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    getMovies();
  };

  // Delete Movie Function
  const deleteMovie = async (id) => {
    await fetch(moviesURL + id, {
      method: "delete",
    });
    getMovies();
  };
  // useEffect for Moives
  useEffect(() => getMovies(), []);
  
  
  //Books
  
    // books state
    const [books, setBooks] = useState(null);
    // books URL
    const booksURL = "https://boredom-app-backend.herokuapp.com/books/";

    const getBooks = async () => {
        const response = await fetch(booksURL);
        const data = await response.json();
        setBooks(data)
    }

    const createBooks = async (book) => {
        await fetch(booksURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        getBooks()
    }

    useEffect(() => getBooks() , [])

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/movies"
          element={<MovieIndex movies={movies} createMovie={createMovie} />}
        />

        <Route
          path="/movies/:id"
          element={
            <MovieShow
              movies={movies}
              updateMovie={updateMovie}
              deleteMovie={deleteMovie}
            />
          }
        />

        <Route path="/books" element={<BookIndex />} />
        <Route path="/books/:id" element={<BookShow />} />
      </Routes>
    </div>
  );

}

export default Body;
