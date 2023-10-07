import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllMovies = async () => {
    const response = await fetch(
      "http://localhost:5001/Movies"
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

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div className="homePage">
        <h3>MOVIES LIST</h3>
        {movies.map((movie) => {
          return (
            <div key={movie.ID}>
              <Link
                to={`/${movie.title}`}
              >
                <div className="homePageMovies">
                  <p>{movie.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );

   
  }
  
  export default HomePage;