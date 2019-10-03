require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  # Association test
  # ensure Restaurant model has a 1:m relationship with the Review model
  it { should have_many(:reviews).dependent(:destroy) }
  # Validation tests
  # ensure columns name and address are present before saving
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:address) }
end
