const movies = [
  {
    id: "deadpool-wolverine",
    title: "Deadpool & Wolverine",
    year: "2024",
    release: "26 de julio de 2024",
    runtime: "2:08:37",
    genres: ["Accion", "Comedia", "Superheroes"],
    rating: 7.6,
    director: "Shawn Levy",
    cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
    poster: "assets/posters/deadpool-wolverine.jpg",
    description: "Wade Wilson intenta dejar atras su vida como Deadpool, pero una amenaza multiversal lo obliga a formar una alianza explosiva con Wolverine.",
    featured: true,
    playable: true
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: "2024",
    release: "1 de marzo de 2024",
    runtime: "166 min",
    genres: ["Ciencia ficcion", "Aventura", "Drama"],
    rating: 8.5,
    director: "Denis Villeneuve",
    cast: "Timothee Chalamet, Zendaya, Rebecca Ferguson, Austin Butler",
    poster: "assets/posters/dune-part-two.jpg",
    description: "Paul Atreides se une a Chani y los Fremen mientras busca venganza contra quienes destruyeron a su familia."
  },
  {
    id: "inside-out-2",
    title: "Inside Out 2",
    year: "2024",
    release: "14 de junio de 2024",
    runtime: "96 min",
    genres: ["Animacion", "Familia", "Comedia"],
    rating: 7.6,
    director: "Kelsey Mann",
    cast: "Amy Poehler, Maya Hawke, Kensington Tallman",
    poster: "assets/posters/inside-out-2.jpg",
    description: "La mente de Riley entra en la adolescencia y nuevas emociones llegan para cambiar por completo el centro de control."
  },
  {
    id: "oppenheimer",
    title: "Oppenheimer",
    year: "2023",
    release: "21 de julio de 2023",
    runtime: "181 min",
    genres: ["Drama", "Historia", "Biografia"],
    rating: 8.3,
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr., Florence Pugh",
    poster: "assets/posters/oppenheimer.jpg",
    description: "La historia de J. Robert Oppenheimer y el desarrollo de la bomba atomica durante el Proyecto Manhattan."
  },
  {
    id: "furiosa",
    title: "Furiosa: A Mad Max Saga",
    year: "2024",
    release: "24 de mayo de 2024",
    runtime: "148 min",
    genres: ["Accion", "Aventura", "Ciencia ficcion"],
    rating: 7.5,
    director: "George Miller",
    cast: "Anya Taylor-Joy, Chris Hemsworth, Tom Burke",
    poster: "assets/posters/furiosa.jpg",
    description: "La joven Furiosa es arrebatada de su hogar y debe sobrevivir en el desierto mientras busca el camino de regreso."
  },
  {
    id: "the-batman",
    title: "The Batman",
    year: "2022",
    release: "4 de marzo de 2022",
    runtime: "176 min",
    genres: ["Crimen", "Drama", "Accion"],
    rating: 7.8,
    director: "Matt Reeves",
    cast: "Robert Pattinson, Zoe Kravitz, Paul Dano, Jeffrey Wright",
    poster: "assets/posters/the-batman.jpg",
    description: "Batman investiga una serie de crimenes que exponen la corrupcion profunda de Gotham City."
  },
  {
    id: "spider-verse",
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    release: "2 de junio de 2023",
    runtime: "140 min",
    genres: ["Animacion", "Accion", "Aventura"],
    rating: 8.6,
    director: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
    cast: "Shameik Moore, Hailee Steinfeld, Oscar Isaac",
    poster: "assets/posters/spider-verse.jpg",
    description: "Miles Morales viaja por el multiverso y se enfrenta a una sociedad de Spider-Personas con reglas propias."
  },
  {
    id: "avatar-way-water",
    title: "Avatar: The Way of Water",
    year: "2022",
    release: "16 de diciembre de 2022",
    runtime: "192 min",
    genres: ["Ciencia ficcion", "Aventura", "Fantasia"],
    rating: 7.6,
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    poster: "assets/posters/avatar-way-water.jpg",
    description: "Jake Sully y Neytiri protegen a su familia explorando regiones oceanicas de Pandora."
  },
  {
    id: "top-gun-maverick",
    title: "Top Gun: Maverick",
    year: "2022",
    release: "27 de mayo de 2022",
    runtime: "130 min",
    genres: ["Accion", "Drama"],
    rating: 8.2,
    director: "Joseph Kosinski",
    cast: "Tom Cruise, Miles Teller, Jennifer Connelly, Glen Powell",
    poster: "assets/posters/top-gun-maverick.jpg",
    description: "Maverick regresa para entrenar a una nueva generacion de pilotos en una mision casi imposible."
  },
  {
    id: "john-wick-4",
    title: "John Wick: Chapter 4",
    year: "2023",
    release: "24 de marzo de 2023",
    runtime: "169 min",
    genres: ["Accion", "Crimen", "Thriller"],
    rating: 7.7,
    director: "Chad Stahelski",
    cast: "Keanu Reeves, Donnie Yen, Bill Skarsgard, Ian McShane",
    poster: "assets/posters/john-wick-4.jpg",
    description: "John Wick descubre un camino para derrotar a la Alta Mesa, pero antes debe enfrentar enemigos globales."
  },
  {
    id: "barbie",
    title: "Barbie",
    year: "2023",
    release: "21 de julio de 2023",
    runtime: "114 min",
    genres: ["Comedia", "Fantasia", "Aventura"],
    rating: 6.8,
    director: "Greta Gerwig",
    cast: "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon",
    poster: "assets/posters/barbie.jpg",
    description: "Barbie deja Barbieland y viaja al mundo real para descubrir que significa ser humana."
  },
  {
    id: "godzilla-kong",
    title: "Godzilla x Kong: The New Empire",
    year: "2024",
    release: "29 de marzo de 2024",
    runtime: "115 min",
    genres: ["Accion", "Monstruos", "Ciencia ficcion"],
    rating: 6.3,
    director: "Adam Wingard",
    cast: "Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle",
    poster: "assets/posters/godzilla-kong.jpg",
    description: "Godzilla y Kong enfrentan una amenaza colosal escondida bajo la Tierra Hueca."
  },
  {
    id: "inception",
    title: "Inception",
    year: "2010",
    release: "16 de julio de 2010",
    runtime: "148 min",
    genres: ["Ciencia ficcion", "Accion", "Thriller"],
    rating: 8.8,
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    poster: "assets/posters/inception.jpg",
    description: "Un ladron experto entra en los suenos de sus objetivos para implantar una idea imposible."
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: "2014",
    release: "7 de noviembre de 2014",
    runtime: "169 min",
    genres: ["Ciencia ficcion", "Drama", "Aventura"],
    rating: 8.7,
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
    poster: "assets/posters/interstellar.jpg",
    description: "Un grupo de exploradores viaja a traves de un agujero de gusano para encontrar un nuevo hogar para la humanidad."
  },
  {
    id: "the-dark-knight",
    title: "The Dark Knight",
    year: "2008",
    release: "18 de julio de 2008",
    runtime: "152 min",
    genres: ["Accion", "Crimen", "Drama"],
    rating: 9.0,
    director: "Christopher Nolan",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman",
    poster: "assets/posters/the-dark-knight.jpg",
    description: "Batman enfrenta al Joker, un criminal que busca llevar Gotham al caos absoluto."
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: "1999",
    release: "31 de marzo de 1999",
    runtime: "136 min",
    genres: ["Ciencia ficcion", "Accion"],
    rating: 8.7,
    director: "Lana Wachowski, Lilly Wachowski",
    cast: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    poster: "assets/posters/the-matrix.jpg",
    description: "Neo descubre que la realidad que conoce es una simulacion y se une a la resistencia."
  },
  {
    id: "joker",
    title: "Joker",
    year: "2019",
    release: "4 de octubre de 2019",
    runtime: "122 min",
    genres: ["Drama", "Crimen", "Thriller"],
    rating: 8.4,
    director: "Todd Phillips",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    poster: "assets/posters/joker.jpg",
    description: "Arthur Fleck atraviesa una transformacion oscura en una ciudad que lo ignora."
  },
  {
    id: "avengers-endgame",
    title: "Avengers: Endgame",
    year: "2019",
    release: "26 de abril de 2019",
    runtime: "181 min",
    genres: ["Accion", "Superheroes", "Aventura"],
    rating: 8.4,
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth",
    poster: "assets/posters/avengers-endgame.jpg",
    description: "Los Vengadores se reunen para revertir las consecuencias del chasquido de Thanos."
  },
  {
    id: "avengers-infinity-war",
    title: "Avengers: Infinity War",
    year: "2018",
    release: "27 de abril de 2018",
    runtime: "149 min",
    genres: ["Accion", "Superheroes", "Aventura"],
    rating: 8.4,
    director: "Anthony Russo, Joe Russo",
    cast: "Robert Downey Jr., Chris Hemsworth, Josh Brolin, Zoe Saldana",
    poster: "assets/posters/avengers-infinity-war.jpg",
    description: "Thanos inicia una cruzada para reunir las Gemas del Infinito y alterar el universo."
  },
  {
    id: "spider-man-no-way-home",
    title: "Spider-Man: No Way Home",
    year: "2021",
    release: "17 de diciembre de 2021",
    runtime: "148 min",
    genres: ["Accion", "Superheroes", "Aventura"],
    rating: 8.2,
    director: "Jon Watts",
    cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
    poster: "assets/posters/spider-man-no-way-home.jpg",
    description: "Peter Parker enfrenta visitantes de otros universos despues de que un hechizo sale mal."
  },
  {
    id: "guardians-galaxy-3",
    title: "Guardians of the Galaxy Vol. 3",
    year: "2023",
    release: "5 de mayo de 2023",
    runtime: "150 min",
    genres: ["Accion", "Comedia", "Ciencia ficcion"],
    rating: 7.9,
    director: "James Gunn",
    cast: "Chris Pratt, Zoe Saldana, Dave Bautista, Karen Gillan",
    poster: "assets/posters/guardians-galaxy-3.jpg",
    description: "Los Guardianes emprenden una mision emocional para salvar a Rocket y proteger a su familia."
  },
  {
    id: "black-panther",
    title: "Black Panther",
    year: "2018",
    release: "16 de febrero de 2018",
    runtime: "134 min",
    genres: ["Accion", "Superheroes", "Aventura"],
    rating: 7.3,
    director: "Ryan Coogler",
    cast: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira",
    poster: "assets/posters/black-panther.jpg",
    description: "T'Challa regresa a Wakanda para asumir el trono y defender el futuro de su nacion."
  },
  {
    id: "lord-rings-fellowship",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001",
    release: "19 de diciembre de 2001",
    runtime: "178 min",
    genres: ["Fantasia", "Aventura", "Accion"],
    rating: 8.8,
    director: "Peter Jackson",
    cast: "Elijah Wood, Ian McKellen, Viggo Mortensen, Sean Astin",
    poster: "assets/posters/lord-rings-fellowship.jpg",
    description: "Frodo inicia una travesia para destruir el Anillo Unico y salvar la Tierra Media."
  },
  {
    id: "harry-potter-stone",
    title: "Harry Potter and the Sorcerer's Stone",
    year: "2001",
    release: "16 de noviembre de 2001",
    runtime: "152 min",
    genres: ["Fantasia", "Familia", "Aventura"],
    rating: 7.6,
    director: "Chris Columbus",
    cast: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman",
    poster: "assets/posters/harry-potter-stone.jpg",
    description: "Harry descubre que es mago y entra a Hogwarts, donde inicia una vida llena de magia."
  },
  {
    id: "jurassic-world",
    title: "Jurassic World",
    year: "2015",
    release: "12 de junio de 2015",
    runtime: "124 min",
    genres: ["Aventura", "Accion", "Ciencia ficcion"],
    rating: 6.9,
    director: "Colin Trevorrow",
    cast: "Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio",
    poster: "assets/posters/jurassic-world.jpg",
    description: "Un parque de dinosaurios completamente operativo enfrenta el escape de una criatura modificada."
  },
  {
    id: "mission-impossible-fallout",
    title: "Mission: Impossible - Fallout",
    year: "2018",
    release: "27 de julio de 2018",
    runtime: "147 min",
    genres: ["Accion", "Thriller", "Aventura"],
    rating: 7.7,
    director: "Christopher McQuarrie",
    cast: "Tom Cruise, Henry Cavill, Ving Rhames, Rebecca Ferguson",
    poster: "assets/posters/mission-impossible-fallout.jpg",
    description: "Ethan Hunt corre contra el tiempo despues de que una mision sale mal."
  },
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    year: "2015",
    release: "15 de mayo de 2015",
    runtime: "120 min",
    genres: ["Accion", "Aventura", "Ciencia ficcion"],
    rating: 8.1,
    director: "George Miller",
    cast: "Tom Hardy, Charlize Theron, Nicholas Hoult",
    poster: "assets/posters/mad-max-fury-road.jpg",
    description: "Max y Furiosa atraviesan el desierto en una persecucion salvaje por la libertad."
  },
  {
    id: "knives-out",
    title: "Knives Out",
    year: "2019",
    release: "27 de noviembre de 2019",
    runtime: "130 min",
    genres: ["Misterio", "Comedia", "Crimen"],
    rating: 7.9,
    director: "Rian Johnson",
    cast: "Daniel Craig, Ana de Armas, Chris Evans, Jamie Lee Curtis",
    poster: "assets/posters/knives-out.jpg",
    description: "Un detective investiga la muerte de un novelista en una familia llena de secretos."
  },
  {
    id: "parasite",
    title: "Parasite",
    year: "2019",
    release: "30 de mayo de 2019",
    runtime: "132 min",
    genres: ["Drama", "Thriller", "Comedia"],
    rating: 8.5,
    director: "Bong Joon Ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
    poster: "assets/posters/parasite.jpg",
    description: "Una familia se infiltra en la vida de una familia rica con consecuencias inesperadas."
  },
  {
    id: "1917",
    title: "1917",
    year: "2019",
    release: "25 de diciembre de 2019",
    runtime: "119 min",
    genres: ["Drama", "Guerra", "Accion"],
    rating: 8.2,
    director: "Sam Mendes",
    cast: "George MacKay, Dean-Charles Chapman, Mark Strong",
    poster: "assets/posters/1917.jpg",
    description: "Dos soldados deben cruzar territorio enemigo para entregar un mensaje vital."
  },
  {
    id: "ford-v-ferrari",
    title: "Ford v Ferrari",
    year: "2019",
    release: "15 de noviembre de 2019",
    runtime: "152 min",
    genres: ["Drama", "Accion", "Biografia"],
    rating: 8.1,
    director: "James Mangold",
    cast: "Matt Damon, Christian Bale, Jon Bernthal, Caitriona Balfe",
    poster: "assets/posters/ford-v-ferrari.jpg",
    description: "Un disenador y un piloto construyen un auto capaz de vencer a Ferrari en Le Mans."
  },
  {
    id: "la-la-land",
    title: "La La Land",
    year: "2016",
    release: "9 de diciembre de 2016",
    runtime: "128 min",
    genres: ["Romance", "Drama", "Musical"],
    rating: 8.0,
    director: "Damien Chazelle",
    cast: "Ryan Gosling, Emma Stone, John Legend",
    poster: "assets/posters/la-la-land.jpg",
    description: "Una actriz y un musico persiguen sus suenos mientras viven una historia de amor en Los Angeles."
  },
  {
    id: "whiplash",
    title: "Whiplash",
    year: "2014",
    release: "10 de octubre de 2014",
    runtime: "107 min",
    genres: ["Drama", "Musical"],
    rating: 8.5,
    director: "Damien Chazelle",
    cast: "Miles Teller, J.K. Simmons, Paul Reiser",
    poster: "assets/posters/whiplash.jpg",
    description: "Un joven baterista enfrenta la exigencia extrema de un profesor obsesionado con la perfeccion."
  },
  {
    id: "coco",
    title: "Coco",
    year: "2017",
    release: "22 de noviembre de 2017",
    runtime: "105 min",
    genres: ["Animacion", "Familia", "Musical"],
    rating: 8.4,
    director: "Lee Unkrich, Adrian Molina",
    cast: "Anthony Gonzalez, Gael Garcia Bernal, Benjamin Bratt",
    poster: "assets/posters/coco.jpg",
    description: "Miguel viaja al Mundo de los Muertos para descubrir la historia de su familia."
  },
  {
    id: "soul",
    title: "Soul",
    year: "2020",
    release: "25 de diciembre de 2020",
    runtime: "100 min",
    genres: ["Animacion", "Familia", "Drama"],
    rating: 8.0,
    director: "Pete Docter, Kemp Powers",
    cast: "Jamie Foxx, Tina Fey, Graham Norton",
    poster: "assets/posters/soul.jpg",
    description: "Un musico de jazz descubre nuevas preguntas sobre la vida, el proposito y la inspiracion."
  },
  {
    id: "toy-story-4",
    title: "Toy Story 4",
    year: "2019",
    release: "21 de junio de 2019",
    runtime: "100 min",
    genres: ["Animacion", "Familia", "Aventura"],
    rating: 7.7,
    director: "Josh Cooley",
    cast: "Tom Hanks, Tim Allen, Annie Potts, Tony Hale",
    poster: "assets/posters/toy-story-4.jpg",
    description: "Woody, Buzz y sus amigos conocen a Forky y emprenden una nueva aventura."
  },
  {
    id: "frozen-2",
    title: "Frozen II",
    year: "2019",
    release: "22 de noviembre de 2019",
    runtime: "103 min",
    genres: ["Animacion", "Familia", "Aventura"],
    rating: 6.8,
    director: "Chris Buck, Jennifer Lee",
    cast: "Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff",
    poster: "assets/posters/frozen-2.jpg",
    description: "Elsa y Anna viajan mas alla de Arendelle para descubrir el origen de sus poderes."
  },
  {
    id: "encanto",
    title: "Encanto",
    year: "2021",
    release: "24 de noviembre de 2021",
    runtime: "102 min",
    genres: ["Animacion", "Familia", "Musical"],
    rating: 7.2,
    director: "Byron Howard, Jared Bush",
    cast: "Stephanie Beatriz, Maria Cecilia Botero, John Leguizamo",
    poster: "assets/posters/encanto.jpg",
    description: "Mirabel busca salvar la magia de su familia en una casa extraordinaria en Colombia."
  },
  {
    id: "turning-red",
    title: "Turning Red",
    year: "2022",
    release: "11 de marzo de 2022",
    runtime: "100 min",
    genres: ["Animacion", "Familia", "Comedia"],
    rating: 7.0,
    director: "Domee Shi",
    cast: "Rosalie Chiang, Sandra Oh, Ava Morse",
    poster: "assets/posters/turning-red.jpg",
    description: "Mei se convierte en un enorme panda rojo cada vez que sus emociones se desbordan."
  },
  {
    id: "a-quiet-place",
    title: "A Quiet Place",
    year: "2018",
    release: "6 de abril de 2018",
    runtime: "90 min",
    genres: ["Terror", "Thriller", "Drama"],
    rating: 7.5,
    director: "John Krasinski",
    cast: "Emily Blunt, John Krasinski, Millicent Simmonds",
    poster: "assets/posters/a-quiet-place.jpg",
    description: "Una familia debe vivir en silencio para sobrevivir a criaturas que cazan por sonido."
  },
  {
    id: "get-out",
    title: "Get Out",
    year: "2017",
    release: "24 de febrero de 2017",
    runtime: "104 min",
    genres: ["Terror", "Misterio", "Thriller"],
    rating: 7.8,
    director: "Jordan Peele",
    cast: "Daniel Kaluuya, Allison Williams, Bradley Whitford",
    poster: "assets/posters/get-out.jpg",
    description: "Un joven descubre secretos inquietantes durante una visita a la familia de su novia."
  },
  {
    id: "it-2017",
    title: "It",
    year: "2017",
    release: "8 de septiembre de 2017",
    runtime: "135 min",
    genres: ["Terror", "Drama", "Misterio"],
    rating: 7.2,
    director: "Andy Muschietti",
    cast: "Jaeden Martell, Bill Skarsgard, Finn Wolfhard",
    poster: "assets/posters/it-2017.jpg",
    description: "Un grupo de ninos enfrenta a una entidad aterradora que toma forma de payaso."
  },
  {
    id: "scream-2022",
    title: "Scream",
    year: "2022",
    release: "14 de enero de 2022",
    runtime: "114 min",
    genres: ["Terror", "Misterio", "Thriller"],
    rating: 6.3,
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    cast: "Neve Campbell, Courteney Cox, Melissa Barrera, Jenna Ortega",
    poster: "assets/posters/scream-2022.jpg",
    description: "Una nueva ola de ataques revive el misterio de Ghostface en Woodsboro."
  },
  {
    id: "the-conjuring",
    title: "The Conjuring",
    year: "2013",
    release: "19 de julio de 2013",
    runtime: "112 min",
    genres: ["Terror", "Misterio", "Thriller"],
    rating: 7.5,
    director: "James Wan",
    cast: "Vera Farmiga, Patrick Wilson, Lili Taylor, Ron Livingston",
    poster: "assets/posters/the-conjuring.jpg",
    description: "Los investigadores Warren ayudan a una familia acosada por una presencia oscura."
  },
  {
    id: "the-hunger-games",
    title: "The Hunger Games",
    year: "2012",
    release: "23 de marzo de 2012",
    runtime: "142 min",
    genres: ["Aventura", "Accion", "Ciencia ficcion"],
    rating: 7.2,
    director: "Gary Ross",
    cast: "Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth",
    poster: "assets/posters/the-hunger-games.jpg",
    description: "Katniss Everdeen participa en una competencia mortal televisada por el Capitolio."
  },
  {
    id: "twilight",
    title: "Twilight",
    year: "2008",
    release: "21 de noviembre de 2008",
    runtime: "122 min",
    genres: ["Romance", "Fantasia", "Drama"],
    rating: 5.3,
    director: "Catherine Hardwicke",
    cast: "Kristen Stewart, Robert Pattinson, Taylor Lautner",
    poster: "assets/posters/twilight.jpg",
    description: "Bella Swan descubre un romance peligroso con Edward Cullen, un vampiro inmortal."
  },
  {
    id: "me-before-you",
    title: "Me Before You",
    year: "2016",
    release: "3 de junio de 2016",
    runtime: "110 min",
    genres: ["Romance", "Drama"],
    rating: 7.4,
    director: "Thea Sharrock",
    cast: "Emilia Clarke, Sam Claflin, Janet McTeer",
    poster: "assets/posters/me-before-you.jpg",
    description: "Una joven cuidadora cambia la vida de un hombre que ha perdido la esperanza."
  },
  {
    id: "the-notebook",
    title: "The Notebook",
    year: "2004",
    release: "25 de junio de 2004",
    runtime: "123 min",
    genres: ["Romance", "Drama"],
    rating: 7.8,
    director: "Nick Cassavetes",
    cast: "Ryan Gosling, Rachel McAdams, James Garner",
    poster: "assets/posters/the-notebook.jpg",
    description: "Una historia de amor atraviesa anos, diferencias sociales y recuerdos imborrables."
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    year: "2022",
    release: "25 de marzo de 2022",
    runtime: "140 min",
    genres: ["Ciencia ficcion", "Comedia", "Accion"],
    rating: 7.8,
    director: "Daniel Kwan, Daniel Scheinert",
    cast: "Michelle Yeoh, Ke Huy Quan, Stephanie Hsu, Jamie Lee Curtis",
    poster: "assets/posters/everything-everywhere.jpg",
    description: "Una mujer comun descubre conexiones con multiples universos y versiones de si misma."
  },
  {
    id: "the-social-network",
    title: "The Social Network",
    year: "2010",
    release: "1 de octubre de 2010",
    runtime: "120 min",
    genres: ["Drama", "Biografia"],
    rating: 7.8,
    director: "David Fincher",
    cast: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    poster: "assets/posters/the-social-network.jpg",
    description: "La creacion de Facebook desata conflictos de amistad, poder y propiedad intelectual."
  },
  {
    id: "fight-club",
    title: "Fight Club",
    year: "1999",
    release: "15 de octubre de 1999",
    runtime: "139 min",
    genres: ["Drama", "Thriller"],
    rating: 8.8,
    director: "David Fincher",
    cast: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    poster: "assets/posters/fight-club.jpg",
    description: "Un hombre desencantado funda un club secreto que evoluciona hacia algo incontrolable."
  },
  {
    id: "se7en",
    title: "Se7en",
    year: "1995",
    release: "22 de septiembre de 1995",
    runtime: "127 min",
    genres: ["Crimen", "Thriller", "Misterio"],
    rating: 8.6,
    director: "David Fincher",
    cast: "Brad Pitt, Morgan Freeman, Gwyneth Paltrow, Kevin Spacey",
    poster: "assets/posters/se7en.jpg",
    description: "Dos detectives persiguen a un asesino que basa sus crimenes en los siete pecados capitales."
  },
  {
    id: "shutter-island",
    title: "Shutter Island",
    year: "2010",
    release: "19 de febrero de 2010",
    runtime: "138 min",
    genres: ["Thriller", "Misterio", "Drama"],
    rating: 8.2,
    director: "Martin Scorsese",
    cast: "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley",
    poster: "assets/posters/shutter-island.jpg",
    description: "Un detective investiga una desaparicion en un hospital psiquiatrico aislado."
  },
  {
    id: "the-wolf-wall-street",
    title: "The Wolf of Wall Street",
    year: "2013",
    release: "25 de diciembre de 2013",
    runtime: "180 min",
    genres: ["Biografia", "Comedia", "Drama"],
    rating: 8.2,
    director: "Martin Scorsese",
    cast: "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
    poster: "assets/posters/the-wolf-wall-street.jpg",
    description: "Jordan Belfort construye un imperio financiero marcado por excesos, ambicion y fraude."
  },
  {
    id: "gladiator",
    title: "Gladiator",
    year: "2000",
    release: "5 de mayo de 2000",
    runtime: "155 min",
    genres: ["Accion", "Drama", "Historia"],
    rating: 8.5,
    director: "Ridley Scott",
    cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
    poster: "assets/posters/gladiator.jpg",
    description: "Un general romano traicionado lucha como gladiador para vengar a su familia."
  },
  {
    id: "the-revenant",
    title: "The Revenant",
    year: "2015",
    release: "25 de diciembre de 2015",
    runtime: "156 min",
    genres: ["Drama", "Aventura", "Accion"],
    rating: 8.0,
    director: "Alejandro G. Inarritu",
    cast: "Leonardo DiCaprio, Tom Hardy, Domhnall Gleeson",
    poster: "assets/posters/the-revenant.jpg",
    description: "Un explorador sobrevive en condiciones extremas para volver y ajustar cuentas."
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: "2017",
    release: "6 de octubre de 2017",
    runtime: "164 min",
    genres: ["Ciencia ficcion", "Drama", "Misterio"],
    rating: 8.0,
    director: "Denis Villeneuve",
    cast: "Ryan Gosling, Harrison Ford, Ana de Armas, Sylvia Hoeks",
    poster: "assets/posters/blade-runner-2049.jpg",
    description: "Un blade runner descubre un secreto capaz de alterar el futuro de la sociedad."
  },
  {
    id: "arrival",
    title: "Arrival",
    year: "2016",
    release: "11 de noviembre de 2016",
    runtime: "116 min",
    genres: ["Ciencia ficcion", "Drama", "Misterio"],
    rating: 7.9,
    director: "Denis Villeneuve",
    cast: "Amy Adams, Jeremy Renner, Forest Whitaker",
    poster: "assets/posters/arrival.jpg",
    description: "Una linguista intenta comunicarse con visitantes extraterrestres antes de que estalle una crisis global."
  },
  {
    id: "edge-of-tomorrow",
    title: "Edge of Tomorrow",
    year: "2014",
    release: "6 de junio de 2014",
    runtime: "113 min",
    genres: ["Accion", "Ciencia ficcion"],
    rating: 7.9,
    director: "Doug Liman",
    cast: "Tom Cruise, Emily Blunt, Bill Paxton",
    poster: "assets/posters/edge-of-tomorrow.jpg",
    description: "Un soldado revive el mismo dia de batalla una y otra vez mientras aprende a vencer al enemigo."
  }
];

