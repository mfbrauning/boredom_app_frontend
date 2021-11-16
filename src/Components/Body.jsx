import BookIndex from "../Pages/BookIndex"
import BookShow from "../Pages/BookShow"
import MovieIndex from "../Pages/MovieIndex"
import MovieShow from "../Pages/MovieShow"
import MainPage from "../Pages/MainPage"
import { Route, Routes } from "react-router-dom";


function Body(props){
    return <div className="main">
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/movies" element={<MovieIndex/>}/>
            <Route path="/movies/:id" element={<MovieShow/>}/>
            <Route path="/books" element={<BookIndex/>}/>
            <Route path="/books/:id" element={<BookShow/>}/>
        </Routes>
        </div>
}

export default Body