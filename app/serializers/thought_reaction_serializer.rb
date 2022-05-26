class ThoughtReactionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :thought
  has_one :user
end
