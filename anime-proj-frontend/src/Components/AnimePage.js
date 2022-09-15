import React, {useEffect, useState} from "react";
import Anime from "./Anime";


function AnimePage() {
  const [animes, setAnimes] = useState([])
  const [anime, setAnime] = useState({})

  useEffect(() => {
    fetch("http://localhost:9292/animes")
    .then(resp => resp.json())
    .then(data => setAnimes(data)
    )
  },[])
  useEffect(() => {
    fetch("http://localhost:9292/animes/:id")
    .then(resp => resp.json())
    .then(data => setAnime(data)
    )
  },[])
 
  return (
    <main>
        <ul className="cards"> {animes.map(anime => <Anime anime={anime} key ={anime.id} />)} </ul>

    </main>
  );
}

export default AnimePage;
