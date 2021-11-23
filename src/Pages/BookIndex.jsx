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
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.author}
        name="author"
        placeholder="Author"
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
        placeholder="Image"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.link}
        name="link"
        placeholder="Link"
        onChange={handleChange}
      />
      <input className="add" type="submit" value="Add Book" />
    </form>
  );

  if (props.books) {
    return (
      <div className="booki">
        {form}
        <div className="cards">
          {props.books.map((book) => {
            return (
              <div key={book._id} className="book">
                <Link to={`/books/${book._id}`}>
                  <h2> {book.title}</h2>
                </Link>

                <h3>Genre: {book.genre} </h3>

                <img src={book.image} alt={book.title} />

                <h4>
                  <a href={book.link} alt={book.title}>
                    Goodreads
                  </a>
                </h4>
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
