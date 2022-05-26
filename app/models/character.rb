class Character < ApplicationRecord
    has_many :ratings 
    has_many :thoughts
end
