import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import styles from "./movies.module.css";

const MovieSchema = z.object({
  release_year: z.number(),
  id: z.number(),
  director: z.string(),
  title: z.string(),
  description: z.string(),
  genre: z.string(),
  rating: z.number(),
  main_character: z.string(),
});

const MoviesSchema = z.array(MovieSchema);

type Movie = z.infer<typeof MovieSchema>;
type Movies = Movie[];

const MoviesComponent = () => {
  const [movies, setMovies] = useState<Movies>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/ghibli_movies");
        const moviesData = await response.json();
        const parsedMoviesData = MoviesSchema.parse(moviesData);
        setMovies(parsedMoviesData);
      } catch (error) {
        if (error instanceof z.ZodError) {
          console.error("Validation error:", error.errors);
        } else {
          console.error("There was an error fetching the movies:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const deleteMovie = async (id: number) => {
    try {
      await fetch(`http://localhost:3000/ghibli_movies/${id}`, { method: 'DELETE' });
      setMovies(movies.filter(movie => movie.id !== id));
    } catch (error) {
      console.error(`There was an error deleting the movie with id ${id}:`, error);
    }
  };

  if (isLoading) {
    return <div>Loading movies...</div>;
  }

  return (
    <div className={styles.parent}>
      {movies.map((movie, index) => (
        <div key={movie.id} className={`div${index + 1}`}>
          <Link to={`/movies/aboutmovie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3>{movie.title}</h3>
            <p>{movie.release_year}</p>
          </Link>
          <button className="button" onClick={() => deleteMovie(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MoviesComponent;