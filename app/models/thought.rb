class Thought < ApplicationRecord
    belongs_to :user 
    belongs_to :character
    has_many :thought_reactions
    
    def totalvalidations
        self.thought_reactions.validations
    end 

    def totalinvalidations
        self.thought_reactions.invalidations
    end 
end
