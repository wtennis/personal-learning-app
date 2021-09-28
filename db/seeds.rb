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

f1 = Folder.create(user_id: user1.id, name: 'Folder 1: top-level', emoji: '📁')
n1 = Note.create(text: "This folder, Folder1: top-level, is a great folder for storing all kinds of information.", belongsable_id: f1.id, belongsable_type: f1.class.name)
    fB = Folder.create(user_id: user1.id, name: 'B: in folder 1', emoji: '💾')
    fB_nest = FolderContent.create(folder_id: f1.id, contentsable_id: fB.id, contentsable_type: fB.class.name)
        fx = Folder.create(user_id: user1.id, name: 'x: in folder B', emoji: '💾')
        fx_nest = FolderContent.create(folder_id: fB.id, contentsable_id: fx.id, contentsable_type: fx.class.name)
    fC = Folder.create(user_id: user1.id, name: 'C: in folder 1', emoji: '💾')
    fC_nest = FolderContent.create(folder_id: f1.id, contentsable_id: fC.id, contentsable_type: fC.class.name)
    r1 = Resource.create(name: "Cool resource in folder 1!", emoji: "🌈", url: "https://www.treehugger.com/thmb/wAF52BlsomxAPkx1yxTMBPjzbKA=/4117x3088/smart/filters:no_upscale()/GettyImages-1176551646-749c5a02ce57460e831fb4e5a2c73d23.jpg")
    r2 = Resource.create(name: "Another resource in folder 1!", emoji: "🍩", url: "https://media.wired.com/photos/6074aa620dfeac35a0cca839/master/pass/Science_donuts_465529983.jpg")
    n2 = Note.create(text: "This is a dope donut picture. Save for later. Maybe it will come in handy for a donut-related coding project", belongsable_id: r2.id, belongsable_type: r2.class.name)

    r1_nest = FolderContent.create(folder_id: f1.id, contentsable_id: r1.id, contentsable_type: r1.class.name)
    r2_nest = FolderContent.create(folder_id: f1.id, contentsable_id: r2.id, contentsable_type: r2.class.name)


f2 = Folder.create(user_id: user1.id, name: 'Folder 2: top-level', emoji: '📁')
    fD = Folder.create(user_id: user1.id, name: 'D: in folder 2', emoji: '💾')
    fD_nest = FolderContent.create(folder_id: f2.id, contentsable_id: fD.id, contentsable_type: fD.class.name)
    fE = Folder.create(user_id: user1.id, name: 'E: in folder 2', emoji: '💾')
    fE_nest = FolderContent.create(folder_id: f2.id, contentsable_id: fE.id, contentsable_type: fE.class.name)

f3 = Folder.create(user_id: user1.id, name: 'Folder 3: top-level', emoji: '📁')


    




puts '✅ Done Seeding ✅'