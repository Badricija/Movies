import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<p className="movie-paragraph">
				Welcome! This project contains 10 movies that are made from Studio Ghibli.
				If you don't know any of these movies, I suggest you to check them out!
				This project also contains 10 small cards with names and years of the movies,
				you can click on the cards and they will send you to fuller description for each movie.
				There are also comments, that you as a person can read and add your own. 
				If there is any movie that you dont agree on beeing on the list you can just click on Delete button. 
				
				
			</p>
			<button type="button" className="button" onClick={() => navigate("/")}>
				Go back to homepage
			</button>
		</>
	);
};

export default Home;
