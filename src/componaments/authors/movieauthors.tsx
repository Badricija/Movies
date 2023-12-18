/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import { useNavigate } from "react-router-dom";

const Authors: React.FC = () => {
	const navigate = useNavigate();

	return (
		<>
		<div className="author-box">
			<h1>Hayao Miyazaki</h1>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg/800px-Hayao_Miyazaki_cropped_1_Hayao_Miyazaki_201211.jpg" alt="a picture of author" className="picture"></img>
			<p> is a Japanese animator, filmmaker, and manga artist.
			 A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films,
			 and is widely regarded as one of the most accomplished filmmakers in the history of animation.</p>
		</div>
		<div className="author-box">
			<h1>Page Author</h1>
			<p>My name is Patrīcija, I'm 25 years old. 
			At moment I live in small town named Lēdurga, it's 15 minute dive from Saulkrasti.
			I'm known for building my car, beeing mom to 2 cats.   </p>
		</div>
			
			<button type="button" className="button" onClick={() => navigate("/")}>
				Go back to homepage
			</button>
		</>
	);
};
export default Authors;
