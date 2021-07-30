import PropTypes from "prop-types"; 

const hotMovies = [
  {
    id: 1,
    title: "Black Widow",
    image: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rate: 6.9
  },
  {
    id: 2,
    title: "Gunpowder Milkshake",
    image: "https://m.media-amazon.com/images/M/MV5BYTE4YzczNDQtNmQzNS00ZTZjLThiMzEtOTUzOGQ5ODQzNzY1XkEyXkFqcGdeQXVyMTA3NTQ0Mzkw._V1_UY67_CR0,0,45,67_AL_.jpg",
    rate: 6.0
  },
  {
    id: 3,
    title: "	The Suicide Squad",
    image: "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_UY67_CR0,0,45,67_AL_.jpg",
    rate: 8.3
  },
]

function Movie({title, poster, rate}) {
  return (
    <div>
      <h2>{title} is fun ({rate} / 10)</h2>
      <img src={poster} alt={title} />
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rate: PropTypes.number
}

function App() {
  return (
    <div>
      {hotMovies.map(movie => (
        <Movie key={movie.id} title={movie.title} poster={movie.image} rate={movie.rate} />
      ))}
    </div>
  );
}

export default App;
