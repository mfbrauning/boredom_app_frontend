import { useState } from "react";
import { Link } from "react-router-dom";

function BookIndex(props) {
  const [newForm, setNewForm] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
    image: "",
    link: "",
  });

  const handleChange = (event) => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
    setNewForm(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createBooks(newForm);
    setNewForm({
      title: "",
      author: "",
      year: "",
      genre: "",
      image: "",
      link: "",
    });
  };

  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.author}
        name="author"
        placeholder="author"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.year}
        name="year"
        placeholder="year"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.genre}
        name="genre"
        placeholder="genre"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="image"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.link}
        name="link"
        placeholder="link"
        onChange={handleChange}
      />
      <input className="add" type="submit" value="Add Book" />
    </form>
  );

  if (props.books) {
    return (
      <div>
        {form}
        <div>
          {props.books.map((book) => {
            return (
              <div key={book._id} className="book">
                {book.title}
                <br />
                {book.author}
                <br />
                {book.year}
                <br />
                {book.genre}
                <br />
                <img src={book.image} alt={book.title} />
                <br />
                <a href={book.link} alt={book.title}>
                  Goodreads
                </a>
                <br />
                <Link to={`/books/${book._id}`}>
                  <button>edit book</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default BookIndex;
