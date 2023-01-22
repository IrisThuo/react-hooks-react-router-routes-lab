import React from "react";
import { actors } from "../data";

function Actors() {
  return (<div>
    {/*{code here}*/}
    <h1>Actors Page</h1>
    {actors.map((actor,index)=>{
        return(
          <div key={index}>
            <h2>Name:{actor.name}</h2>
            <p>Movies:</p>
            <ul>
              {actor.movies.map((movie,newIndex)=>{
                return(
                  <li key={newIndex}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>);
}

export default Actors;
