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

    def self.more_smashes_than_passes
        Character.select {|character| character.totalsmashes > character.totalpasses}
    end

    def self.more_passes_than_smashes
        Character.select {|character| character.totalsmashes < character.totalpasses}
    end

    def topthoughts 
        self.thoughts.more_validations
    end

    def bottomthoughts
        self.thoughts.more_invalidations
    end 
end
