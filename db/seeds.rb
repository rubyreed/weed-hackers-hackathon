# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'database_cleaner'
DatabaseCleaner.clean_with(:truncation)


c1 = Category.create(name: "Tools", description: "Things to help with the gardening")

c1.items.create(name: "Shovel", price: 20.95, description: "Stick with flat thing at bottom")
c1.items.create(name: "Hose", price: 12.95, description: "Long tube for things to go through")
c1.items.create(name: "Hoe", price: 12.95, description: "Stick with angled flat thing at the bottom")
c1.items.create(name: "Shears", price: 5.95, description: "Choppy Chops")
c1.items.create(name: "Axe", price: 120.95, description: "Big choppy chop")
c1.items.create(name: "Chainsaw", price: 420.95, description: "Electric choppy chop")
c1.items.create(name: "Gloves", price: 30.95, description: "Keep them hands soft!")
c1.items.create(name: "Spade", price: 20.95, description: "Tiny shovel")
c1.items.create(name: "Rake", price: 50.95, description: "Stick with lots of little sticks at the end")
c1.items.create(name: "Hammer", price: 1.95, description: "Maybe for gardening-maybe just in case you get angry")

c2 = Category.create(name: "Cut Flowers", description: "Freshen up your counter")
c2.items.create(name: "Agertum", price: 13.95, description: "Purple frilly")
c2.items.create(name: "Allium", price: 12.95, description: "Purple ball of flowers")
c2.items.create(name: "Aster", price: 11.95, description: "Purple daisy")
c2.items.create(name: "Bird of paradise", price: 14.95, description: "looks nothing like a bird")
c2.items.create(name: "Black eyed susan", price: 15.95, description: "pretty self explanatory black in the middle of yellow")
c2.items.create(name: "Blazing stars", price: 16.95, description: "tall purple pipe cleaner")
c2.items.create(name: "Ranunculus", price: 17.95, description: "pink almost rose")
c2.items.create(name: "Carnations", price: 14.95, description: "If you don't know what this is go elsewhere")
c2.items.create(name: "Lace flower", price: 12.95, description: "flower that looks like it's made out of lace -not original name")
c2.items.create(name: "Large-flowered Tickseed", price: 12.95, description: "big version of small-flowered tickseed probably")


c3 = Category.create(name: "Trees", description: "Leave your mark on the land")
c3.items.create(name: "Apple Tree", price: 112.95, description: "grows apples dummy")
c3.items.create(name: "Pear Tree", price: 122.95, description: "Do I really need to explain this?")
c3.items.create(name: "Common Fig Tree", price: 132.95, description: "The fig tree you see most often")
c3.items.create(name: "Black Ash Tree", price: 142.95, description: "Dark grey ash tree")
c3.items.create(name: "Maple Tree", price: 162.95, description: "Get yo syrup here")
c3.items.create(name: "Neem Tree", price: 142.95, description: "oil is a natural pest repellent")
c3.items.create(name: "Quaking Aspen", price: 162.95, description: "Why is this tree scared? do you have a chainsaw?")
c3.items.create(name: "Mahaogany Tree", price: 142.95, description: "Hope you live somewhere tropical to grow this")
c3.items.create(name: "Birch tree", price: 125.95, description: "Who doesn't love a good birch?")
c3.items.create(name: "Japanese dwarf red maple", price: 152.95, description: "These look great over a pond")

c4 = Category.create(name: "Soils", description: "It all starts here")
c4.items.create(name: "gelisols", price: 52.95, description: "Permafrost-probably not great for gardening")
c4.items.create(name: "Histols", price: 15.95, description: "From bogs")
c4.items.create(name: "Spodonsols", price: 72.95, description: "Apparently these are attractive?")
c4.items.create(name: "Andisols", price: 12.95, description: "volcanic ash")
c4.items.create(name: "Oxisols", price: 82.95, description: "Tropical/Subtropical")
c4.items.create(name: "Vertisols", price: 42.95, description: "Clay-rich soil")
c4.items.create(name: "Aridisols", price: 32.95, description: "for plants that don't like wet or dry")
c4.items.create(name: "Ultisols", price: 52.95, description: "relatively acidic")
c4.items.create(name: "Mollisols", price: 12.95, description: "Prarie and grassland soils")
c4.items.create(name: "Inceptisols", price: 15.95, description: "Not much clay")

c5 = Category.create(name: "Fungi", description: "I don't know, some people are into this weird crap")
c5.items.create(name: "", price: 152.95, description: "")

c6 = Category.create(name: "indoor plants", description: "Freshen up the air in your space")
c7 = Category.create(name: "Outdoor Plants", description: "Curb appeal! Don't embarass your neighbors!")
c8 = Category.create(name: "Planters", description: "Makes a mess without these!")
c9 = Category.create(name: "hydroponics", description: "Helps with the 9 months of winter in Alaska")
c10 = Category.create(name: "Garden Decor", description: "These Rocks rock!")


category1.items.create(name: "category Maggot", price: 175.12, description: "likes fallen categorys, does not have legs")
category1.items.create(species: "Codling Moth", description: "very destructive, native of Eurasia")
category2.items.create(species: "Plum Curculio", description: "looks like a beetle, consumes seeds")
category2.items.create(species: "Fruit Fly", description: "small, black")

Job.create(variety: "Asian", description: "large, juicy, best eaten raw")
Job.create(variety: "Bartlett", description: "yellow when ripe, buttery texture")
