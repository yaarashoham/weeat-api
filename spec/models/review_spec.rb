require 'rails_helper'

RSpec.describe Review, type: :model do
  # Association test
  # ensure an item record belongs to a single restaurant record
  it { should belong_to(:restaurant) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }
end
