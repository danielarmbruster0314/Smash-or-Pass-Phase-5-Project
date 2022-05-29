class Comment < ApplicationRecord
  belongs_to :thought
  belongs_to :user


  def creator
    self.user 
  end
end
