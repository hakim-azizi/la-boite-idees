CREATE TABLE idea (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    good TINYINT DEFAULT 0 NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    idea (title, description, good)
VALUES (
        'Organiser une soirée jeux de société',
        'Invitez des amis et passez une soirée à jouer à des jeux de société variés. Préparez des snacks et des boissons pour une ambiance conviviale. Essayez des classiques comme le Monopoly ou le Scrabble, ou découvrez des jeux modernes comme Catan ou Dixit. C’est une excellente façon de passer du temps de qualité et de créer des souvenirs amusants ensemble.',
        1
    ),
    (
        'Pique-nique dans un parc',
        'Préparez un panier-repas avec des sandwiches, fruits, et boissons, et allez dans un parc local pour un pique-nique relaxant. Apportez une couverture, des jeux de plein air comme le frisbee ou le badminton, et profitez du soleil. C’est une activité parfaite pour se détendre et profiter de la nature avec des amis ou en famille.',
        1
    ),
    (
        'Visite d\'un musée ou d\'une galerie d\'art',
        'Découvrez de nouvelles expositions et enrichissez vos connaissances culturelles en visitant un musée ou une galerie d’art. Renseignez-vous sur les expositions temporaires ou permanentes, et prenez le temps d’apprécier les œuvres d’art et les artefacts historiques. C’est une excellente activité pour un week-end ou une journée de congé.',
        1
    ),
    (
        'Cours de cuisine entre amis',
        'Choisissez une recette intéressante et apprenez à la préparer ensemble. Partagez des astuces et techniques culinaires, et dégustez vos créations. C’est une activité amusante et éducative qui permet de passer du temps de qualité tout en améliorant vos compétences en cuisine. Essayez des plats internationaux pour une expérience encore plus enrichissante.',
        1
    ),
    (
        'Soirée cinéma à la maison',
        'Choisissez un thème, préparez des snacks et regardez plusieurs films en série pour une soirée cinéma confortable à la maison. Installez-vous confortablement avec des coussins et des couvertures, et créez une ambiance de cinéma en éteignant les lumières. C’est une activité idéale pour un week-end ou une soirée en semaine.',
        1
    ),
    (
        'Randonnée en nature',
        'Explorez les sentiers locaux et profitez de la beauté de la nature tout en faisant de l’exercice. Prenez des photos des paysages, observez la faune et la flore, et respirez l’air frais. C’est une excellente façon de se détendre et de se ressourcer. N’oubliez pas d’apporter de l’eau, des collations et des chaussures confortables.',
        1
    ),
    (
        'Atelier créatif',
        'Essayez-vous à la peinture, à la poterie, ou à la fabrication de bijoux, et laissez libre cours à votre créativité. Réunissez des amis pour un atelier DIY et échangez des idées et des techniques. C’est une excellente façon de se détendre et de créer quelque chose de personnel et unique. Vous pouvez également suivre des tutoriels en ligne pour vous inspirer.',
        1
    ),
    (
        'Bénévolat',
        'Engagez-vous dans une activité bénévole pour aider votre communauté et apporter votre soutien à une cause qui vous tient à cœur. Que ce soit dans une banque alimentaire, un refuge pour animaux ou une association locale, le bénévolat est une façon enrichissante de donner de son temps et de faire une différence. C’est aussi une excellente façon de rencontrer de nouvelles personnes et de développer de nouvelles compétences.',
        1
    ),
    (
        'Jardinage',
        'Plantez des fleurs, des herbes ou des légumes dans votre jardin ou sur votre balcon, et prenez soin de vos plantes en les arrosant et en les nourrissant. Le jardinage est une activité relaxante et gratifiante qui permet de se connecter à la nature et de voir les fruits de son travail. C’est aussi une excellente façon de produire des herbes fraîches pour la cuisine.',
        1
    ),
    (
        'Planification de vacances',
        'Prenez du temps pour planifier un voyage futur, en recherchant des destinations intéressantes, des activités à faire et des hébergements. Faites des recherches sur les cultures locales, la cuisine, et les sites touristiques. La planification de vacances est une activité passionnante qui vous permet de rêver à votre prochaine aventure et de vous préparer pour un voyage mémorable.',
        1
    ),
    (
        'Allô, il y a quelqu\'un ',
        'Posez votre main contre votre oreille comme si vous parliez au téléphone et dites à la personne à côté de vous, "Attends, je ne capte pas bien, tu peux répéter ?". Regardez la personne essayer de comprendre avant de révéler qu\'il n\'y a pas de téléphone. Une blague simple qui provoque souvent des rires et des sourires.',
        0
    ),
    (
        'Le temps s\'est arrêté',
        'Déplacez légèrement les aiguilles de l\'horloge murale en arrière quand personne ne regarde, puis demandez à quelqu\'un l\'heure et voyez sa réaction. Lorsqu\'il réalise que l\'heure est incorrecte, vous pouvez rire ensemble de la confusion. Une blague amusante et sans conséquence.',
        0
    ),
    (
        'Le SMS mystérieux',
        'Envoyez un message texte à un ami en disant "Le paquet est livré, suivez les instructions." sans autre explication. Voir sa réaction perplexe et les questions qu\'il pose. Révélez ensuite que c\'était une blague pour le détendre. Une blague inoffensive qui suscite la curiosité.',
        0
    ),
    (
        'Le cri du chat',
        'Téléchargez un son de miaulement de chat et jouez-le discrètement depuis votre téléphone pour faire croire qu\'il y a un chat dans la pièce. Observez les gens chercher la source du bruit avant de leur montrer votre téléphone. Une blague légère qui fait rire sans nuire.',
        0
    ),
    (
        'La chaise collante',
        'Mettez un petit morceau de scotch double face sur la chaise de quelqu\'un et regardez-le essayer de comprendre pourquoi il ne peut pas se lever facilement. Lorsqu\'il découvre le scotch, éclatez de rire ensemble. Une blague classique et bon enfant.',
        0
    ),
    (
        'Bonjour, Monsieur/Madame X',
        'Appelez intentionnellement un collègue ou un ami par un nom légèrement erroné toute la journée pour voir s\'ils vous corrigent. Lorsque la personne corrige, faites semblant de ne pas comprendre avant de révéler la blague. Une façon amusante de créer des moments de complicité.',
        0
    ),
    (
        'Souris capricieuse',
        'Collez un petit morceau de papier sur le capteur de la souris d\'ordinateur d\'un ami pour qu\'elle ne fonctionne plus correctement. Regardez-le essayer de comprendre le problème avant de retirer le papier et de révéler la blague. Une blague technologique inoffensive et drôle.',
        0
    ),
    (
        'L\'eau qui reste en l\'air',
        'Remplissez un gobelet en plastique avec de l\'eau, couvrez-le avec une carte, puis retournez-le et retirez la carte au-dessus du bureau de quelqu\'un. L\'eau restera dans le gobelet, mais la personne hésitera à le déplacer. Une blague visuelle amusante qui étonne.',
        0
    ),
    (
        'L\'écran fou',
        'Inversez l\'affichage de l\'écran d\'ordinateur de quelqu\'un en utilisant les paramètres de rotation de l\'écran. Observez sa réaction alors qu\'il essaie de comprendre pourquoi l\'affichage est à l\'envers. Une blague simple mais efficace qui provoque des rires.',
        0
    ),
    (
        'La mission impossible',
        'Envoyez un e-mail à un collègue en prétendant qu\'il y a une tâche urgente et très compliquée à accomplir avant de révéler que c\'est une blague. Assurez-vous que la blague est révélée rapidement pour éviter toute frustration. Une blague de bureau qui peut alléger l\'atmosphère.',
        0
    );

CREATE TABLE bad_idea (
    id INT NOT NULL AUTO_INCREMENT,
    id_idea INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (id_idea) REFERENCES idea (id) ON DELETE CASCADE
);

INSERT INTO
    bad_idea (id_idea)
VALUES (11),
    (12),
    (13),
    (14),
    (15),
    (16),
    (17),
    (18),
    (19),
    (20);

CREATE TABLE good_idea (
    id INT NOT NULL AUTO_INCREMENT,
    id_idea INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (id_idea) REFERENCES idea (id) ON DELETE CASCADE
);

INSERT INTO
    good_idea (id_idea)
VALUES (1),
    (2),
    (3),
    (4),
    (5),
    (6),
    (7),
    (8),
    (9),
    (10);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    pseudonym VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hashed_password VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT UX_email UNIQUE (email)
);

INSERT INTO
    user (
        pseudonym,
        email,
        hashed_password
    )
VALUES (


'hakazizi',
'hakazizi@hotmail.com',
'$argon2id$v=19$m=19456,t=2,p=1$w6uJTyInKVc1CtIzy8XScw$3VHtmwsXu7xyxJQh6MznrB+w4yrGHRTEe0utyPOpO0Q'
) 