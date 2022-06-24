class UserEventsSerializer < ActiveModel::Serializer
  attributes :user_events, :user_musicians

  has_many :events
  has_many :musicians
end
