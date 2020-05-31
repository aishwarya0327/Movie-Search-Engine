import React from "react"


function Movie({m,defaultImg,key}){
    
return (
    <div className="movie" key = {m.id}>
                        
            <div >
                             
                <img 
                    className="movie-img"
                    src = {`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${m.poster_path}`}
                    onError= {defaultImg} 
                    alt = {m.title + ' poster '}
                />
                    <h3>{m.title}</h3>
                <div>
                    <p><small>RELEASE DATE : {m.release_date}</small></p>
                    <p><small>RATING : {m.vote_average}</small></p>
                    <p className="movie-overview">{m.overview}</p>
                    </div>
            </div>
        </div>
)
}

export default Movie;