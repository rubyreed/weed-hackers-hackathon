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
c5.items.create(name: "White Button Mushrooms", price: 15.95, description: "Literally in every store")
c5.items.create(name: "Crimini Mushrooms", price: 14.95, description: "young portobellos")
c5.items.create(name: "Portobello Mushrooms", price: 15.95, description: "Giant mushrooms")
c5.items.create(name: "Shitake Mushrooms", price: 61.95, description: "Oak fungus")
c5.items.create(name: "Oyster Mushroom", price: 15.95, description: "Don't taste like oysters")
c5.items.create(name: "Enoki Mushroom", price: 14.95, description: "long skinny and white")
c5.items.create(name: "Chatnerelle Mushroom", price: 11.95, description: "Fruity odor")
c5.items.create(name: "Porcini Mushrooms", price: 21.95, description: "Meaty Mushroom")
c5.items.create(name: "Shimeji Mushrooms", price: 11.95, description: "Bitter mushroom")
c5.items.create(name: "Morel Mushroom ", price: 251.95, description: "Why are these so expensive?!")

c6 = Category.create(name: "indoor plants", description: "Freshen up the air in your space")
c6.items.create(name: "Paddle Plant", price: 25.95, description: "green wide blade succulent with pink tips")
c6.items.create(name: "Lady Palm", price: 24.95, description: "Long thin blades")
c6.items.create(name: "String of Pearls", price: 25.95, description: "looks like a bunch of big peas")
c6.items.create(name: "Albuca Frizzle Sizzle", price: 22.95, description: "Spring leaf plant")
c6.items.create(name: "Peporomia", price: 26.95, description: "Pink on the edges")
c6.items.create(name: "Pathos", price: 12.95, description: "Viny with big leaves")
c6.items.create(name: "Agloenema Chinese Evergreen", price: 5.95, description: "Big long wide blades")
c6.items.create(name: "Jade Plant", price: 95.95, description: "little paddle leaves")
c6.items.create(name: "Spider Plant", price: 2.95, description: "long blade with white down the middle")
c6.items.create(name: "Aloe", price: 25.95, description: "Cures sunburns I hear (no sunburn in Alaska")

c7 = Category.create(name: "Outdoor Plants", description: "Curb appeal! Don't embarass your neighbors!")
c7.items.create(name: "Daffodil", price: 25.95, description: "Yellow flower with green leaves")
c7.items.create(name: "Wild Rose", price: 5.95, description: "Ouch! stabbies!")
c7.items.create(name: "Impatiens", price: 2.95, description: "Doesn't like sun or wind")
c7.items.create(name: "Hydrangea", price: 4.95, description: "Big balls of colors")
c7.items.create(name: "Adam's Needle", price: 35.95, description: "dangly succulent")
c7.items.create(name: "Columbine", price: 24.95, description: "Tiny dangly flowers")
c7.items.create(name: "Lamb's ear", price: 85.95, description: "That's a weird lamb's ear")
c7.items.create(name: "Blue Fescue", price: 2.95, description: "I think it's basically grass")
c7.items.create(name: "Japanese Forest Grass", price: 5.95, description: "This is definitely grass")
c7.items.create(name: "creeping Liriope", price: 25.95, description: "little purple pipe cleaners")

c8 = Category.create(name: "Planters", description: "Makes a mess without these!")
c8.items.create(name: "Concrete Planter", price: 22.95, description: "Planter made out of concrete")
c8.items.create(name: "Wooden Planter", price: 32.95, description: "Pretty but it will rot")
c8.items.create(name: "TerraCotta Planter", price: 23.95, description: "Pretty standard planter")
c8.items.create(name: "Hanging metal Planter", price: 222.95, description: "Read the name")
c8.items.create(name: "Hanging wood planter", price: 221.95, description: "A wood planter that hangs")
c8.items.create(name: "Hamper planter", price: 22.95, description: "Not for dirty clothes")
c8.items.create(name: "Wicker Planter", price: 28.95, description: "I don't want to weave this")
c8.items.create(name: "Footed Metal Planter", price: 42.95, description: "why does a planter have feet? that's creepy")
c8.items.create(name: "Cool Ceramic Planter", price: 242.95, description: "Wish I was this cool")
c8.items.create(name: "Tire Planter", price: 2.95, description: "Feel good about recycling")

c9 = Category.create(name: "hydroponics", description: "Helps with the 9 months of winter in Alaska")
c9.items.create(name: "Pump", price: 2.95, description: "Push some air")
c9.items.create(name: "Air tube", price: 2.95, description: "Push air through these")
c9.items.create(name: "Diffuser", price: 2.95, description: "spread that air out")
c9.items.create(name: "Bucket", price: 2.95, description: "put the water in this")
c9.items.create(name: "Tower", price: 2.95, description: "Grow the plants vertically for more production")
c9.items.create(name: "Light", price: 2.95, description: "All plants need light I think")
c9.items.create(name: "pH Kit", price: 2.95, description: "Apparently this is important")
c9.items.create(name: "Plugs", price: 2.95, description: "Start the seeds in these plugs")
c9.items.create(name: "Floats", price: 2.95, description: "Float your plugs on top of the water")
c9.items.create(name: "Fertilizer", price: 2.95, description: "Plants need to eat too")

c10 = Category.create(name: "Garden Decor", description: "These Rocks rock!")
c10.items.create(name: "Garden Gnome", price: 12.95, description: "Small, made of porceline")
c10.items.create(name: "Wood Bench", price: 111.35, description: "Reclaimed Wood")
c10.items.create(name: "Kids Swing Set", price: 249.95, description: "Ages 5-12, rated for 149lbs")
c10.items.create(name: "Sundial", price: 9.95, description: "Southern hemisphere only")
c10.items.create(name: "Fake Multch", price: 19.95, description: "Brown, 20lbs per 50sft")
c10.items.create(name: "Decore Lights", price: 10.95, description: "25 lights, white")
c10.items.create(name: "Fake Tombstone", price: 65.95, description: "25 lbs of rock")
c10.items.create(name: "Decorative Fake Tree", price: 49.95, description: "6ft tall, last up to 10 years")
c10.items.create(name: "Fake Rock", price: 5.95, description: "5in long. 2lbs")
c10.items.create(name: "Decorative American Flag", price: 19.95, description: "For 3in diameter poles")

Job.create(title: "Lead Gardener", salary: 25.50)
Job.create(title: "Laborer", salary: 15.50)
Job.create(title: "Sr. Botonist", salary: 57.75)
Job.create(title: "Asst. Bottonist", salary: 32.50)
Job.create(title: "Florist", salary: 22.50)
Job.create(title: "Lady Bug Placer", salary: 17.50)
Job.create(title: "Trimmer", salary: 21.50)
Job.create(title: "Counter Person", salary: 15.50)
Job.create(title: "Flower Salesman", salary: 25.50)
Job.create(title: "Shop layout designer", salary: 18.50)
