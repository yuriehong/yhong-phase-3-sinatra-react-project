puts "🌱 Seeding data..."

# Seed your database here
# Make 10 users
10.times do
    User.create(name: Faker::Name.name)
  end
  

  

puts "✅ Done seeding!"