const grid = document.querySelector("#movieGrid");
const searchInput = document.querySelector("#searchInput");
const chips = document.querySelector("#genreChips");
const panelEmpty = document.querySelector("#panelEmpty");
const panelContent = document.querySelector("#panelContent");
const loginOverlay = document.querySelector("#loginOverlay");
const loginForm = document.querySelector("#loginForm");
const welcomeOverlay = document.querySelector("#welcomeOverlay");
const welcomeEyebrow = document.querySelector("#welcomeEyebrow");
const welcomeTitle = document.querySelector("#welcomeTitle");
const welcomeMessage = document.querySelector("#welcomeMessage");
const playerModal = document.querySelector("#playerModal");
const trailerFrame = document.querySelector("#trailerFrame");
const profileList = document.querySelector("#profileList");
const recommendationList = document.querySelector("#recommendationList");
const profileName = document.querySelector("#profileName");
const profileVector = document.querySelector("#profileVector");
const activeUserName = document.querySelector("#activeUserName");
const activeUserFacts = document.querySelector("#activeUserFacts");
const touchedList = document.querySelector("#touchedList");
const personalRecs = document.querySelector("#personalRecs");
const changeProfileButton = document.querySelector("#changeProfileButton");
const voteGrid = document.querySelector("#voteGrid");
const voteSummary = document.querySelector("#voteSummary");
const voteStatus = document.querySelector("#voteStatus");
const commentsFeed = document.querySelector("#commentsFeed");
const surveyForm = document.querySelector("#surveyForm");
const surveyStatus = document.querySelector("#surveyStatus");
const SESSION_KEY = "moviesSprSessionActive";

