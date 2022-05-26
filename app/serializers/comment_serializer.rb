class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :thought
  has_one :user
end
