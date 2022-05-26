# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding users 🤩"
user1 = User.create(username:'daniel0314',password: '123',email: 'danielgundam00@gmail.com', image: 'https://ca.slack-edge.com/T02MD9XTF-U02NVCQG5K4-6a10a5060f6e-72')
user2 = User.create(username: "mathew",password: "12345", email: "mathew@gmail.com", image: "https://pbs.twimg.com/profile_images/1111718438752260096/az-rZVMj_400x400.jpg")
user3 = User.create(username: "john", password: "123" , email: "john@gmail.com" ,image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Rubens_apostel_johannes_grt.jpg/1200px-Rubens_apostel_johannes_grt.jpg")
puts "users have been seeded"

puts "seeding characters 🤣"
character1 = Character.create(
    name:'Viktor Humphries',
    bio: 'Viktor himself states that he is a professional slime rancher, slime scientist and amateur musician. His speech pattern indicates that he is an intellectual, further backing up his profession. He has a keen interest in the slimes that inhabit the Far, Far Range but his studies prevent him from exploring, so he makes requests for various slime species on the Range Exchange.
    He favors efficiency above all else, which is part of the reason he invented Manifold Cubes. He frequently runs simulations as he believes that doing so will "allow him to operate on a timeline that is most optimal", however he soon comes to realise that doing so prevented him from connecting with other people in his life, and soon gets into contact with an old acquaintence. This is the same reason he sometimes forgets to say goodbye to Beatrix when ending communication via his range exchange.
    He loses his fiddle sometime before the events of the game and specifically requests for it returned to him if found, but there is currently no way to find it or return it to him.
    The Loading Screen Texts imply that Viktor suggested creating cube-shaped Slimes, and that he invented a plort-cloning technology, but ultimately ended up destroying it. However, the existence of the Chicken Cloner suggests that its schematics were repurposed by BOb.',
    role: 'Slime Rancher, Slime Scientist, and Amateur Musician',
    origin:'Slime Rancher',
    main_image:'https://static.wikia.nocookie.net/sexypedia/images/4/48/Viktorhumpries.png/revision/latest?cb=20210823035156',
    slide_image_1: 'https://64.media.tumblr.com/29c1154bf1895fdb8557b3676c47a970/92316f9b9ea09bfc-68/s540x810/dca3a125f709e9d6c4fcabc57897f495bcac66f5.png',
    slide_image_2: 'https://64.media.tumblr.com/a825e9ff559d7da12f37fa5a784b9e3c/60456de225ea08bc-bc/s400x600/2372bf9f0bc83fe7d7ab50486761a18cb9ad0ae6.pnj',
    slide_image_3: 'https://64.media.tumblr.com/89b286101b5756fbb537b2fa2ddd2052/60456de225ea08bc-75/s250x400/7a694473745b1326c63f4adaafa40ed4ad42be59.pnj'
    )

    character2 = Character.create(
    name:'Kabu',
    bio: 'In the past, Kabu was a fiery hothead, always striving to achieve the best skills. But contrast to his goal, he kept losing, nearly causing him to give up. After having a battle with Leon, however, he restored his faith and decided to pursue harder on perfecting his skills once again.
    His motto is to keep on training and learning, as long as he is alive.',
    role: 'Gym Leader',
    origin:'Pokémon Sword and Shield',
    main_image:'https://static.zerochan.net/Kabu.%28Pok%C3%A9mon%29.full.3128692.jpg',
    slide_image_1: 'https://poketouch.files.wordpress.com/2019/12/pokemon_sword_and_shield_motostoke_gym_leader_kabu.png?w=640',
    slide_image_2: 'https://cdnen.samurai-gamers.com/wp-content/uploads/2019/12/05194146/sg-pokemon-swsh-champion-cup-kabu.jpg',
    slide_image_3: 'https://i.ytimg.com/vi/5jhVcYxdIJ8/maxresdefault.jpg'
    )
    character3 = Character.create(
    name:'Kento Nanami',
    bio: "Additionally, Nanami is very avid and quick to express his irritation, either on his face and verbally with his words. Nanami is often very impatient. He hates working overtime and is very serious about not going a single minute over what's required of him.Beneath his tough exterior, Nanami is actually quite sociable and doesn't mind intelligent conversations.[6] He's practical and overly serious to an almost comedic point on occasion as well. He claims he only became a jujutsu sorcerer because it's slightly less idiotic than being a salaryman. In the role of one of Yuji's mentors, Nanami is a very big contrast to Satoru, who is far more outspoken and easy-going. Yuji and Satoru describe Nanami as \"gloomy\" and the former didn't believe they would get along at first.Nanami is just a normal man weighed down by the mundane day-to-day practices of life that stole his youth from him. Nanami doesn't believe age or life-threatening experience propels one into adulthood. Instead, he feels that it's the build-up of all the little inconveniences throughout life that transform people into adults.[9] He initially treated Yuji as a child because he didn't want to see him abandon his youth for the sake of being a jujutsu sorcerer. However, Yuji eventually proved himself and forced Nanami to acknowledge him.Nanami knows being a jujutsu sorcerer is a dangerous and demanding job for crazy people, and so he has a hard time respecting people in the profession. Even though Nanami and Satoru are longtime friends, the former claims he doesn't respect Satoru despite their mutual trust in one another. He returned to being a sorcerer from the life of a salaryman because he never felt truly appreciated and didn't believe his work had any significant impact on anyone. In contrast, work as a sorcerer allowed him to build up small bits of appreciation from innocent people. For Nanami, this was more than enough to allow him to live without regrets.Nanami had a similar yet naturally less mature personality while he was a student at Jujutsu High. He saw missions as a burden but his negativity was always offset by his classmate Yu Haibara's extreme optimism.Haibara's death affected Nanami greatly and likely played a role in his initial decision to leave life behind as a jujutsu sorcerer. One of the reasons he believes jujutsu sorcerers are trash is because they must force their comrades to accept that they must willingly sacrifice themselves. He recognizes that this lead him to \"run away\" from the profession, admitting that it's a more befitting phrase than suggesting he \"quit\". Nanami wants to believe he's never been frustrated by his own uselessness, but many of his failures haunt him, such as allowing Haibara to die.",
    role: 'Jujutsu Sorcerer',
    origin:'Jujutsu Kaisen',
    main_image:'https://jutsume.com/images/2021/05/13/kento-nanami-anime-nanami-jujutsu.jpg',
    slide_image_1: 'https://static.zerochan.net/Nanami.Kento.full.3257780.jpg',
    slide_image_2: 'https://i.pinimg.com/736x/e1/7d/7c/e17d7ce2cde6c2fd9f0fe09cb11ade2e.jpg',
    slide_image_3: 'https://sportshub.cbsistatic.com/i/2021/03/18/99053221-6727-4cbb-b2ea-f837f02c4caa/jujutsu-kaisen-kento-nanami-anime-1246960.jpg'
    )
    character4 = Character.create(
    name:'Bruno Madrigal',
    bio: "Bruno is a reclusive, anxious person who tries to manage his anxiety by doing superstitious rituals, such as knocking on wood and throwing salt over his shoulder. He is also a goofy person who enjoys acting and telenovelas and encourages his family members to express themselves instead of bottling up their emotions. He loves his family and is willing to sacrifice his place in the family to protect his youngest niece, Mirabel. He sometimes confronts things that he is fearful of by taking on invented personas such as \"Hernando,\" who is scared of nothing, and \"Jorge\", who makes the spackle.
    Bruno has been absent from his family for 10 years, within the walls of La Casa Madrigal. He believes his ability to see the future causes people to assume the worst of his visions, which is why he left (and which also caused him to become more eccentric). Not much is known about him due to his disappearance before the set timeline of the movie, but it is known that whenever he had a prophecy, he inadvertently hurt or angered the people around him, causing him to retreat from society and eventually from his family to avoid hurting anyone. His gift made him paranoid and fearful of his surroundings, and he developed a sand-based ritual to help focus and control his power.
    Although Bruno has been hidden from his family for a decade, he still shows love and protection towards them, such as by saving Mirabel from a fall after attempting to run from her. He quickly grows a strong bond with her and, after persuasion from Mirabel and encouragement from Antonio, helps Mirabel with her problem by looking into the future for her. He also attempts to defend Mirabel from his mother's judgment after the house falls.",
    role: 'Black Sheep',
    origin:'Encanto',
    main_image:'https://media.vanityfair.com/photos/61f80213289f411b94b26984/2:3/w_749,h_1124,c_limit/encanto-mirabel-bruno.jpg',
    slide_image_1: 'https://upload.wikimedia.org/wikipedia/en/0/02/Bruno_Madrigal.png',
    slide_image_2: 'https://cdn.mos.cms.futurecdn.net/PAFXmHrWCq68gYerDhvApE-320-80.jpeg',
    slide_image_3: 'https://wdwnt.com/wp-content/uploads/2022/01/BrunoMadrigal.jpg'
    )
    character5 = Character.create(
    name:'Master Chief',
    bio: "John is tenacious to complete any mission at hand, and often disregards his personal safety in order to win. Indeed, he has often emerged victorious from situations many would consider impossible. Though even a Spartan is not devoid of fear, John simply acknowledges it and puts it aside, while never openly showing it. He is not shy about expressing caution, however, as shown in his first encounter with the Gravemind. John is generally stoic and taciturn, but not devoid of a sense of humor. He often makes dry remarks about the situation at hand, but this seems to be more frequent when interacting with Cortana than anyone else, such as other Spartans.Although John has difficulty understanding the 'undisciplined' lifestyle of civilians, he is fiercely protective of their lives and humanity as a whole.Despite his life of military indoctrination, John is not entirely submissive to command. On multiple occasions John has directly disobeyed protocol, and even superior officers that contradicted what he personally thought was right.",
    role: ' SPARTAN-II ',
    origin:'Halo',
    main_image:'https://www.looper.com/img/gallery/the-untold-truth-of-halos-master-chief/l-intro-1603465431.jpg',
    slide_image_1: 'https://upload.wikimedia.org/wikipedia/en/4/42/Master_chief_halo_infinite.png',
    slide_image_2: 'https://www.looper.com/img/gallery/what-the-halo-games-dont-tell-you-about-master-chief/l-intro-1649438987.jpg',
    slide_image_3: 'https://www.dexerto.com/wp-content/uploads/2022/02/21/Halo-Master-chief-voice-actor-reveals-his-favorite-ever-lines-FEATURED.jpg'
    )
    # character6 = Character.create(
    # name:'',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character7 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character8 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character9 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character10 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character11 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character12 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character13 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character14 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character15 = Character.create(
    # name:'',
    # race: '',
    # gender: '',
    # bio: '',
    # role: '',
    # origin:'',
    # main_image:'',
    # slide_image_1: '',
    # slide_image_2: '',
    # slide_image_3: ''
    # )
    # character16 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )
    # character17 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )    
    #  character18 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )       
    # character19 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )            
    # character20 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )                
    # character21 = Character.create(
    #  name:'',
    #  race: '',
    #  gender: '',
    #  bio: '',
    #  role: '',
    #  origin:'',
    #  main_image:'',
    #  slide_image_1: '',
    #  slide_image_2: '',
    #  slide_image_3: ''
    #  )                    
puts "characters have been seeded"


puts"seeding thoughts 🤔"
    thought1= Thought.create(content:"What a specimen", user_id: user1.id, character_id: character5.id)
    thought2= Thought.create(content:"What a monster", user_id: user1.id, character_id: character5.id)
puts "thoughts seeded"

puts "seeding comments 💬"
    comment1= Comment.create(content: "I dont agree", thought_id: thought2.id, user_id: user1.id)
    comment1= Comment.create(content: "yeah you crazy", thought_id: thought2.id, user_id: user1.id)
puts "seeded comments"

puts "seeding reaction 🥵"
    reaction1 = ThoughtReaction.create(is_valid: true, user_id: user1.id, thought_id: thought1.id)
puts "reactions seeded"


puts "seeding rating 💫"
    rating1 = Rating.create(found_attractive: true, user_id: user1.id, character_id: character5.id)
puts "seeded ratings"
puts "seeding all done ✅"