let activeGenre = "Todos";
let selectedId = null;
let selectedProfile = "ana";
let currentUser = null;
let touchedMovies = [];
let weeklyVotes = {};
let weeklyVoters = {};
let comments = [];

const profiles = [
  {
    id: "ana",
    name: "Ana, 22",
    vector: "Accion + Ciencia ficcion + Marvel",
    genres: ["Accion", "Ciencia ficcion", "Superheroes"],
    seen: ["oppenheimer", "the-batman"]
  },
  {
    id: "luis",
    name: "Luis, 31",
    vector: "Drama + Historia + Crimen",
    genres: ["Drama", "Historia", "Crimen", "Biografia"],
    seen: ["top-gun-maverick", "barbie"]
  },
  {
    id: "mariana",
    name: "Mariana, 17",
    vector: "Animacion + Familia + Aventura",
    genres: ["Animacion", "Familia", "Aventura", "Comedia"],
    seen: ["john-wick-4", "oppenheimer"]
  }
];

const voteCandidates = [
  "superman-2025",
  "fantastic-four-first-steps",
  "mission-impossible-final-reckoning",
  "jurassic-world-rebirth",
  "avatar-fire-ash",
  "blade-runner-2049"
];

const extraVoteMovies = [
  {
    id: "superman-2025",
    title: "Superman",
    year: "2025",
    release: "11 de julio de 2025",
    runtime: "129 min",
    genres: ["Accion", "Superheroes", "Aventura"],
    rating: 7.9,
    director: "James Gunn",
    cast: "David Corenswet, Rachel Brosnahan, Nicholas Hoult",
    poster: "assets/posters/superman-2025.jpg",
    description: "Clark Kent equilibra su herencia kryptoniana con su vida humana mientras protege al mundo."
  },
  {
    id: "fantastic-four-first-steps",
    title: "The Fantastic Four: First Steps",
    year: "2025",
    release: "25 de julio de 2025",
    runtime: "125 min",
    genres: ["Accion", "Superheroes", "Ciencia ficcion"],
    rating: 7.8,
    director: "Matt Shakman",
    cast: "Pedro Pascal, Vanessa Kirby, Joseph Quinn, Ebon Moss-Bachrach",
    poster: "assets/posters/fantastic-four-first-steps.jpg",
    description: "La primera familia de Marvel enfrenta una amenaza cosmica que pone a prueba su union."
  },
  {
    id: "mission-impossible-final-reckoning",
    title: "Mission: Impossible - The Final Reckoning",
    year: "2025",
    release: "23 de mayo de 2025",
    runtime: "169 min",
    genres: ["Accion", "Thriller", "Aventura"],
    rating: 7.7,
    director: "Christopher McQuarrie",
    cast: "Tom Cruise, Hayley Atwell, Ving Rhames, Simon Pegg",
    poster: "assets/posters/mission-impossible-final-reckoning.jpg",
    description: "Ethan Hunt encara una mision definitiva donde cada decision puede cambiar el futuro."
  },
  {
    id: "jurassic-world-rebirth",
    title: "Jurassic World Rebirth",
    year: "2025",
    release: "2 de julio de 2025",
    runtime: "133 min",
    genres: ["Aventura", "Accion", "Ciencia ficcion"],
    rating: 7.4,
    director: "Gareth Edwards",
    cast: "Scarlett Johansson, Mahershala Ali, Jonathan Bailey",
    poster: "assets/posters/jurassic-world-rebirth.jpg",
    description: "Una nueva expedicion se adentra en territorio prohibido para investigar dinosaurios sobrevivientes."
  },
  {
    id: "avatar-fire-ash",
    title: "Avatar: Fire and Ash",
    year: "2025",
    release: "19 de diciembre de 2025",
    runtime: "190 min",
    genres: ["Ciencia ficcion", "Aventura", "Fantasia"],
    rating: 8.1,
    director: "James Cameron",
    cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
    poster: "assets/posters/avatar-fire-ash.jpg",
    description: "Pandora revela nuevas culturas y conflictos que llevan a la familia Sully a otro limite."
  }
];

