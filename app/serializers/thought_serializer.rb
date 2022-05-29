class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :totalvalidations, :totalinvalidations
 has_one :user
end
