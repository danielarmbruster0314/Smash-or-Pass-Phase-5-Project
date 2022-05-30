class User < ApplicationRecord
    has_many :thoughts
    has_many :comments 
    has_many :ratings
    has_many :reactions
    has_secure_password
    has_many :characters, through: :ratings
end