movies.push(...extraVoteMovies);

function loadSession() {
  try {
    currentUser = JSON.parse(localStorage.getItem("moviesSprUser")) || null;
    touchedMovies = JSON.parse(localStorage.getItem("moviesSprTouched")) || [];
    weeklyVotes = JSON.parse(localStorage.getItem("moviesSprWeeklyVotes")) || {};
    weeklyVoters = JSON.parse(localStorage.getItem("moviesSprWeeklyVoters")) || {};
    comments = JSON.parse(localStorage.getItem("moviesSprComments")) || [];
  } catch {
    currentUser = null;
    touchedMovies = [];
    weeklyVotes = {};
    weeklyVoters = {};
    comments = [];
  }
  voteCandidates.forEach((id, index) => {
    if (typeof weeklyVotes[id] !== "number") {
      weeklyVotes[id] = [18, 15, 12, 9, 7, 5][index] || 0;
    }
  });
}

function saveSession() {
  localStorage.setItem("moviesSprUser", JSON.stringify(currentUser));
  localStorage.setItem("moviesSprTouched", JSON.stringify(touchedMovies));
  localStorage.setItem("moviesSprWeeklyVotes", JSON.stringify(weeklyVotes));
  localStorage.setItem("moviesSprWeeklyVoters", JSON.stringify(weeklyVoters));
  localStorage.setItem("moviesSprComments", JSON.stringify(comments));
}

