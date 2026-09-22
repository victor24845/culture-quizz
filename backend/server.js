const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/api/test', (req, res) => {
  res.json({
    message: 'L API Culture Quiz fonctionne !'
  })
})

const categories = [
  {
    id: 1,
    name: 'Culture générale'
  },
  {
    id: 2,
    name: 'Histoire'
  },
  {
    id: 3,
    name: 'Cinéma'
  },
  {
    id: 4,
    name: 'Sport'
  }
]

const questions = [
  // CULTURE GÉNÉRALE
  {
    id: 1,
    categoryId: 1,
    question: 'Quelle est la capitale de la France ?',
    answers: [
      'Paris',
      'Lyon',
      'Marseille',
      'Lille',
      'Bordeaux',
      'Toulouse',
      'Nantes',
      'Nice',
      'Strasbourg',
      'Rennes'
    ],
    correctAnswer: 'Paris'
  },
  {
    id: 2,
    categoryId: 1,
    question: 'Quelle est la planète la plus proche du Soleil ?',
    answers: [
      'Mercure',
      'Vénus',
      'Mars',
      'Jupiter',
      'Saturne',
      'Uranus',
      'Neptune',
      'Terre',
      'Pluton',
      'Cérès'
    ],
    correctAnswer: 'Mercure'
  },
  {
    id: 3,
    categoryId: 1,
    question: 'Quel est le plus grand océan du monde ?',
    answers: [
      'Pacifique',
      'Atlantique',
      'Indien',
      'Arctique',
      'Antarctique',
      'Méditerranée',
      'Caraïbes',
      'Baltique',
      'Rouge',
      'Noir'
    ],
    correctAnswer: 'Pacifique'
  },
  {
    id: 4,
    categoryId: 1,
    question: 'Quel est le symbole chimique de l’or ?',
    answers: [
      'Au',
      'Ag',
      'Fe',
      'Cu',
      'Zn',
      'Pb',
      'Hg',
      'Pt',
      'Sn',
      'Al'
    ],
    correctAnswer: 'Au'
  },
  {
    id: 5,
    categoryId: 1,
    question: 'Combien de côtés possède un hexagone ?',
    answers: [
      '6',
      '5',
      '7',
      '8',
      '4',
      '9',
      '10',
      '3',
      '12',
      '20'
    ],
    correctAnswer: '6'
  },
  {
    id: 6,
    categoryId: 1,
    question: 'Dans quel pays se trouve Rome ?',
    answers: [
      'Italie',
      'Espagne',
      'Grèce',
      'Portugal',
      'France',
      'Allemagne',
      'Autriche',
      'Suisse',
      'Belgique',
      'Croatie'
    ],
    correctAnswer: 'Italie'
  },
  {
    id: 7,
    categoryId: 1,
    question: 'Quelle est la langue officielle du Brésil ?',
    answers: [
      'Portugais',
      'Espagnol',
      'Anglais',
      'Français',
      'Italien',
      'Allemand',
      'Chinois',
      'Arabe',
      'Japonais',
      'Russe'
    ],
    correctAnswer: 'Portugais'
  },
  {
    id: 8,
    categoryId: 1,
    question: 'Combien y a-t-il de continents selon le modèle à 7 continents ?',
    answers: [
      '7',
      '5',
      '6',
      '8',
      '4',
      '9',
      '10',
      '3',
      '11',
      '12'
    ],
    correctAnswer: '7'
  },
  {
    id: 9,
    categoryId: 1,
    question: 'Quel animal est le plus grand mammifère du monde ?',
    answers: [
      'Baleine bleue',
      'Éléphant',
      'Girafe',
      'Rhinocéros',
      'Hippopotame',
      'Orque',
      'Requin blanc',
      'Gorille',
      'Ours polaire',
      'Cachalot'
    ],
    correctAnswer: 'Baleine bleue'
  },
  {
    id: 10,
    categoryId: 1,
    question: 'Quel est le nombre de jours dans une année normale ?',
    answers: [
      '365',
      '364',
      '366',
      '360',
      '370',
      '350',
      '362',
      '367',
      '300',
      '400'
    ],
    correctAnswer: '365'
  },

  // HISTOIRE
  {
    id: 11,
    categoryId: 2,
    question: 'En quelle année a commencé la Révolution française ?',
    answers: [
      '1789',
      '1776',
      '1815',
      '1804',
      '1792',
      '1769',
      '1848',
      '1870',
      '1750',
      '1799'
    ],
    correctAnswer: '1789'
  },
  {
    id: 12,
    categoryId: 2,
    question: 'Qui était le premier empereur des Français ?',
    answers: [
      'Napoléon Bonaparte',
      'Louis XIV',
      'Charlemagne',
      'Louis XVI',
      'François Ier',
      'Henri IV',
      'Clovis',
      'Charles X',
      'Philippe Auguste',
      'Robespierre'
    ],
    correctAnswer: 'Napoléon Bonaparte'
  },
  {
    id: 13,
    categoryId: 2,
    question: 'Quel roi français était surnommé le Roi-Soleil ?',
    answers: [
      'Louis XIV',
      'Louis XVI',
      'Louis XV',
      'Henri IV',
      'François Ier',
      'Charles IX',
      'Louis XIII',
      'Charles X',
      'Philippe IV',
      'Clovis'
    ],
    correctAnswer: 'Louis XIV'
  },
  {
    id: 14,
    categoryId: 2,
    question: 'En quelle année s’est terminée la Seconde Guerre mondiale en Europe ?',
    answers: [
      '1945',
      '1939',
      '1940',
      '1942',
      '1943',
      '1944',
      '1946',
      '1950',
      '1918',
      '1960'
    ],
    correctAnswer: '1945'
  },
  {
    id: 15,
    categoryId: 2,
    question: 'Qui a été le premier président de la Ve République française ?',
    answers: [
      'Charles de Gaulle',
      'François Mitterrand',
      'Georges Pompidou',
      'Valéry Giscard d’Estaing',
      'René Coty',
      'Jacques Chirac',
      'Emmanuel Macron',
      'Nicolas Sarkozy',
      'Vincent Auriol',
      'Gaston Monnerville'
    ],
    correctAnswer: 'Charles de Gaulle'
  },
  {
    id: 16,
    categoryId: 2,
    question: 'Quelle civilisation a construit Machu Picchu ?',
    answers: [
      'Les Incas',
      'Les Mayas',
      'Les Aztèques',
      'Les Romains',
      'Les Grecs',
      'Les Égyptiens',
      'Les Vikings',
      'Les Perses',
      'Les Celtes',
      'Les Gaulois'
    ],
    correctAnswer: 'Les Incas'
  },
  {
    id: 17,
    categoryId: 2,
    question: 'Qui était le premier président des États-Unis ?',
    answers: [
      'George Washington',
      'Abraham Lincoln',
      'Thomas Jefferson',
      'John Adams',
      'Theodore Roosevelt',
      'Franklin Roosevelt',
      'James Madison',
      'John Kennedy',
      'Andrew Jackson',
      'Woodrow Wilson'
    ],
    correctAnswer: 'George Washington'
  },
  {
    id: 18,
    categoryId: 2,
    question: 'Quel mur est tombé en 1989 ?',
    answers: [
      'Le mur de Berlin',
      'Le mur de Chine',
      'Le mur d’Hadrien',
      'Le mur de l’Atlantique',
      'Le mur de Jéricho',
      'Le mur de Varsovie',
      'Le mur de Paris',
      'Le mur de Moscou',
      'Le mur de Rome',
      'Le mur de Prague'
    ],
    correctAnswer: 'Le mur de Berlin'
  },
  {
    id: 19,
    categoryId: 2,
    question: 'Quelle ville antique a été détruite par l’éruption du Vésuve ?',
    answers: [
      'Pompéi',
      'Athènes',
      'Rome',
      'Sparte',
      'Alexandrie',
      'Carthage',
      'Troie',
      'Babylone',
      'Corinthe',
      'Thèbes'
    ],
    correctAnswer: 'Pompéi'
  },
  {
    id: 20,
    categoryId: 2,
    question: 'Qui a découvert l’Amérique en 1492 selon la tradition historique européenne ?',
    answers: [
      'Christophe Colomb',
      'Marco Polo',
      'Vasco de Gama',
      'Magellan',
      'James Cook',
      'Amerigo Vespucci',
      'Hernán Cortés',
      'Jacques Cartier',
      'Francis Drake',
      'Bartolomeu Dias'
    ],
    correctAnswer: 'Christophe Colomb'
  },

  // CINÉMA
  {
    id: 21,
    categoryId: 3,
    question: 'Quel film met en scène le personnage de Jack Dawson ?',
    answers: [
      'Titanic',
      'Avatar',
      'Inception',
      'Gladiator',
      'Interstellar',
      'Rocky',
      'Jaws',
      'Matrix',
      'Alien',
      'The Godfather'
    ],
    correctAnswer: 'Titanic'
  },
  {
    id: 22,
    categoryId: 3,
    question: 'Qui a réalisé le film Inception ?',
    answers: [
      'Christopher Nolan',
      'Steven Spielberg',
      'James Cameron',
      'Quentin Tarantino',
      'Martin Scorsese',
      'Ridley Scott',
      'Tim Burton',
      'George Lucas',
      'Peter Jackson',
      'Denis Villeneuve'
    ],
    correctAnswer: 'Christopher Nolan'
  },
  {
    id: 23,
    categoryId: 3,
    question: 'Quel film raconte l’histoire d’un jeune sorcier nommé Harry Potter ?',
    answers: [
      'Harry Potter',
      'Le Seigneur des anneaux',
      'Star Wars',
      'Narnia',
      'Twilight',
      'Matrix',
      'Avatar',
      'Jurassic Park',
      'Pirates des Caraïbes',
      'Hunger Games'
    ],
    correctAnswer: 'Harry Potter'
  },
  {
    id: 24,
    categoryId: 3,
    question: 'Dans quel film trouve-t-on le personnage de Forrest Gump ?',
    answers: [
      'Forrest Gump',
      'Rain Man',
      'Rocky',
      'Cast Away',
      'The Green Mile',
      'Apollo 13',
      'Philadelphia',
      'Big',
      'Top Gun',
      'Saving Private Ryan'
    ],
    correctAnswer: 'Forrest Gump'
  },
  {
    id: 25,
    categoryId: 3,
    question: 'Quel réalisateur est à l’origine de Jurassic Park ?',
    answers: [
      'Steven Spielberg',
      'Christopher Nolan',
      'James Cameron',
      'George Lucas',
      'Peter Jackson',
      'Tim Burton',
      'Ridley Scott',
      'Robert Zemeckis',
      'Francis Ford Coppola',
      'David Fincher'
    ],
    correctAnswer: 'Steven Spielberg'
  },
  {
    id: 26,
    categoryId: 3,
    question: 'Quel film met en scène des super-héros comme Iron Man et Captain America ?',
    answers: [
      'Avengers',
      'Titanic',
      'Avatar',
      'Inception',
      'Gladiator',
      'Joker',
      'Rocky',
      'The Matrix',
      'Alien',
      'Interstellar'
    ],
    correctAnswer: 'Avengers'
  },
  {
    id: 27,
    categoryId: 3,
    question: 'Quel acteur joue Neo dans Matrix ?',
    answers: [
      'Keanu Reeves',
      'Tom Cruise',
      'Brad Pitt',
      'Leonardo DiCaprio',
      'Matt Damon',
      'Will Smith',
      'Johnny Depp',
      'Christian Bale',
      'Hugh Jackman',
      'Robert Downey Jr.'
    ],
    correctAnswer: 'Keanu Reeves'
  },
  {
    id: 28,
    categoryId: 3,
    question: 'Quel film d’animation met en scène Simba ?',
    answers: [
      'Le Roi Lion',
      'Toy Story',
      'Shrek',
      'Cars',
      'Ratatouille',
      'Aladdin',
      'Mulan',
      'Pocahontas',
      'Tarzan',
      'Hercule'
    ],
    correctAnswer: 'Le Roi Lion'
  },
  {
    id: 29,
    categoryId: 3,
    question: 'Quel film raconte l’histoire d’un parc rempli de dinosaures ?',
    answers: [
      'Jurassic Park',
      'Avatar',
      'Titanic',
      'King Kong',
      'Godzilla',
      'Jumanji',
      'Alien',
      'Predator',
      'The Lost World',
      'Interstellar'
    ],
    correctAnswer: 'Jurassic Park'
  },
  {
    id: 30,
    categoryId: 3,
    question: 'Quel film a remporté l’Oscar du meilleur film en 1998 ?',
    answers: [
      'Titanic',
      'Good Will Hunting',
      'L.A. Confidential',
      'The Full Monty',
      'As Good as It Gets',
      'Saving Private Ryan',
      'Shakespeare in Love',
      'Forrest Gump',
      'Braveheart',
      'The English Patient'
    ],
    correctAnswer: 'Titanic'
  },

  // SPORT
  {
    id: 31,
    categoryId: 4,
    question: 'Combien de joueurs une équipe de football a-t-elle sur le terrain ?',
    answers: [
      '11',
      '10',
      '9',
      '12',
      '8',
      '7',
      '13',
      '14',
      '15',
      '16'
    ],
    correctAnswer: '11'
  },
  {
    id: 32,
    categoryId: 4,
    question: 'Quel pays a remporté la Coupe du monde de football 2018 ?',
    answers: [
      'France',
      'Croatie',
      'Brésil',
      'Allemagne',
      'Argentine',
      'Espagne',
      'Portugal',
      'Belgique',
      'Italie',
      'Angleterre'
    ],
    correctAnswer: 'France'
  },
  {
    id: 33,
    categoryId: 4,
    question: 'Combien de joueurs composent une équipe de basket sur le terrain ?',
    answers: [
      '5',
      '6',
      '7',
      '4',
      '8',
      '9',
      '10',
      '11',
      '12',
      '3'
    ],
    correctAnswer: '5'
  },
  {
    id: 34,
    categoryId: 4,
    question: 'Dans quel sport utilise-t-on un volant ?',
    answers: [
      'Badminton',
      'Tennis',
      'Football',
      'Rugby',
      'Basket-ball',
      'Volley-ball',
      'Golf',
      'Baseball',
      'Handball',
      'Hockey'
    ],
    correctAnswer: 'Badminton'
  },
  {
    id: 35,
    categoryId: 4,
    question: 'Quel pays est associé aux All Blacks ?',
    answers: [
      'Nouvelle-Zélande',
      'Australie',
      'Afrique du Sud',
      'Angleterre',
      'France',
      'Irlande',
      'Écosse',
      'Pays de Galles',
      'Argentine',
      'Italie'
    ],
    correctAnswer: 'Nouvelle-Zélande'
  },
  {
    id: 36,
    categoryId: 4,
    question: 'Combien de sets faut-il généralement gagner pour remporter un match de tennis masculin en Grand Chelem ?',
    answers: [
      '3',
      '2',
      '4',
      '5',
      '6',
      '1',
      '7',
      '8',
      '9',
      '10'
    ],
    correctAnswer: '3'
  },
  {
    id: 37,
    categoryId: 4,
    question: 'Quel sport pratique-t-on sur le Tour de France ?',
    answers: [
      'Cyclisme',
      'Athlétisme',
      'Natation',
      'Tennis',
      'Rugby',
      'Football',
      'Ski',
      'Boxe',
      'Golf',
      'Aviron'
    ],
    correctAnswer: 'Cyclisme'
  },
  {
    id: 38,
    categoryId: 4,
    question: 'Combien de minutes dure un match de football sans prolongation ?',
    answers: [
      '90',
      '80',
      '60',
      '100',
      '70',
      '120',
      '45',
      '75',
      '110',
      '50'
    ],
    correctAnswer: '90'
  },
  {
    id: 39,
    categoryId: 4,
    question: 'Dans quel sport Michael Jordan est-il célèbre ?',
    answers: [
      'Basket-ball',
      'Football',
      'Baseball',
      'Tennis',
      'Golf',
      'Boxe',
      'Hockey',
      'Rugby',
      'Cyclisme',
      'Athlétisme'
    ],
    correctAnswer: 'Basket-ball'
  },
  {
    id: 40,
    categoryId: 4,
    question: 'Quel tournoi de tennis se joue sur terre battue à Paris ?',
    answers: [
      'Roland-Garros',
      'Wimbledon',
      'US Open',
      'Open d’Australie',
      'Monte-Carlo',
      'Indian Wells',
      'Miami Open',
      'Rome Masters',
      'Madrid Open',
      'Davis Cup'
    ],
    correctAnswer: 'Roland-Garros'
  }
]

app.get('/api/categories', (req, res) => {
  res.json(categories)
})

app.get('/api/questions', (req, res) => {
  const categoryId = Number(req.query.category)

  if (categoryId) {
    const filteredQuestions = questions.filter(
      (question) => question.categoryId === categoryId
    )

    return res.json(filteredQuestions)
  }

  res.json(questions)
})

app.listen(PORT, '127.0.0.1', () => {
  console.log(`API démarrée sur http://127.0.0.1:${PORT}`)
})