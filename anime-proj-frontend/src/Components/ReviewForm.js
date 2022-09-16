import React, {useState} from "react"

function ReviewForm({curr_anime, setReviews}){
    // t.integer "rating"
    // t.string "comment"
    // t.integer "anime_id"
    // t.integer "user_id"
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")


  function handleReviewForm(e){
    e.preventDefault()
    let newReview = {
      rating : rating,
      comment: comment,
      anime_id: curr_anime.id,
      user_id: 1,
    }

    fetch("http://localhost:9292/reviews", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => data)
    fetch(`http://localhost:9292/animes/${curr_anime.id}/reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data))

    setRating("")
    setComment("")

}

  return (
    <div className="form">
      <form onSubmit={(e) => handleReviewForm(e)}>
        <h3>Add a New Review!</h3>
        
        <input
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          type="text"
          name="name"
          placeholder="Anime Rating"
          id="description"
        />
               
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="textarea"
          name="name"
          placeholder="Comment"
          className="input-text"
        />
        <br />
        
        <input
          type="submit"
          name="submit"
          value="Add Review"
          className="submit"
        />
      </form>
      </div>
)}
  
export default ReviewForm