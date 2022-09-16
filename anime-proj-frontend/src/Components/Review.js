import React from "react";

function Review({myReview, handleDelete}) {
    console.log(myReview)
    function handleClick(){
        handleDelete(myReview.id)
    }
    return (
        <div>
          <h3>Rating:</h3> 
          <h4>{myReview.rating} / 10</h4>
          <h3>Comment: </h3>
          <p>{myReview.comment}</p>
          <button id = "button" onClick = {handleClick}>Delete Review</button> 

          </div>
      );
}

export default Review