class User < ActiveRecord::Base
    has_many :reviews
    has_many :animes, through: :reviews
  end
  