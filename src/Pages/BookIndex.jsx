import {useState} from "react"
import {Link} from "react-router-dom"


function BookIndex(props){
    const [newForm, setNewForm] = useState({
        title: "",
        author: "",
        year: "",
        genre: "",
        image: "",
        link: "",
    })

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value 
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createBooks(newForm)
        setNewForm({
            title: "",
            author: "",
            year: "",
            genre: "",
            image: "",
            link: "",
        })
    }


    const form = <form onSubmit={handleSubmit}>
        <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}/>
         <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}/>
         <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}/>
         <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}/>
    </form>

    return <div>Book Index</div>
}

export default BookIndex