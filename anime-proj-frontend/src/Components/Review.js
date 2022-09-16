import React,{useState, useEffect} from "react";

function Review({myReview, handleDelete}) {
    console.log(myReview)
    const [user, setUser] = useState({})
    function handleClick(){
        handleDelete(myReview.id)
    }
    useEffect(() => {
      fetch(`http://localhost:9292/users/${myReview.user_id}`)
      .then(resp => resp.json())
      .then(data => setUser(data))
      },[])
    
    return (
        <div>
          <h3>Rating:</h3> 
          <h4>{myReview.rating} / 10</h4>
          <h3>Comment: </h3>
          <p>{myReview.comment}</p>
          <i>Created by: {user.name}</i>

          <button id = "button" onClick = {handleClick}>Delete Review</button> 

          </div>
      );
}

export default Review