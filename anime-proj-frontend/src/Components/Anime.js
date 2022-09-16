import React,{useState} from "react";
import Review from "./Review.js"
import ReviewForm from "./ReviewForm"

function Anime({anime, deleteAnime}) {
  const [showReviews, setShowReviews] = useState(false)
  const [reviews, setReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showSum, setShowSum] = useState(false)




  function handleReviews() {
    //const rev = document.getElementById('reviews');
      if(showReviews == false){
      fetch(`http://localhost:9292/animes/${anime.id}/reviews`)
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
//deleting a review
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
    fetch(`http://localhost:9292/animes/${anime.id}/reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data))
  }
  
function handleNew(){
      setShowForm(!showForm)
}
function handleSum(){
  setShowSum(!showSum)
}

console.log(reviews)
  
  return (
    <div className="card">
      <button className = "button" id="deleteA" onClick = {deleteA}> X </button> 

      <img src={anime.img} alt={anime.title}  />
      <h3>Anime: {anime.title}</h3>
      <p><button id = "summary" onClick = {handleSum}>Summary</button>{showSum ? anime.summary : ""}</p>
      <p><b>Number of episodes: </b> {anime.episodes}</p>
      <p><b>Year Released: </b> {anime.year}</p>
      
      <button className="button"  id ="showR" onClick= {handleReviews}>{showReviews ? "Hide Reviews": "Show Reviews"}</button>
    
      <div id ="reviews" >
        <ul className="cards"> {reviews.map(review => <Review myReview={review} handleDelete = {handleDelete} setReviews= {setReviews} key ={review.id} />)} </ul>
      </div>
      {!showReviews ? 
      <button className = "button" id="newR" onClick = {handleNew}>New Review</button> : <p></p>
}
      {showForm ? <ReviewForm curr_anime = {anime} setReviews = {setReviews}/> : ""} 
      
      </div>

  );
}

export default Anime;
