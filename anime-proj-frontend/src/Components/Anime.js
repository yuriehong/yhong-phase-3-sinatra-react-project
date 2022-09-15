import React,{useState} from "react";

function Anime({anime}) {
  console.log(anime)
  const [currAnime, setCurrAnime] = useState({})


  const selectAnime = () => {

    fetch(`http://localhost:9292/animes/${anime.id}`)
    .then(resp => resp.json())
    .then(data => setCurrAnime(data)
    )
}
  
  return (
    <div className="card">
      <img src={anime.img} alt={anime.name} />
      <h3>Anime: {anime.title}</h3>
      <p>Summary: {anime.summary}</p>
      <p>Number of episodes: {anime.episodes}</p>
      <p>Year Released: {anime.year}</p>
      <button id = "reviews" onClick = {selectAnime}>Reviews</button>        
        {/* <ul > {anime.reviews.map(review => <li>{review}</li>)} </ul> */}

      </div>
  );
}

export default Anime;
