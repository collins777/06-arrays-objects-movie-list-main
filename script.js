// Arrays holding movie objects for each genre
const comedyMovies = [
  { title: "Deadpool", year: 2016, description: "A witty anti-hero story." },
  {
    title: "Step Brothers",
    year: 2008,
    description: "Two grown men become roommates.",
  },
  {
    title: "Anchorman",
    year: 2004,
    description: "A hilarious newsroom rivalry.",
  },
  {
    title: "The Hangover",
    year: 2009,
    description: "A wild bachelor party gone wrong.",
  },
];

const actionMovies = [
  {
    title: "Mad Max: Fury Road",
    year: 2015,
    description: "A high-octane chase in a desert wasteland.",
  },
  {
    title: "John Wick",
    year: 2014,
    description: "A retired hitman seeks revenge.",
  },
  {
    title: "Die Hard",
    year: 1988,
    description: "A cop battles terrorists in a skyscraper.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    description: "Batman faces the Joker in Gotham City.",
  },
];

const dramaMovies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    description: "A story of hope and friendship in prison.",
  },
  {
    title: "Forrest Gump",
    year: 1994,
    description: "A man's extraordinary life journey.",
  },
  {
    title: "Fight Club",
    year: 1999,
    description: "An underground fight club changes lives.",
  },
  {
    title: "The Godfather",
    year: 1972,
    description: "A powerful mafia family's saga.",
  },
];

const sciFiMovies = [
  {
    title: "Inception",
    year: 2010,
    description: "A mind-bending dream heist.",
  },
  {
    title: "The Matrix",
    year: 1999,
    description: "A hacker discovers a simulated reality.",
  },
  {
    title: "Interstellar",
    year: 2014,
    description: "A journey through space to save humanity.",
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    description: "A futuristic tale of identity and humanity.",
  },
];

// Get the genre dropdown and movie recommendations elements
const genreDropdown = document.getElementById("genre");
const movieRecommendations = document.getElementById("movieRecommendations");

// Set up event listener for when the user selects a genre
genreDropdown.addEventListener("change", function () {
  // Get the selected genre
  const selectedGenre = genreDropdown.value;

  // Variable to hold the list of movies
  let movieList = [];

  // Assign movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Create a string for the list of movies using a for loop
  let listHTML = "<ul>";
  // Loop through each movie in the movieList array
  for (let i = 0; i < movieList.length; i++) {
    // Add each movie's details as a list item
    listHTML += `<li><strong>${movieList[i].title}</strong> (${movieList[i].year}): ${movieList[i].description}</li>`;
  }
  listHTML += "</ul>";

  // Display the list of movies on the page
  movieRecommendations.innerHTML = listHTML;
});