function activateSession() {
  sessionStorage.setItem(SESSION_KEY, "true");
}

function hasActiveSession() {
  return sessionStorage.getItem(SESSION_KEY) === "true";
}

function showLogin() {
  prefillLoginForm();
  loginOverlay.classList.remove("hidden");
  welcomeOverlay.classList.add("hidden");
}

function hideAccessModals() {
  loginOverlay.classList.add("hidden");
  welcomeOverlay.classList.add("hidden");
}

function prefillLoginForm() {
  if (!currentUser) {
    return;
  }

  document.querySelector("#userNameInput").value = currentUser.name || "";
  document.querySelector("#userEmailInput").value = currentUser.email || "";
  document.querySelector("#userAgeInput").value = currentUser.age || "";
  document.querySelector("#favoriteGenreInput").value = currentUser.favoriteGenre || "";
}

function showPersonalWelcome() {
  if (!currentUser) {
    showLogin();
    return;
  }

  loginOverlay.classList.add("hidden");
  welcomeEyebrow.textContent = `Bienvenido, ${currentUser.name}`;
  welcomeTitle.textContent = "Tu catalogo personalizado esta listo.";
  welcomeMessage.textContent = `Hoy Movies SPR preparo una ruta para ti con peliculas de ${currentUser.favoriteGenre}. Toca portadas, descubre nuevas historias y deja que tus gustos hagan magia en tus recomendaciones.`;
  welcomeOverlay.classList.remove("hidden");
}

