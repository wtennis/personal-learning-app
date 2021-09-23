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

f1 = Folder.create(user_id: user1.id, name: 'Folder 1', emoji: '📁')
f2 = Folder.create(user_id: user1.id, name: 'Folder 2', emoji: '📁')
f3 = Folder.create(user_id: user1.id, name: 'Folder 3', emoji: '📁')
f4 = Folder.create(user_id: user1.id, name: 'I am in folder 1', emoji: '💾')
f5 = Folder.create(user_id: user1.id, name: 'I am also in folder 1', emoji: '💾')
f6 = Folder.create(user_id: user1.id, name: 'I am in folder 2', emoji: '💾')
f7 = Folder.create(user_id: user1.id, name: 'I am also in folder 2', emoji: '💾')



r1 = Resource.create(name: "Cool resource in folder 1!", emoji: "🌈", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9koaucRZZ03Qwpj6JiTMPWzcNFNtsxmnc3fyBmKPALTtnbhZBnNyvL133RgiDQhA3BdcG7WM&usqp=CAc")
r2 = Resource.create(name: "Another resource in folder 1!", emoji: "🍩", url: "https://static4.depositphotos.com/1000350/368/i/950/depositphotos_3686095-stock-photo-chocolate-doughnut.jpg")

nest1 = FolderContent.create(folder_id: f1.id, contentsable_id: f4.id, contentsable_type: f4.class.name)
nest2 = FolderContent.create(folder_id: f1.id, contentsable_id: f5.id, contentsable_type: f5.class.name)
nest3 = FolderContent.create(folder_id: f1.id, contentsable_id: r1.id, contentsable_type: r1.class.name)
nest4 = FolderContent.create(folder_id: f1.id, contentsable_id: r2.id, contentsable_type: r2.class.name)

nest5 = FolderContent.create(folder_id: f2.id, contentsable_id: f6.id, contentsable_type: f6.class.name)
nest6 = FolderContent.create(folder_id: f2.id, contentsable_id: f7.id, contentsable_type: f7.class.name)



puts '✅ Done Seeding ✅'