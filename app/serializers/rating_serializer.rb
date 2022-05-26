class RatingSerializer < ActiveModel::Serializer
  attributes :id, :found_attractive
  has_one :character
  has_one :user
end
