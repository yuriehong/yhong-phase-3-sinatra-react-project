import React,{useState} from "react";
import Review from "./Review.js"
import ReviewForm from "./ReviewForm"

function Anime({anime, deleteAnime}) {
  const [showReviews, setShowReviews] = useState(false)
  const [reviews, setReviews] = useState([])
  const [showForm, setShowForm] = useState(false)



  function handleReviews() {
    //const rev = document.getElementById('reviews');
      if(showReviews == false){
      fetch(`http://localhost:9292/reviews/${anime.id}`)
      .then(resp => resp.json())
      .then(data => setReviews(data))
     // rev.style.display = "block"

      }
      else{
        console.log("changing to none")
       // rev.style.display = "none"
        setReviews([])
        
      }
      setShowReviews(!showReviews)
      console.log(showReviews)
      
}
function deleteA(){
  deleteAnime(anime.id)
}

  function handleDelete(id){
    
    fetch(`http://localhost:9292/animes/reviews/${id}`, {
      method : "DELETE",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify()
    })
    .then(res => res.json())
    .then(data => data)
    fetch(`http://localhost:9292/reviews/${anime.id}`)
      .then(resp => resp.json())
      .then(data => setReviews(data))
  }
  
function handleNew(){
      setShowForm(!showForm)
}

console.log(reviews)
  
  return (
    <div className="card">
      <button className = "button" id="deleteA" onClick = {deleteA}> X </button> 

      <img src={anime.img} alt={anime.title} width ="100" height = "100"  />
      <h3>Anime: {anime.title}</h3>
      <p>Summary: {anime.summary}</p>
      <p>Number of episodes: {anime.episodes}</p>
      <p>Year Released: {anime.year}</p>
      
      <button className="button"  id ="showR" onClick= {handleReviews}>{showReviews ? "Hide Reviews": "Show Reviews"}</button>
    
      <div id ="reviews" >
        <ul className="cards"> {reviews.map(review => <Review myReview={review} handleDelete = {handleDelete} key ={review.id} />)} </ul>
      </div>
      {!showReviews ? 
      <button className = "button" id="newR" onClick = {handleNew}>New Review</button> : <p></p>
}
      {showForm ? <ReviewForm curr_anime = {anime}/> : ""} 
      
      </div>

  );
}

export default Anime;
