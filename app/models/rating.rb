class Rating < ApplicationRecord
  belongs_to :character
  belongs_to :user

  def self.smashes
    Rating.where(found_attractive: true)
  end

  def self.passes 
    Rating.where(found_attractive:false)
  end
end
