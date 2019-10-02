require 'rails_helper'

RSpec.describe 'Reviews API' do
  # Initialize the test data
  let!(:restaurant) { create(:restaurant) }
  let!(:reviews) { create_list(:review, 20, restaurant_id: restaurant.id) }
  let(:restaurant_id) { restaurant.id }
  let(:id) { reviews.first.id }

  # Test suite for GET /restaurants/:restaurant_id/reviews
  describe 'GET /restaurants/:restaurant_id/reviews' do
    before { get "/restaurants/#{restaurant_id}/reviews" }

    context 'when restaurant exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all restaurant reviews' do
        expect(json.size).to eq(20)
      end
    end

    context 'when restaurant does not exist' do
      let(:restaurant_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Restaurant/)
      end
    end
  end

  # Test suite for GET /restaurants/:restaurant_id/reviews/:id
  describe 'GET /restaurants/:restaurant_id/reviews/:id' do
    before { get "/restaurants/#{restaurant_id}/reviews/#{id}" }

    context 'when restaurant review exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the review' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when restaurant review does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Review/)
      end
    end
  end

  # Test suite for PUT /restaurants/:restaurant_id/reviews
  describe 'POST /restaurants/:restaurant_id/reviews' do
    let(:valid_attributes) { { name: 'Visit Narnia', done: false } }

    context 'when request attributes are valid' do
      before { post "/restaurants/#{restaurant_id}/reviews", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/restaurants/#{restaurant_id}/reviews", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # Test suite for PUT /restaurants/:restaurant_id/reviews/:id
  describe 'PUT /restaurants/:restaurant_id/reviews/:id' do
    let(:valid_attributes) { { name: 'Mozart' } }

    before { put "/restaurants/#{restaurant_id}/reviews/#{id}", params: valid_attributes }

    context 'when review exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the review' do
        updated_review = Review.find(id)
        expect(updated_review.name).to match(/Mozart/)
      end
    end

    context 'when the review does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Review/)
      end
    end
  end

  # Test suite for DELETE /restaurants/:id
  describe 'DELETE /restaurants/:id' do
    before { delete "/restaurants/#{restaurant_id}/reviews/#{id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end