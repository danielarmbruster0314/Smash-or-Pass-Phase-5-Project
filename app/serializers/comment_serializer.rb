class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user
  has_one :thought
  has_one :user
end
