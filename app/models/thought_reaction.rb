class ThoughtReaction < ApplicationRecord
  belongs_to :thought
  belongs_to :user

  validates :thought_raction, uniqueness: { scope: [:thought_id, :user_id] }


  def self.validations
    ThoughtReaction.where(is_valid: true)
  end

  def self.invalidations
    ThoughtReaction.where(is_valid: false)
  end

end
