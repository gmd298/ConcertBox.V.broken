class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :image
  has_many :events
  has_many :musicians, through: :events
end
