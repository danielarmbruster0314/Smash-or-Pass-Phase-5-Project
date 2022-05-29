class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :totalvalidations, :totalinvalidations, :comments
  has_one :user
  has_many :comments, serializer: CommentSerializer
end
