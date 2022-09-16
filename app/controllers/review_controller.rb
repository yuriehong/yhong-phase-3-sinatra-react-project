class ReviewController < Sinatra::Base
    set :default_content_type, 'application/json'

 get '/reviews' do
    review = Review.all

    review.to_json
  end
  get '/reviews/:id' do
    review = Review.find(params[:id])
    review.to_json
  end

  get '/animes/:id/reviews' do
    anime = Anime.find(params[:id])
    reviews =anime.reviews
    reviews.to_json
  end
  
  post '/reviews' do
    review = Review.create(
      rating: params[:rating],
      comment: params[:comment],
      anime_id: params[:anime_id],
      user_id: params[:user_id]
    )
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      rating: params[:rating],
      comment: params[:comment])
    review.to_json
  end

  delete '/animes/reviews/:id' do
    # find the review using the ID
    reviews = Review.all
    review = reviews.find(params[:id])
    # delete the review
    review.destroy
    # send a response with the deleted review as JSON
    review.to_json
  end
  

end