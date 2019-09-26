FactoryBot.define do
  factory :restaurant do
    name {Faker::Restaurant.name}
    cuisine {Faker::Restaurant.type}
    rating {Faker::Number.number(digits: 3)}
    accept10bis {Faker::Boolean.boolean}
    address {Faker::Address::full_address}
    max_delivery_time {Faker::Number.number(digits: 10)}
    end
end