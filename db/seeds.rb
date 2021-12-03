# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)


category1 = Category.create(name: "Granny Smith", description: "green, sour, and crisp")
category2 = Category.create(variety: "Honeycrisp", description: "golden, sweet and crisp")

category1.items.create(species: "category Maggot", description: "likes fallen categorys, does not have legs")
category1.items.create(species: "Codling Moth", description: "very destructive, native of Eurasia")
category2.items.create(species: "Plum Curculio", description: "looks like a beetle, consumes seeds")
category2.items.create(species: "Fruit Fly", description: "small, black")

Job.create(variety: "Asian", description: "large, juicy, best eaten raw")
Job.create(variety: "Bartlett", description: "yellow when ripe, buttery texture")
