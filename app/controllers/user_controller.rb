class UserController < Sinatra::Base
    set :default_content_type, 'application/json'
 get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end

end