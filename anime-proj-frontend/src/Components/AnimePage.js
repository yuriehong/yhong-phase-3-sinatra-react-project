import React, {useEffect, useState} from "react";
import Anime from "./Anime";


function AnimePage() {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/animes")
    .then(resp => resp.json())
    .then(data => setAnimes(data)
    )
  },[])
 
  function deleteAnime(id){
    
    fetch(`http://localhost:9292/animes/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify()
    })
    .then(res => res.json())
    .then(data => data)
    
    fetch(`http://localhost:9292/animes`)
      .then(resp => resp.json())
      .then(data => setAnimes(data))
  }
 
  return (
    <main>
        <ul className="cards"> {animes.map(anime => <Anime anime={anime} deleteAnime= {deleteAnime} key ={anime.id} />)} </ul>

    </main>
  );
}

export default AnimePage;
