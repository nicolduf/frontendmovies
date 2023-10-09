import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllMovies = async () => {
    const response = await fetch(
      "http://localhost:5001/Movies/"
    );

    if (response) {
      const moviesData = await response.json();
      console.log(moviesData);
      setMovies(moviesData);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  if (movies.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
   {movies.map(movie => (
    <li key={movie.ID}>
        <Link to={`/MoviesDetailsPage/${movie.ID}`}  >
            <h1 style={{color: "white"}} className="homePageTitles">{movie.title}</h1>
            <img src={movie.imageUrl} className="homePageImages" style={{ width: "60vw" }}/>
        </Link>
    </li>
))}
    </>
)
}

export default HomePage;