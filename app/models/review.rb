class Review < ApplicationRecord
  # model association
  belongs_to :restaurant

  # validation
  validates_presence_of :name
end
