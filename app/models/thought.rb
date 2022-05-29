class Thought < ApplicationRecord
    belongs_to :user 
    belongs_to :character
    has_many :thought_reactions
    has_many :comments
    
    def totalvalidations
        self.thought_reactions.validations.length
    end 

    def totalinvalidations
        self.thought_reactions.invalidations.length
    end 
end
