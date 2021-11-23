import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MainPage(props) {
  const movies = props.movies;
  const books = props.books;
  const [mainState, setMainState] = useState([]);
  const [mainBookState, setBookMainState] = useState([]);

  useEffect(() => {
    if (movies && movies.length) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMainState(randomMovie);
    }
  }, [props.movies]);

  useEffect(() => {
    if (books && books.length) {
      const randomBook = books[Math.floor(Math.random() * books.length)];
      setBookMainState(randomBook);
    }
  }, [props.books]);

  return (
    <>
    <img src="https://i.imgur.com/CUJNegc.png" alt="icon" />
    <section className="mainPage">
      
      <div>
        <img src={mainState.image} alt={mainState.title} />
        <Link to={`/movies/${mainState._id}`}>
          <h2>{mainState.title}</h2>
        </Link>
      </div>
      <div>
        <img src={mainBookState.image} alt={mainBookState.title} />
        <Link to={`/books/${mainBookState._id}`}>
          <h2>{mainBookState.title}</h2>
        </Link>
      </div>
      <h1>Be free of boredom and <span>DANCE!!</span>, watch a chill movie, or read a freakin book for once! </h1>
      <iframe  width="100%" height="190" src="https://www.youtube.com/embed/EmnSm_d2ll4?autoplay=1&mute=1"></iframe>
    </section>
    </>
  );
}
export default MainPage;
