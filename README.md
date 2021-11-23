## When Boredom Strikes App

<img src="https://i.imgur.com/lRGmM0Y.png" alt="a" width="400"/>
When bordem strickes is an application in which users can add a book or a movie they are intrested in watching and can also update if they have watched the movie.

### react router table

| path        | action                                   |
| ----------- | ---------------------------------------- |
| "/movies"   | renders all the movies in the index page |
| "/books"    | renders all the books in the index page  |
| "/movies/id | renders the specified movie              |
| "/books/id" | renders the specified book               |

### list of components

- header
- main
- footer

### components map

app -> header

app -> main -> index

app -> main -> show

### problems we had?

- we were going to add a search feature function
- falling into an error with .find,forEach and .filter

```
  const navigate = useNavigate();
  const [newForm, setNewForm] = useState({
    title: "",
  });
  const handleChange = (event) => {
    const newState = { ...newForm };
    newState[event.target.name] = event.target.value;
    setNewForm(newState);
  };
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };
  const prev = usePrevious(newForm);
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/search");
    setNewForm({
      name: "",
    });
  };
```
