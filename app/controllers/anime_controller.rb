class AnimeController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add your routes here
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

end