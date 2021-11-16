import BookIndex from "../Pages/BookIndex"
import BookShow from "../Pages/BookShow"
import MovieIndex from "../Pages/MovieIndex"
import MovieShow from "../Pages/MovieShow"
import MainPage from "../Pages/MainPage"
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react"


function Body(props){
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






    return <div className="main">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movies" element={<MovieIndex/>}/>
            <Route path="/movies/:id" element={<MovieShow/>}/>
            <Route path="/books" element={<BookIndex books={books} createBooks={createBooks}/>}/>
            <Route path="/books/:id" element={<BookShow/>}/>
        </Routes>
        </div>
}

export default Body