class ReviewsController < ApplicationController
  before_action :set_restaurant
  before_action :set_restaurant_review, only: [:show, :update, :destroy]

  # GET /restaurants/:restaurant_id/reviews
  def index
    json_response(@restaurant.reviews)
  end

  # GET /restaurants/:restaurant_id/reviews/:id
  def show
    json_response(@review)
  end

  # POST /restaurants/:restaurant_id/reviews
  def create
    @restaurant.reviews.create!(review_params)
    json_response(@restaurant, :created)
  end

  # PUT /restaurants/:restaurant_id/reviews/:id
  def update
    @review.update(review_params)
    head :no_content
  end

  # DELETE /restaurants/:restaurant_id/reviews/:id
  def destroy
    @review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:name, :rating, :comment)
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

  def set_restaurant_review
    @review = @restaurant.reviews.find_by!(id: params[:id]) if @restaurant
  end
end

