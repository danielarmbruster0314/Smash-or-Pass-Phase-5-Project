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
    main_image:'https://static.wikia.nocookie.net/slimerancher/images/9/91/Viktor140.png/revision/latest?cb=20190620101342',
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
    character6 = Character.create(
    name:'Raoul',
    bio: 'Raoul is described as \'having been petted by his two sisters and his aunt\' and spoiled as a child, but he is very kind-hearted. Raoul has been to sea, and had plans to go on a rescue expedition to the North Pole before falling in love with Christine. Christine decided they would play at being engaged as he was scheduled to leave the country, although she later begged him to take her away from the Phantom, no matter how much she resisted later. He is puzzled and sometimes angered by her allegiance to Erik, and thinks that she may be toying with his heart. He is the youngest member of his family, with an older brother (Philippe De Chagny) and two sisters already married. ',
    role: 'Viscount',
    origin:'The Phantom of the Opera 25th-Anniversary',
    main_image:'https://media.discordapp.net/attachments/780970152497381387/979585153364029500/IMG_8274.jpg?width=404&height=606',
    slide_image_1: 'https://media.discordapp.net/attachments/780970152497381387/979585153871536148/IMG_8277.jpg?width=455&height=605',
    slide_image_2: 'https://media.discordapp.net/attachments/780970152497381387/979585152902631504/IMG_8276.jpg?width=466&height=606',
    slide_image_3: 'https://media.discordapp.net/attachments/780970152497381387/979585153120763944/IMG_8275.jpg?width=404&height=606'
    )
    character7 = Character.create(
    name:'Erik',
    bio: 'Erik was originally an underprivileged child with a knack for magic and illusions. He spent much of his childhood wandering with the travelling circus, being displayed as the "devil\'s child" to those who attended. However, while performing at the Opera House, a young Madame Giry pities him and takes him in as her own. After this, she hides him in the cellars of the opera house.',
    role: '	The Phantom of the Opera
    Opera Ghost
    The Angel of Music',
    origin:'The Phantom of the Opera 25th-Anniversary',
    main_image:'https://computerscience.johncabot.edu/mscaramastra/S2015/CS130-1/Bondi/cs130/project/images/Raminkarimloo.jpg',
    slide_image_1: 'https://i.pinimg.com/originals/98/42/bd/9842bdd194abff504fad90066e52a9d8.png',
    slide_image_2: 'https://bloody-disgusting.com/wp-content/uploads/2020/04/phantom.png',
    slide_image_3: 'https://qph.fs.quoracdn.net/main-qimg-0da6fe2bdda838a3a97f92725c49aa59-lq'
    )
    character8 = Character.create(
    name:'Kanda Fuyuki',
    bio: 'A middle-aged cat fancier. He has long, narrow eyes, so when he is being quiet, he looks scary. He\'s had a complex about it since he was a boy. Kanda-san is the elderly man that adopted Fukumaru despite most people calling him Ugly. Recently widowed and who has a distant relationship with his adult children.',
    role: 'Music Teacher',
    origin:'A Man and His Cat',
    main_image:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649037815i/58404759._UY630_SR1200,630_.jpg',
    slide_image_1: 'https://media.discordapp.net/attachments/780970152497381387/979586234672361502/IMG_8281.jpg',
    slide_image_2: 'https://media.discordapp.net/attachments/780970152497381387/979586234060013578/IMG_8279.jpg?width=498&height=606',
    slide_image_3: 'https://media.discordapp.net/attachments/780970152497381387/979586233778974770/IMG_8278.jpg?width=541&height=606'
    )
    character9 = Character.create(
    name:'Shota Aizawa Eraser Head',
    bio: 'Shota is a very stern and reserved man who has lofty expectations of his students. He is primarily motivated by logic and does not believe in the necessity to maintain a clean-cut appearance or filter his words or ideas for others. He often comes off as cold, apathetic, and impatient, exerting very little energy in most situations, preferring to take naps in his sleeping bag instead.',
    role: 'Pro Hero
    Teacher',
    origin:'My Hero Academia',
    main_image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/537b260e-be18-4136-a113-8812a6ca0170/ddax3k4-fa08d928-c672-42df-b4a5-d5cc0b6ceb9d.jpg/v1/fill/w_1063,h_752,q_70,strp/aizawa_shouta__boku_no_hero_academia__by_edkas_ddax3k4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTA2IiwicGF0aCI6IlwvZlwvNTM3YjI2MGUtYmUxOC00MTM2LWExMTMtODgxMmE2Y2EwMTcwXC9kZGF4M2s0LWZhMDhkOTI4LWM2NzItNDJkZi1iNGE1LWQ1Y2MwYjZjZWI5ZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-KgC61lSw6DyIYww8jcDiGj5F_QwSAcPUHFk4JR4vVc',
    slide_image_1: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/82/Shota_Aizawa_Hero_Costume_%28Anime%29.png/revision/latest',
    slide_image_2: 'https://media.discordapp.net/attachments/780970152497381387/979587635121111040/IMG_8282.jpg',
    slide_image_3: 'https://media.discordapp.net/attachments/780970152497381387/979587634219352115/IMG_8283.webp?width=1213&height=606'
    )
    character10 = Character.create(
    name:'Kugo Sakamata Gang Orca',
    bio: 'Gang Orca appears to be a calm and focused hero who treats every situation seriously. He is friendly and a good comrade towards his fellow Pro Heroes.Gang Orca can put on a menacing and ruthless persona when required.',
    role: 'Pro Hero
    Teacher',
    origin:'My Hero Academia',
    main_image:'https://d.furaffinity.net/art/rabbity/1541005665/1541005665.rabbity_gang.png',
    slide_image_1: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddsp9fm-2ca7e43e-c8ac-49eb-bf57-0b63301ec2d1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRzcDlmbS0yY2E3ZTQzZS1jOGFjLTQ5ZWItYmY1Ny0wYjYzMzAxZWMyZDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UiVi-tpLa7ljWpP3YmcAMlkxmT6pKdIAsx2W7APUQkA',
    slide_image_2: 'https://external-preview.redd.it/8rUQ7XujVmkixowR01FVx4zoUVY7_IdyFSrVFlKrvoA.png?auto=webp&s=0f349a8b134c018a3e1a4ceafe869fe3e02ea6eb',
    slide_image_3: 'https://i.ytimg.com/vi/-hdLaZB0rqo/maxresdefault.jpg'
    )
    character11 = Character.create(
    name:'Juso Moashi Centipeder',
    bio: 'Juso is a gentleman and a very well mannered person.',
    role: '
    Pro Hero, Sidekick',
    origin:'My Hero Academia',
    main_image:'https://cdn.anime-planet.com/characters/primary/centipeder-1.jpg?t=1625887792',
    slide_image_1: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/21/Juzo_Moashi_Hero_Costume_%28Anime%29.png/revision/latest?cb=20190914035854',
    slide_image_2: 'https://i.ibb.co/DpLpwsY/2.jpg',
    slide_image_3: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/49/Centipeder.jpg/revision/latest?cb=20170916003938&path-prefix=es'
    )
    character12 = Character.create(
    name:'Snipe',
    bio: 'Snipe\'s costume, Quirk and his overall mannerisms, including his accent are all similar to that of a traditional cowboy. Snipe is shown to be levelheaded and rational.',
    role: 'Pro Hero
    Teacher',
    origin:'My Hero Academia',
    main_image:'https://media.discordapp.net/attachments/780970152497381387/979783912719015936/IMG_8287.webp?width=772&height=606',
    slide_image_1: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/f1/Snipe_Hero_Costume_%28Anime%29.png/revision/latest',
    slide_image_2: 'https://media.discordapp.net/attachments/780970152497381387/979783913155227688/IMG_8292.webp',
    slide_image_3: 'https://media.discordapp.net/attachments/780970152497381387/979783913742401596/IMG_8289.jpg?width=672&height=606'
    )
    character13 = Character.create(
    name:'Gandalf',
    bio: 'Originally called Olórin, he was accounted as the wisest of the Maiar. With a driven and focused nature, Gandalf was dedicated to achieving his goals. Deliberate and measured, he carefully thought through plans before taking action. Gandalf exists for a specific reason – to ensure that good overcomes evil for the survival of the people (and elves, hobbits, and dwarves) of Middle-earth. His mission is to assist in the defeat of Sauron, and he literally returns from the dead in order to complete this quest.

    Not fire, nor water, nor traitorous wizards, nor orc armies can prevent Gandalf from pushing his companions toward victory. He is wise, stubborn, and never gives up hope. When Denethor gives up on protecting Minas Tirith from Sauron’s army, Gandalf does not hesitate to step in and lead the troops to victory. His ability to take control and restore order to see a task through is just one example of the power of his Judging personality trait. ',
    role: 'Wizard',
    origin:'The Hobbit and The Lord of the Rings',
    main_image:'https://cdn.vox-cdn.com/thumbor/oagylj3SGPcZMBH5BOBoGg8HcR0=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22323904/ian_mckellan_gandalf_4k_lotr.jpg',
    slide_image_1: 'https://cms.qz.com/wp-content/uploads/2018/08/gandalf-lord-of-the-rings-e1534255368438.jpg?quality=75&strip=all&w=900&h=900&crop=1',
    slide_image_2: 'https://www.cnet.com/a/img/resize/b951a5fe546b49106d0f87c94a1360e2653d7111/2014/12/01/89601d70-ca65-4dc7-adfe-f6dbd46d05ba/hobbit-lotr-5-armies-gandalf-hat.jpg?auto=webp&fit=crop&height=675&width=1200',
    slide_image_3: 'https://s26162.pcdn.co/wp-content/uploads/2019/11/gandalf.jpg'
    )
    character14 = Character.create(
    name:'Sans',
    bio: 'Sans is laidback and flippant, often sleeping on the job and taking breaks. His laziness is a combination of fatalism and apathy, as he is aware of timeline resets. Conversely, he suggests that this knowledge could be "a poor excuse for being lazy. He enjoys being mischievous. Sans primarily acts this way towards those he is in good terms with. His antics range from an assortment of illogical, juvenile, and slightly inconvenient pranks. ',
    role: 'Sans The Skeleton.',
    origin:'Undertale',
    main_image:'https://w0.peakpx.com/wallpaper/906/280/HD-wallpaper-sans-undertale-game-sans-tsaoshin-undertale.jpg',
    slide_image_1: 'https://static.wikia.nocookie.net/sans-nagito/images/a/a0/Sansundertale.png/revision/latest?cb=20180324031551',
    slide_image_2: 'https://c.tenor.com/OjndBgDUoOcAAAAC/sans-undertale.gif',
    slide_image_3: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a68aeb61-07fd-4701-8550-576a37a27e19/d9kg0tl-b72a35d9-9ebc-452d-81be-cba1d1f93a28.png/v1/fill/w_1024,h_1198,q_80,strp/sans___undertale___you_re_gonna_have_a_bad_time__by_walkingmelonsaaa_d9kg0tl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE5OCIsInBhdGgiOiJcL2ZcL2E2OGFlYjYxLTA3ZmQtNDcwMS04NTUwLTU3NmEzN2EyN2UxOVwvZDlrZzB0bC1iNzJhMzVkOS05ZWJjLTQ1MmQtODFiZS1jYmExZDFmOTNhMjgucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.H3qeZ0fJx96KAgsFiY-DYTLD0G7T4eP60YRwsLL9wj4'
    )
    character15 = Character.create(
    name:'Miranda Keyes',
    bio: 'Like her father, Miranda Keyes was known for being one of the bravest officers in the UNSC, however slightly inexperienced in comparison. ',
    role: 'Commander',
    origin:'Halo',
    main_image:'https://static.tvtropes.org/pmwiki/pub/images/7269b18f9cf2665fce051755fb4ecde3.png',
    slide_image_1: 'https://static.wikia.nocookie.net/p__/images/2/21/Lieutenant_Commander_Miranda_Keyes.png/revision/latest?cb=20211116165705&path-prefix=protagonist',
    slide_image_2: 'https://external-preview.redd.it/MFTIC3sag6-iJNy532_rIeHVc5smBYAOEG_z239DNhE.png?auto=webp&s=28f079e1baf877d59a0cc1414fd90915ce5081da',
    slide_image_3: 'https://i.ytimg.com/vi/cu79VHLb_T0/maxresdefault.jpg'
    )
    character16 = Character.create(
     name:'Arbiter',
     bio: 'The definition for the word Arbiter is "one who judges," which fits the religious significance of the rank in the time of the Covenant. It was not solely a construct of the Hierarchs, however, as the title of Arbiter was reserved for the greatest warrior-rulers of the Sangheili species.
     In effect, the ancient Arbiters were practically autocrats, who wielded untold authority and influence due to their superior combat capabilities.',
     role: ' Arbiter ',
     origin:'Halo',
     main_image:'https://cdn.vox-cdn.com/thumbor/KoOETUiR9Q25KGF9UfvzI24WYKE=/0x0:1000x563/1200x675/filters:focal(467x189:627x349)/cdn.vox-cdn.com/uploads/chorus_image/image/70128712/H2A_Thel.0.png',
     slide_image_1: 'https://upload.wikimedia.org/wikipedia/en/3/30/Arbiter_crop.png',
     slide_image_2: 'https://halo.wiki.gallery/images/thumb/c/c5/HW2_Render_RipaMoramee-FullBody.png/1200px-HW2_Render_RipaMoramee-FullBody.png',
     slide_image_3: 'https://i.pinimg.com/originals/af/cf/bd/afcfbd5c62d0d886480b50abe2ffb5cb.jpg'
     )
    character17 = Character.create(
     name:'Jega \'Rdomnai',
     bio: 'Jega \'Rdomnai was born on the Sangheili homeworld of Sanghelios on February 19, 2490, eventually enlisting in the Covenant military as is the custom for all male Sangheili.',
     role: 'Blademaster, Spartan Killer',
     origin:'Halo',
     main_image:'https://static.wikia.nocookie.net/villains/images/9/9c/HINF_JegaRdomnai_Intro.png/revision/latest?cb=20211208200417',
     slide_image_1: 'https://halo.wiki.gallery/images/thumb/a/af/HINF_JegaRender.png/1200px-HINF_JegaRender.png',
     slide_image_2: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/12/jega-rdomnai-Cropped.jpg',
     slide_image_3: 'https://www.ggrecon.com/media/ziojiocc/halo-infinite-jega-rdomnai-boss-main.jpg'
     )    
     character18 = Character.create(
     name:'Gravemind',
     bio: 'The Gravemind (Inferi sententia, meaning "Thinking Dead"), is the final stage in the life cycle of the Flood and is the ultimate hivemind of the Flood. It is a near-omniscient creature with complete control over all Flood forms.',
     role: 'Flood',
     origin:'Halo',
     main_image:'https://m.media-amazon.com/images/I/8157GbstGnL._SS500_.jpg',
     slide_image_1: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/12/Halo-Gravemind-Concept-Art.jpeg',
     slide_image_2: 'https://halo.wiki.gallery/images/thumb/3/33/GravemindH2A.jpg/350px-GravemindH2A.jpg',
     slide_image_3: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/halo-gravemind.jpg'
     )       
    character19 = Character.create(
     name:'Reigen Arataka',
     bio: 'Reigen has few to no qualms about manipulating clients, enemies, allies, and even spirits to his own advantage. Conversation is his specialty. Reigen seems to be a man guided by principles and is very socially and emotionally intelligent, as he believes that hurting other people is wrong demonstrating his very honorable and noble side covered by his shady business.',
     role: 'Mentor and Boss',
     origin:'Mob Psycho 100',
     main_image:'https://static.wikia.nocookie.net/sexypedia/images/d/d8/Animereigen.jpg/revision/latest?cb=20200520182449',
     slide_image_1: 'https://cutewallpaper.org/21/reigen-arataka-wallpaper/Mob-Psycho-100-Characters-TV-Tropes.png',
     slide_image_2: 'https://cdn.myanimelist.net/images/characters/16/308364.jpg',
     slide_image_3: 'https://sportshub.cbsistatic.com/i/2021/03/18/4c98a080-1df7-487d-9395-87743e1c22b0/mob-psych-100-reigen-sketch-1223977.jpg'
     )            
    character20 = Character.create(
     name:'Zenyatta',
     bio: 'Zenyatta is an omnic monk who wanders the world in search of spiritual enlightenment. It is said that those who cross his path are never the same again. Ultimately, Zenyatta followed his own path. He chose to leave the monastery and wander the world, helping those he meets to overcome their personal struggles and find inner peace. But, when necessary, he will fight to protect the innocent, be they omnic or human.',
     role: 'Omnic Monk',
     origin:'Overwatch',
     main_image:'https://cdn1.dotesports.com/wp-content/uploads/2018/08/11171853/f63d9158-60d0-4191-bde6-deb783c3ef86.jpg',
     slide_image_1: 'https://www.kindpng.com/picc/m/129-1294695_collection-of-free-zenyatta-transparent-zenyatta-overwatch-png.png',
     slide_image_2: 'https://pm1.narvii.com/6407/53dc6a2431240d507f7faf7645d3ca28a43083cf_hq.jpg',
     slide_image_3: 'https://images.gnwcdn.com/2016/usgamer/Overwatch-Guide-Zenyatta-Header.jpg/EG11/thumbnail/1920x1080/format/jpg/quality/65/21-12-2017-overwatch-how-to-play-zenyatta.jpg'
     )                
    character21 = Character.create(
     name:'Jack Francis Morrison',
     bio: 'Currently the target of an international manhunt, the vigilante known as Soldier: 76 wages a personal war to expose the truth behind Overwatch\'s collapse. Soldier: 76 revealed himself in a string of attacks that crisscrossed the globe, targeting financial institutions, shadowy corporations, and secure Overwatch facilities. Though to the outside world his motives are inscrutable, there are those who claim that he is a former Overwatch agent, determined to shed light on the conspiracy that brought down the organization.',
     role: 'Soldier: 76',
     origin:'Overwatch',
     main_image:'https://cdn1.dotesports.com/wp-content/uploads/2018/08/11150220/ac74e2ca-1e5a-42c5-a876-7d2c70efc369.jpg',
     slide_image_1: 'https://www.pngfind.com/pngs/m/295-2955482_soldier-76-pictures-overwatch-soldier-76-png-transparent.png',
     slide_image_2: 'https://i.pinimg.com/736x/f9/4e/31/f94e317529fedec61ed0a290dc7f196a.jpg',
     slide_image_3: 'https://imageio.forbes.com/specials-images/imageserve/5f7bf03cdd503f978c323fc8/Overwatch-hero-Soldier-76/960x0.jpg?format=jpg&width=960'
     )     
     
     
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





