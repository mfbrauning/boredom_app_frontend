import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookShow(props) {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const books = props.books;
  const snacks = props.snacks;
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    if (props.books) {
      const book = books.find((b) => b._id === id);
      setEditForm(book);
    }
  }, [props.books]);
  //display snacks
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

          <ul className="snackText">
            {props.snacks.recipes[0].analyzedInstructions[0].steps.map(
              (step) => {
                return <li key={step.index}> {step.step}</li>;
              }
            )}
          </ul>
        </div>
      );
    }
  };

  if (props.books) {
    const book = books.find((b) => b._id === id);

    const handleChange = (event) => {
      const newState = { ...editForm };
      newState[event.target.name] = event.target.value;
      setEditForm(newState);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.updateBooks(editForm, book._id);
      navigate("/books");
    };

    const removeBooks = () => {
      props.deleteBooks(book._id);
      navigate("/books");
    };

    const form = (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.author}
          name="author"
          placeholder="author"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.year}
          name="year"
          placeholder="year"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.genre}
          name="genre"
          placeholder="genre"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.link}
          name="link"
          placeholder="link"
          onChange={handleChange}
        />
        <input className="update" type="submit" value="Update Book" />
      </form>
    );

    return (
      <>
        <div className="book showpages">
          <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} />
          </div>

          <div>
            <h2>{book.author}</h2>
            <h3>{book.year}</h3>
            <h4>{book.genre}</h4>
            <a href={book.link}>Goodreads</a>
          </div>
        </div>
        <section> {newSnack()}</section>
        <section>
          {form} <br />
          <button onClick={removeBooks}>Delete Book</button>
        </section>
      </>
    );
  } else {
    return <h1>No Book Found</h1>;
  }
}

export default BookShow;
