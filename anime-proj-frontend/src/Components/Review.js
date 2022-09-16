import React,{useState, useEffect} from "react";

function Review({myReview, handleDelete, setReviews}) {
    console.log(myReview)
    const [user, setUser] = useState({})
    const[showEdit, setShowEdit] = useState(false)
    const [comment, setComment] = useState(myReview.comment)
    const [rate, setRate] = useState(myReview.rating)

    useEffect(() => {
      fetch(`http://localhost:9292/users/${myReview.user_id}`)
      .then(resp => resp.json())
      .then(data => setUser(data))
      },[])
    
      //handling edit review form submission
    function handleEdit(e){
      e.preventDefault()
      //updating review
      fetch(`http://localhost:9292/reviews/${myReview.id}`, {
        method : "PATCH",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(
          {rating: rate,
        comment: comment}
        )
      })
      .then(res => res.json())
      .then(data => data)
      
      //refreshing the reviews data
      fetch(`http://localhost:9292/animes/${myReview.anime_id}/reviews`)
      .then(resp => resp.json())
      .then(data => setReviews(data))

      setShowEdit(!showEdit)

    }
    function handleClick(){
        handleDelete(myReview.id)
    }
  
     
    
    return (
        <div>
          <h3>Rating:</h3> 
          <h4>{myReview.rating} / 10</h4>
          <h3>Comment: </h3>
          <p>{myReview.comment}</p>
          <i>Created by: {user.name}</i>

          <button id = "button" onClick = {handleClick}>Delete Review</button> 
          <button id = "button" onClick = {handleEdit}>Edit Review</button> 
          {showEdit ? 
          <div className="form">
        <form onSubmit={handleEdit}>
          <h3>Edit Review</h3>
          
          <input
            value={rate}
            onChange={(e) => setRate(e.target.value)}
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
            value="Submit edit"
            className="submit"
          />
        </form>
        </div> : <p></p>}


          </div> 
      );
}

export default Review