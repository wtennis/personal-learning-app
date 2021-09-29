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


wood_working = Folder.create(user_id: user1.id, name: 'Woodworking', emoji: '📁')
    online_class = Resource.create(name: "Online woodshop classes", emoji: "🔨", url: "https://www.thesprucecrafts.com/best-online-woodworking-classes-4847301")
    online_class_nest = FolderContent.create(folder_id: wood_working.id, contentsable_id: online_class.id, contentsable_type: online_class.class.name)
    lathes = Resource.create(name: "5 Best Wood Lathes in 2021", emoji: "🪵", url: "https://www.thetoolsquare.com/best-wood-lathe/")
    lathes_nest = FolderContent.create(folder_id: wood_working.id, contentsable_id: lathes.id, contentsable_type: lathes.class.name)

professional_dev = Folder.create(user_id: user1.id, name: 'Professional development', emoji: '📁')
    cm = Resource.create(name: "Classroom Management Lessons from Frank Kulle", emoji: "📚", url: "https://www.nais.org/magazine/independent-school/fall-2014/classroom-management-lessons-from-frank-kulle/")
    cm_nest = FolderContent.create(folder_id: professional_dev.id, contentsable_id: cm.id, contentsable_type: cm.class.name)
    prompts = Folder.create(user_id: user1.id, name: 'Writing prompts', emoji: '📁')
    prompts_nest = FolderContent.create(folder_id: professional_dev.id, contentsable_id: prompts.id, contentsable_type: prompts.class.name)
        narrative_writing_prompts = Resource.create(name: "Narrative Writing Prompts", emoji: "✏️", url: "https://www.nytimes.com/2016/10/20/learning/lesson-plans/650-prompts-for-narrative-and-personal-writing.html")
        narrative_writing_prompts_nest = FolderContent.create(folder_id: prompts.id, contentsable_id: narrative_writing_prompts.id, contentsable_type: narrative_writing_prompts.class.name)
    instruction = Folder.create(user_id: user1.id, name: 'Instruction', emoji: '📁')
    instruction_nest = FolderContent.create(folder_id: professional_dev.id, contentsable_id: instruction.id, contentsable_type: instruction.class.name)
        argument = Resource.create(name: "Strategies for Teaching Argumentation", emoji: "🗣️", url: "https://www.slideshare.net/JillPavich/strategies-for-teaching-argumentation-reasoning-tree")
        argument_nest = FolderContent.create(folder_id: instruction.id, contentsable_id: argument.id, contentsable_type: argument.class.name)
        eqs = Resource.create(name: "What are Essential Questions?", emoji: "❓", url: "https://thesecondprinciple.com/essential-teaching-skills/essential-questions/")
        eqs_nest = FolderContent.create(folder_id: instruction.id, contentsable_id: eqs.id, contentsable_type: eqs.class.name)

guitar_tabs = Folder.create(user_id: user1.id, name: 'Guitar tabs', emoji: '📁')
n1 = Note.create(text: "Remember to practice at least once a week!", belongsable_id: guitar_tabs.id, belongsable_type: guitar_tabs.class.name)
    beatles = Folder.create(user_id: user1.id, name: 'Beatles', emoji: '📁')
    beatles_nest = FolderContent.create(folder_id: guitar_tabs.id, contentsable_id: beatles.id, contentsable_type: beatles.class.name)
        blackBird = Resource.create(name: "Blackbird", emoji: "🐦", url: "https://tabs.ultimate-guitar.com/tab/the_beatles/blackbird_tabs_180986")
        blackBird_nest = FolderContent.create(folder_id: beatles.id, contentsable_id: blackBird.id, contentsable_type: blackBird.class.name)
        here = Resource.create(name: "Here Comes the Sun", emoji: "☀️", url: "https://tabs.ultimate-guitar.com/tab/the-beatles/here-comes-the-sun-tabs-201130")
        here_nest = FolderContent.create(folder_id: beatles.id, contentsable_id: here.id, contentsable_type: here.class.name)
    lumineers = Folder.create(user_id: user1.id, name: 'The Lumineers', emoji: '💾')
    lumineers_nest = FolderContent.create(folder_id: guitar_tabs.id, contentsable_id: lumineers.id, contentsable_type: lumineers.class.name)
        left = Resource.create(name: "Left For Denver", emoji: "🚗", url: "https://tabs.ultimate-guitar.com/tab/the-lumineers/left-for-denver-chords-2797046")
        left_nest = FolderContent.create(folder_id: lumineers.id, contentsable_id: left.id, contentsable_type: left.class.name)
    r1 = Resource.create(name: "Between the Bars by Elliot Smith", emoji: "🎸", url: "https://tabs.ultimate-guitar.com/tab/elliott-smith/between-the-bars-chords-364836")
    r2 = Resource.create(name: "Kansas City by The New Basement Tapes", emoji: "🎸", url: "https://tabs.ultimate-guitar.com/tab/the_new_basement_tapes/kansas_city_chords_1678704")
        bars_nest = FolderContent.create(folder_id: guitar_tabs.id, contentsable_id: r1.id, contentsable_type: r1.class.name)
        kansas_nest = FolderContent.create(folder_id: guitar_tabs.id, contentsable_id: r1.id, contentsable_type: r2.class.name)



puts '✅ Done Seeding ✅'