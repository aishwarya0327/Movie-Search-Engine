import React,{useState} from "react"
import Movie from "./Movie"


function Query(){
    const [query, setQuery] = useState('')
    const [movie, setMovie] = useState([])

  

    const updateSearch = e => {
            setQuery(e.target.value)
    }

    const submitHandler = async(e) => {
        e.preventDefault()
       
        const url = `https://api.themoviedb.org/3/search/movie?api_key=8940578e829c8f3f1799f085b6c77424&language=en-US&query=${query}&page=1&include_adult=false`
        
        try{
        const res = await fetch(url);
        const data =await res.json();
        setMovie(data.results)
        console.log(data.results)
        }
        catch(err){
            console.log(err)
        }
    
    }
const defaultImg= (e) =>{
    e.target.src='https://i.ibb.co/jG1bmHX/poster.jpg'
}
    
    return(
        
        <div>
            <form className="form" onSubmit={submitHandler}>
                <label className="label">Enter the Search term</label>
                <p><input
                    placeholder="e.g  Kal ho na ho"
                    className="search-bar"
                    onChange = {updateSearch}
                    value={query}
                />
                <button className="button" onClick={submitHandler} type="submit">Submit</button></p>
            </form>

            <div className="movie-list">
                {movie.map(m =>(
                    <Movie m={m} defaultImg={defaultImg} key={m.id}/>
                ))}
            </div>
        </div>
    )
}

export default Query
