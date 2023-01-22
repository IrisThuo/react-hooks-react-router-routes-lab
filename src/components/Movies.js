import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    {/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map((movie ,index)=>{
      return(
        <div key={index}>
          <h2>Title:{movie.title}</h2>
          <p>Time:{movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre,newIndex)=>{
              return(
                <li key={newIndex}>{genre}</li>
              )
            })}
          </ul>
        </div>
      )
    })}
    </div>);
}

export default Movies;
