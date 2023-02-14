import { useState, useEffect } from "react"
import { Input, FormGroup, Label } from "reactstrap"


const PopularGenres = ({ movies, allGenres, setCategorizedMovies }) => {
    const [genres, setGenres] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([])

    const handleCheck = ({ target }) => {
        const { checked, id } = target
        if (checked) {
            setSelectedCategories([...selectedCategories, id])
        } else {
            setSelectedCategories((previous) => previous.filter(genre => genre !== id))
        }

    }

    useEffect(() => {
        const filteredMovies = movies.filter(movie => movie.genre_ids.some(r => selectedCategories.includes(r.toString())))
        console.log("selectedCategories", selectedCategories)
        console.log("New Movies", filteredMovies)
        setCategorizedMovies(filteredMovies)
    }, [selectedCategories]);

    useEffect(() => {
        console.log("New Genres", allGenres)
        //create an array of all popular movie genre ids, reduce the array to only unique values, then reduce the array of unique values into an array of objects where each object contains genre id and name gotten from the the api list of genres.
        const getGenres = movies.reduce((acc, movie) =>
            [...acc, ...movie.genre_ids]
            , [])
            .reduce(
                (uniqueGenres, genre) => {
                    if (uniqueGenres.includes(genre)) {
                        return uniqueGenres
                    } else {
                        return [...uniqueGenres, genre]
                    }
                }
                , [])
            .reduce(
                (namedGenres, genre) => {
                    return [...namedGenres, { id: genre, name: (allGenres.find(genreObject => genreObject.id === genre)).name }]
                }
                , [])
        setGenres(getGenres);
    }, [allGenres])

    return (
        <div className="d-none d-md-block">
            <h5>Genres</h5>
            {
                genres.map((genre, idx) =>

                    <FormGroup key={idx} className="my-3" style={{verticalAlign:'center'}} check>
                        <Input
                            name={genre.name}
                            type="checkbox"
                            id={genre.id}
                            onChange={handleCheck}                          
                        />
                        <Label
                            check
                            for={genre.name}                            
                        >
                            {genre.name}
                        </Label>
                    </FormGroup>

                )
            }
        </div>

    )
}

export default PopularGenres