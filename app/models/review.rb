class Review < ApplicationRecord
  # model association
  belongs_to :restaurant

  # validation
  validates_presence_of :name

  after_save :calculate_average_rating
  after_destroy :calculate_average_rating

  def calculate_average_rating
    if restaurant.reviews.size > 0
      restaurant.update(rating: restaurant.reviews.average(:rating))
    else
      0
    end
  end
end
