class Character < ApplicationRecord
    has_many :ratings 
    has_many :thoughts
    has_many :comments, through: :thoughts
    has_many :users, through: :ratings
    def totalsmashes
        self.ratings.smashes.length
    end

    def totalpasses
        self.ratings.passes.length
    end 
end
