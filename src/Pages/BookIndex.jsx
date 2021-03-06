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
    <form className="edit" onSubmit={handleSubmit}>
      Add A Book <br/>
      <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="Title"
        onChange={handleChange}
      /> <br/>
      <input
        type="text"
        value={newForm.author}
        name="author"
        placeholder="Author"
        onChange={handleChange}
      /> <br/>
      <input
        type="text"
        value={newForm.year}
        name="year"
        placeholder="Year"
        onChange={handleChange}
      /> <br/>
      <input
        type="text"
        value={newForm.genre}
        name="genre"
        placeholder="Genre"
        onChange={handleChange}
      /><br/>
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="Image"
        onChange={handleChange}
      /><br/>
      <input
        type="text"
        value={newForm.link}
        name="link"
        placeholder="Link"
        onChange={handleChange}
      /><br/>
      <input className="add" type="submit" value="Add Book" />
    </form>
  );

  if (props.books) {
    return (
      <div className="booki">
        <h1>Books</h1>
        <div className="cards">
          {props.books.map((book) => {
            return (
              <div key={book._id} className="book">
                <img src={book.image} alt={book.title} />
                <Link to={`/books/${book._id}`}>
                  <h2> {book.title}</h2>
                </Link>

                <h3>Genre: {book.genre} </h3>

                

                <h4>
                  <a href={book.link} alt={book.title}>
                    Goodreads
                  </a>
                </h4>
              </div>
            );
          })}
        </div>
        {form}
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
