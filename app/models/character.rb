class Character < ApplicationRecord
    has_many :ratings 
    has_many :thoughts
    has_many :comments, through: :thoughts

    def totalsmashes
        self.ratings.smashes.length
    end

    def totalpasses
        self.ratings.passes.length
    end 
end
