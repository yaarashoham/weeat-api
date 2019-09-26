FactoryBot.define do
  factory :review do
    name {Faker::FunnyName.name}
    rating {Faker::Number.number(digits: 3)}
    comment {Faker::Lorem.paragraph}
  end
end