function userGenreVector() {
  const values = new Set();
  if (currentUser?.favoriteGenre) {
    values.add(currentUser.favoriteGenre);
  }
  touchedMovies
    .map(id => movies.find(movie => movie.id === id))
    .filter(Boolean)
    .forEach(movie => movie.genres.forEach(genre => values.add(genre)));
  return [...values];
}

function registerTouchedMovie(movieId) {
  touchedMovies = [movieId, ...touchedMovies.filter(id => id !== movieId)].slice(0, 8);
  saveSession();
  renderUserDashboard();
}

function userRecommendationScore(movie) {
  if (!currentUser) {
    return movie.rating / 10;
  }

  const age = Number(currentUser.age);
  const userGenres = userGenreVector();
  const genreHits = movie.genres.filter(genre => userGenres.includes(genre)).length;
  const genreScore = genreHits / Math.max(1, userGenres.length);
  const ratingScore = movie.rating / 10;
  const freshness = Number(movie.year) >= 2024 ? 0.10 : 0.03;
  const featuredBoost = movie.featured ? 0.08 : 0;
  const touchedPenalty = touchedMovies.includes(movie.id) ? -0.22 : 0;
  const ageBoost = age < 18 && (movie.genres.includes("Animacion") || movie.genres.includes("Familia")) ? 0.12 : 0;
  return (genreScore * 0.58) + (ratingScore * 0.27) + freshness + featuredBoost + touchedPenalty + ageBoost;
}

function userRecommendationReason(movie) {
  const userGenres = userGenreVector();
  const matches = movie.genres.filter(genre => userGenres.includes(genre));
  if (matches.length) {
    return `Coincide con tus gustos: ${matches.join(", ")}.`;
  }
  if (movie.rating >= 8) {
    return "Sugerida por alta valoracion del catalogo.";
  }
  return "Sugerencia para explorar algo distinto.";
}

