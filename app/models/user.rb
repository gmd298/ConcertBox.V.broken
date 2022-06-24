class User < ApplicationRecord
  has_secure_password
  has_many :events
  has_many :musicians, through: :events

  validates :username, presence: true
  validates :username, uniqueness: true

  def user_events
    events.venue
  end

  def user_musicians
    musicians.name
  end

end
