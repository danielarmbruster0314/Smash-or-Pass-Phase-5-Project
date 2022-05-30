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

    def self.more_validations
        thoughts =Thought.select {|thought| thought.totalvalidations > thought.totalinvalidations}
        organize= thoughts.sort_by{ |thought| thought.totalvalidations}
        organize.reverse.take(10)
    end

    def self.more_invalidations
        thoughts =Thought.select {|thought| thought.totalvalidations < thought.totalinvalidations}
        organize= thoughts.sort_by{ |thought| thought.totalinvalidations}
        organize.reverse.take(10)
    end
end
