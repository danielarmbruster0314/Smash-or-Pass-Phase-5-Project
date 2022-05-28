class Character < ApplicationRecord
    has_many :ratings 
    has_many :thoughts


    def totalsmashes
        self.ratings.smashes
    end

    def totalpasses
        self.ratings.passes
    end 
end
