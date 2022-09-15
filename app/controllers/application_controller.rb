class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end
  get '/animes' do
    animes = Anime.all.order(:title).limit(10)
    animes.to_json
  end

  get '/animes/:id' do
    anime = Anime.find(params[:id])

    anime.to_json(only: [:id, :title, :genre, :price], include: {
      reviews: { only: [:comment, :rating], include: {
        user: { only: [:name] }
      } }
    })
  end
  delete '/animes/:id' do
    # find the review using the ID
    review = Review.find(params[:id])
    # delete the review
    review.destroy
    # send a response with the deleted review as JSON
    review.to_json
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

end
