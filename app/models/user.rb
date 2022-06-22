class User < ApplicationRecord
  has_many :events
  has_many :musicians, through: :events
end
