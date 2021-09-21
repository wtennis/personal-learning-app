# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 🌱 🌱 Seeding 🌱 🌱 🌱'

# Notes:
# An instance of FolderContent class (e.g. FolderContent.first) refers to the contents of a parent folder. The parent folder is the folder_id of the FolderContent instance
# (FolderContent.first.folder will give you the parent folder). To get the contents, of the instance, do FolderContent.first.contentsable. 


user1 = User.create(username: "maya", password: "floot", email: "maya@gmail.com")

f1 = Folder.create(user_id: user1.id, name: 'Outside folder', emoji: '♠')
f2 = Folder.create(user_id: user1.id, name: 'Middle folder', emoji: '♣')
f3 = Folder.create(user_id: user1.id, name: 'Baby folder', emoji: '♥')
topLevelFolder = Folder.create(user_id: user1.id, name: 'Top Level Folder', emoji: '🍩')

r1 = Resource.create(name: "Cool resource!", emoji: "🌈", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9koaucRZZ03Qwpj6JiTMPWzcNFNtsxmnc3fyBmKPALTtnbhZBnNyvL133RgiDQhA3BdcG7WM&usqp=CAc")

nest1 = FolderContent.create(folder_id: f1.id, contentsable_id: f2.id, contentsable_type: f2.class.name)
nest2 = FolderContent.create(folder_id: f2.id, contentsable_id: f3.id, contentsable_type: f3.class.name)
nest3 = FolderContent.create(folder_id: f3.id, contentsable_id: r1.id, contentsable_type: 'Resource')

puts '✅ Done Seeding ✅'