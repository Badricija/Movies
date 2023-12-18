import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Movie = {
  release_year: number;
  id: number;
  director: string;
  title: string;
  description: string;
  genre: string;
  rating: number;
  main_character: string;
  comments?: Comment[];
};

type Comment = {
  id: number;
  movie_id: number;
  content: string;
};

const AboutMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/ghibli_movies/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("There was an error fetching the movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newComment.trim()) {
      try {
        const response = await axios.post(`http://localhost:3000/ghibli_movies/${id}/comments`, {
          content: newComment,
          movie_id: Number(id)
        });

        const result = response.data;
        if (movie) {
          setMovie({ ...movie, comments: [...(movie.comments || []), result] });
        }
        setNewComment("");
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };

  if (isLoading) {
    return <div>Loading movie details...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <div className="moreInfo">
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Release Year: {movie.release_year}</p>
      <p>Description: {movie.description}</p>
      <p>Main Character: {movie.main_character}</p>
      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      {movie.comments && movie.comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea className="text-form"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment about the movie"
        />
		<br></br>
        <button type="submit" className="button">Submit Comment</button>
      </form>
      <button
        type="button"
        className="button"
        onClick={() => navigate("/movies")}
      >
        Go back to movies
      </button>
    </div>
  );
};

export default AboutMovie;