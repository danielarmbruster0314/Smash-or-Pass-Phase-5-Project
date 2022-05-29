class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :role, :origin, :main_image, :slide_image_1, :slide_image_2, :slide_image_3, :totalsmashes, :totalpasses
  has_many :thoughts, serializer: ThoughtSerializer
  
end