function renderUserDashboard() {
  if (!activeUserName || !activeUserFacts || !touchedList || !personalRecs) {
    return;
  }

  if (!currentUser) {
    activeUserName.textContent = "Invitado Movies SPR";
    activeUserFacts.innerHTML = `<span>Sin perfil</span>`;
    touchedList.innerHTML = `<p class="empty-note">Inicia sesion para registrar tus peliculas tocadas.</p>`;
    personalRecs.innerHTML = `<p class="empty-note">Tus recomendaciones apareceran aqui.</p>`;
    return;
  }

  activeUserName.textContent = currentUser.name;
  activeUserFacts.innerHTML = `
    <span>${currentUser.email}</span>
    <span>${currentUser.age} años</span>
    <span>${currentUser.favoriteGenre}</span>
  `;

  const touched = touchedMovies
    .map(id => movies.find(movie => movie.id === id))
    .filter(Boolean);

  touchedList.innerHTML = touched.length
    ? touched.map(movie => `
      <div class="touched-item">
        <img src="${movie.poster}" alt="Poster ${movie.title}">
        <span><strong>${movie.title}</strong><small>${movie.genres.join(", ")}</small></span>
      </div>
    `).join("")
    : `<p class="empty-note">Aun no seleccionaste peliculas. Haz clic en una portada para personalizar tu catalogo.</p>`;

  const recs = movies
    .map(movie => ({ movie, score: userRecommendationScore(movie) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  personalRecs.innerHTML = recs.map(item => `
    <button class="personal-rec" type="button" data-id="${item.movie.id}">
      <img src="${item.movie.poster}" alt="Poster ${item.movie.title}">
      <span>
        <strong>${item.movie.title}</strong>
        <small>${Math.round(item.score * 100)}% afinidad. ${userRecommendationReason(item.movie)}</small>
      </span>
    </button>
  `).join("");
}

function weeklyWinner() {
  return voteCandidates
    .map(id => ({ movie: movies.find(item => item.id === id), votes: weeklyVotes[id] || 0 }))
    .filter(item => item.movie)
    .sort((a, b) => b.votes - a.votes)[0];
}

function userVoteId() {
  return currentUser?.email ? weeklyVoters[currentUser.email.toLowerCase()] : null;
}

function renderVoting() {
  if (!voteGrid || !voteSummary || !voteStatus) {
    return;
  }

  const winner = weeklyWinner();
  const selectedVote = userVoteId();
  const totalVotes = voteCandidates.reduce((sum, id) => sum + (weeklyVotes[id] || 0), 0);

  voteSummary.innerHTML = winner ? `
    <article class="winner-card">
      <img src="${winner.movie.poster}" alt="Poster ${winner.movie.title}">
      <div>
        <p class="eyebrow">Ganando esta semana</p>
        <h3>${winner.movie.title}</h3>
        <p>${winner.votes} votos de ${totalVotes}. Si mantiene el primer lugar, sera la proxima pelicula destacada.</p>
      </div>
    </article>
  ` : "";

  voteGrid.innerHTML = voteCandidates.map(id => {
    const movie = movies.find(item => item.id === id);
    const votes = weeklyVotes[id] || 0;
    const percent = totalVotes ? Math.round((votes / totalVotes) * 100) : 0;
    const voted = selectedVote === id;
    return `
      <article class="vote-card ${voted ? "voted" : ""}">
        <img src="${movie.poster}" alt="Poster ${movie.title}">
        <div class="vote-card-body">
          <h3>${movie.title}</h3>
          <span>${movie.year} · ${movie.genres.slice(0, 2).join(" / ")}</span>
          <div class="vote-meter"><span style="width:${percent}%"></span></div>
          <strong>${votes} votos · ${percent}%</strong>
          <button class="primary-action" type="button" data-vote="${movie.id}" ${selectedVote ? "disabled" : ""}>
            ${voted ? "Tu voto" : "Votar"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  if (!currentUser) {
    voteStatus.textContent = "Crea tu cuenta para votar por la siguiente pelicula destacada.";
  } else if (selectedVote) {
    const movie = movies.find(item => item.id === selectedVote);
    voteStatus.textContent = `Tu voto semanal esta registrado para ${movie.title}.`;
  } else {
    voteStatus.textContent = "Tu cuenta tiene 1 voto disponible esta semana.";
  }
}

function submitVote(movieId) {
  if (!currentUser) {
    showLogin();
    return;
  }

  const email = currentUser.email.toLowerCase();
  if (weeklyVoters[email]) {
    voteStatus.textContent = "Esta cuenta ya uso su voto semanal.";
    return;
  }

  weeklyVotes[movieId] = (weeklyVotes[movieId] || 0) + 1;
  weeklyVoters[email] = movieId;
  saveSession();
  renderVoting();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-PE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function seedComments() {
  if (comments.length) {
    return;
  }

  comments = [
    {
      id: "comment-1",
      name: "Valeria",
      email: "valeria@movies.com",
      text: "La cartelera se siente completa y las recomendaciones salen rapido. Deadpool & Wolverine queda perfecto como destacada.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
      reactions: { up: ["ana@movies.com", "luis@movies.com"], down: [] },
      replies: [
        {
          id: "reply-1",
          name: "Marco",
          email: "marco@movies.com",
          text: "Si, el panel de preferencias ayuda bastante para encontrar algo rapido.",
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString()
        }
      ]
    },
    {
      id: "comment-2",
      name: "Diego",
      email: "diego@movies.com",
      text: "Me gusto poder votar por la siguiente pelicula. Se siente como una comunidad real.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      reactions: { up: ["sofia@movies.com"], down: [] },
      replies: []
    }
  ];
  saveSession();
}

function renderComments() {
  if (!commentsFeed) {
    return;
  }

  if (!comments.length) {
    commentsFeed.innerHTML = `<p class="empty-note">Todavia no hay comentarios publicados.</p>`;
    return;
  }

  const userEmail = currentUser?.email?.toLowerCase();
  commentsFeed.innerHTML = comments.map(comment => {
    const upVotes = comment.reactions?.up || [];
    const downVotes = comment.reactions?.down || [];
    const userReaction = upVotes.includes(userEmail) ? "up" : downVotes.includes(userEmail) ? "down" : "";
    return `
      <article class="comment-card">
        <header>
          <div class="comment-avatar">${comment.name.slice(0, 1).toUpperCase()}</div>
          <div>
            <strong>${comment.name}</strong>
            <span>${formatDate(comment.createdAt)}</span>
          </div>
        </header>
        <p>${comment.text}</p>
        <div class="comment-actions">
          <button type="button" class="${userReaction === "up" ? "active" : ""}" data-react="up" data-comment="${comment.id}">👍 ${upVotes.length}</button>
          <button type="button" class="${userReaction === "down" ? "active" : ""}" data-react="down" data-comment="${comment.id}">👎 ${downVotes.length}</button>
        </div>
        <div class="reply-list">
          ${(comment.replies || []).map(reply => `
            <div class="reply-card">
              <strong>${reply.name}</strong>
              <span>${formatDate(reply.createdAt)}</span>
              <p>${reply.text}</p>
            </div>
          `).join("")}
        </div>
        <form class="reply-form" data-reply-form="${comment.id}">
          <input type="text" name="reply" placeholder="Responder a ${comment.name}" required>
          <button type="submit">Responder</button>
        </form>
      </article>
    `;
  }).join("");
}

function publishComment(text) {
  if (!currentUser) {
    showLogin();
    return false;
  }

  comments.unshift({
    id: `comment-${Date.now()}`,
    name: currentUser.name,
    email: currentUser.email.toLowerCase(),
    text,
    createdAt: new Date().toISOString(),
    reactions: { up: [], down: [] },
    replies: []
  });
  saveSession();
  renderComments();
  return true;
}

function reactToComment(commentId, type) {
  if (!currentUser) {
    showLogin();
    return;
  }

  const comment = comments.find(item => item.id === commentId);
  if (!comment) {
    return;
  }

  const email = currentUser.email.toLowerCase();
  comment.reactions ||= { up: [], down: [] };
  comment.reactions.up = comment.reactions.up.filter(item => item !== email);
  comment.reactions.down = comment.reactions.down.filter(item => item !== email);
  comment.reactions[type].push(email);
  saveSession();
  renderComments();
}

function replyToComment(commentId, text) {
  if (!currentUser) {
    showLogin();
    return;
  }

  const comment = comments.find(item => item.id === commentId);
  if (!comment) {
    return;
  }

  comment.replies ||= [];
  comment.replies.push({
    id: `reply-${Date.now()}`,
    name: currentUser.name,
    email: currentUser.email.toLowerCase(),
    text,
    createdAt: new Date().toISOString()
  });
  saveSession();
  renderComments();
}

function uniqueGenres() {
  const values = new Set(["Todos"]);
  movies.forEach(movie => movie.genres.forEach(genre => values.add(genre)));
  return [...values];
}

function renderChips() {
  if (!chips) {
    return;
  }

  chips.innerHTML = uniqueGenres().map(genre => `
    <button class="chip ${genre === activeGenre ? "active" : ""}" data-genre="${genre}">
      ${genre}
    </button>
  `).join("");
}

function filterMovies() {
  if (!searchInput) {
    return movies;
  }

  const query = searchInput.value.trim().toLowerCase();
  return movies.filter(movie => {
    const haystack = [
      movie.title,
      movie.year,
      movie.director,
      movie.cast,
      movie.genres.join(" ")
    ].join(" ").toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesGenre = activeGenre === "Todos" || movie.genres.includes(activeGenre);
    return matchesQuery && matchesGenre;
  });
}

function renderMovies() {
  if (!grid) {
    return;
  }

  const filtered = filterMovies();
  grid.innerHTML = filtered.map(movie => `
    <button class="movie-card ${movie.id === selectedId ? "active" : ""}" data-id="${movie.id}" aria-label="Ver detalles de ${movie.title}">
      <span class="poster-wrap">
        <img src="${movie.poster}" alt="Poster ${movie.title}" loading="lazy">
      </span>
      <span class="card-info">
        <h3>${movie.title}</h3>
        <span class="movie-meta">
          <span>${movie.year}</span>
          <span>${movie.genres[0]}</span>
        </span>
      </span>
    </button>
  `).join("");

  if (!filtered.length) {
    grid.innerHTML = `<p class="no-results">No hay resultados con ese filtro.</p>`;
  }
}

function renderDetails(movie) {
  if (!panelEmpty || !panelContent) {
    sessionStorage.setItem("moviesSprSelectedMovie", movie.id);
    window.location.href = "index.html#details";
    return;
  }

  selectedId = movie.id;
  panelEmpty.classList.add("hidden");
  panelContent.classList.remove("hidden");
  panelContent.innerHTML = `
    <img class="detail-poster" src="${movie.poster}" alt="Poster ${movie.title}">
    <h2>${movie.title}</h2>
    <div class="facts">
      <span>${movie.year}</span>
      <span>${movie.release}</span>
      <span>${movie.runtime}</span>
    </div>
    <div class="score" style="--score: ${Math.round(movie.rating * 10)}%">
      <div class="score-ring"><span>${movie.rating}</span></div>
      <p>Valoracion destacada dentro del catalogo Movies SPR.</p>
    </div>
    <p>${movie.description}</p>
    <div class="credits">
      <span><strong>Direccion:</strong> ${movie.director}</span>
      <span><strong>Reparto:</strong> ${movie.cast}</span>
      <span><strong>Generos:</strong> ${movie.genres.join(", ")}</span>
    </div>
    <div class="panel-actions">
      ${movie.playable ? `<button class="primary-action" data-watch-trailer>Ver trailer aqui</button>` : ""}
      <button class="secondary-action" data-scroll-catalog>Volver al catalogo</button>
    </div>
  `;
  renderMovies();
}

function scoreMovieForProfile(movie, profile) {
  if (profile.seen.includes(movie.id)) {
    return 0;
  }

  const genreHits = movie.genres.filter(genre => profile.genres.includes(genre)).length;
  const genreScore = genreHits / Math.max(1, profile.genres.length);
  const ratingScore = movie.rating / 10;
  const freshness = Number(movie.year) >= 2024 ? 0.12 : 0.04;
  const featuredBoost = movie.featured ? 0.12 : 0;
  return (genreScore * 0.58) + (ratingScore * 0.30) + freshness + featuredBoost;
}

function reasonFor(movie, profile) {
  const matches = movie.genres.filter(genre => profile.genres.includes(genre));
  if (movie.featured && matches.length) {
    return `Coincide con ${matches.join(", ")} y es la pelicula destacada.`;
  }
  if (matches.length >= 2) {
    return `Alta similitud por generos: ${matches.join(", ")}.`;
  }
  if (movie.rating >= 8) {
    return "Entra por rendimiento historico alto y buena valoracion.";
  }
  return "Recomendacion de exploracion por popularidad y afinidad parcial.";
}

function renderProfiles() {
  if (!profileList) {
    return;
  }

  profileList.innerHTML = profiles.map(profile => `
    <button class="profile-button ${profile.id === selectedProfile ? "active" : ""}" data-profile="${profile.id}">
      <strong>${profile.name}</strong>
      <span>${profile.vector}</span>
    </button>
  `).join("");
}

function renderRecommendations() {
  if (!recommendationList) {
    return;
  }

  const profile = profiles.find(item => item.id === selectedProfile);
  const ranked = movies
    .map(movie => ({ movie, score: scoreMovieForProfile(movie, profile) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  profileName.textContent = `Perfil: ${profile.name}`;
  profileVector.textContent = profile.vector;
  recommendationList.innerHTML = ranked.map(item => `
    <button class="recommendation-card" type="button" data-id="${item.movie.id}">
      <img src="${item.movie.poster}" alt="Poster ${item.movie.title}">
      <strong>${item.movie.title}</strong>
      <small>Afinidad: ${Math.round(item.score * 100)}%</small>
      <small>${reasonFor(item.movie, profile)}</small>
    </button>
  `).join("");
}

function openTrailer() {
  if (!trailerFrame || !playerModal) {
    return;
  }

  trailerFrame.src = "https://mega.nz/embed/5PcSUA5B#s6asHKc1ae4w6OqDqSO5ABPQsm7--lJInN24Zl1Mni4";
  if (typeof playerModal.showModal === "function") {
    playerModal.showModal();
  } else {
    window.open("https://mega.nz/embed/5PcSUA5B#s6asHKc1ae4w6OqDqSO5ABPQsm7--lJInN24Zl1Mni4", "_blank", "noopener");
  }
}

function closeTrailer() {
  if (trailerFrame) {
    trailerFrame.src = "";
  }
  playerModal?.close();
}

function closeWelcome() {
  welcomeOverlay.classList.add("hidden");
}

document.addEventListener("click", event => {
  const card = event.target.closest(".movie-card");
  const recommendationClick = event.target.closest(".personal-rec, .recommendation-card");
  const chip = event.target.closest(".chip");

  if (card) {
    const movie = movies.find(item => item.id === card.dataset.id);
    registerTouchedMovie(movie.id);
    renderDetails(movie);
    document.querySelector("#details").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (recommendationClick) {
    const movie = movies.find(item => item.id === recommendationClick.dataset.id);
    registerTouchedMovie(movie.id);
    renderDetails(movie);
    document.querySelector("#details").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (chip) {
    activeGenre = chip.dataset.genre;
    renderChips();
    renderMovies();
  }

  const profileButton = event.target.closest(".profile-button");
  if (profileButton) {
    selectedProfile = profileButton.dataset.profile;
    renderProfiles();
    renderRecommendations();
  }

  if (event.target.closest("[data-featured-open]")) {
    const featuredMovie = movies.find(movie => movie.featured);
    registerTouchedMovie(featuredMovie.id);
    renderDetails(featuredMovie);
    document.querySelector("#details").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (event.target.closest("[data-watch-trailer]")) {
    openTrailer();
  }

  if (event.target.closest("[data-scroll-catalog]")) {
    document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
  }

  const voteButton = event.target.closest("[data-vote]");
  if (voteButton) {
    submitVote(voteButton.dataset.vote);
  }

  const reactButton = event.target.closest("[data-react]");
  if (reactButton) {
    reactToComment(reactButton.dataset.comment, reactButton.dataset.react);
  }
});

document.addEventListener("submit", event => {
  const replyForm = event.target.closest(".reply-form");
  if (!replyForm) {
    return;
  }

  event.preventDefault();
  const input = replyForm.elements.reply;
  const text = input.value.trim();
  if (!text) {
    return;
  }
  replyToComment(replyForm.dataset.replyForm, text);
});

loginForm?.addEventListener("submit", event => {
  event.preventDefault();
  const previousEmail = currentUser?.email?.toLowerCase();
  const nextEmail = document.querySelector("#userEmailInput").value.trim().toLowerCase();
  const isSameUser = previousEmail && previousEmail === nextEmail;

  currentUser = {
    name: document.querySelector("#userNameInput").value.trim(),
    email: nextEmail,
    age: document.querySelector("#userAgeInput").value,
    favoriteGenre: document.querySelector("#favoriteGenreInput").value
  };
  if (!isSameUser) {
    touchedMovies = [];
  }
  saveSession();
  activateSession();
  renderUserDashboard();
  renderVoting();
  showPersonalWelcome();
});

document.querySelector("#closeWelcome")?.addEventListener("click", closeWelcome);
document.querySelector("#startBrowsing")?.addEventListener("click", () => {
  closeWelcome();
  const catalog = document.querySelector("#catalog");
  if (catalog) {
    catalog.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
changeProfileButton?.addEventListener("click", () => {
  localStorage.removeItem("moviesSprUser");
  localStorage.removeItem("moviesSprTouched");
  sessionStorage.removeItem(SESSION_KEY);
  currentUser = null;
  touchedMovies = [];
  renderUserDashboard();
  renderVoting();
  showLogin();
});
document.querySelector("#closePlayer")?.addEventListener("click", closeTrailer);
playerModal?.addEventListener("close", () => {
  if (trailerFrame) {
    trailerFrame.src = "";
  }
});
searchInput?.addEventListener("input", renderMovies);
surveyForm?.addEventListener("submit", event => {
  event.preventDefault();
  const commentInput = document.querySelector("#commentInput");
  const text = commentInput.value.trim();
  if (!text) {
    surveyStatus.textContent = "Escribe un comentario antes de publicarlo.";
    return;
  }
  const published = publishComment(text);
  if (!published) {
    surveyStatus.textContent = "Inicia sesion para publicar comentarios.";
    return;
  }
  surveyStatus.textContent = "Tu comentario fue publicado en el feed.";
  event.currentTarget.reset();
});

loadSession();
seedComments();
renderChips();
renderMovies();
renderProfiles();
renderRecommendations();
renderUserDashboard();
renderVoting();
renderComments();
const pendingMovieId = sessionStorage.getItem("moviesSprSelectedMovie");
if (pendingMovieId && panelContent) {
  const pendingMovie = movies.find(movie => movie.id === pendingMovieId);
  if (pendingMovie) {
    renderDetails(pendingMovie);
  }
  sessionStorage.removeItem("moviesSprSelectedMovie");
}
if (currentUser && hasActiveSession()) {
  hideAccessModals();
} else {
  showLogin();
}
