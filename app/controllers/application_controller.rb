class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get '/animes' do
    animes = Anime.all.order(:title)
    animes.to_json
  end

  get '/animes/:id' do
    anime = Anime.find(params[:id])

    anime.to_json
  end
  delete '/animes/:id' do
    # find the anime using the ID
    anime = Anime.find(params[:id])
    # delete the anime
    anime.destroy
    # send a response with the deleted review as JSON
    anime.to_json
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

  get '/reviews' do
    review = Review.all

    review.to_json
  end
  get '/reviews/:id' do
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

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json
  end

end