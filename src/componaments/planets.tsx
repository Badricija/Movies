import axios from "axios";
import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Planet = {
  mass: React.ReactNode;
    id: number;
    name: string;
    title: string;
    description: string;
  };
  const Planets: React.FC = () => {
    const [planets, setPlanets] = useState<Planet[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      axios.get<Planet[]>('http://localhost:3001/api/planets')
        .then(response => {
          setPlanets(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the planets data:', error);
        });
    }, []);
    return (
      <><div className="parent">
        {planets.map((planet, index) => (
          <Link to="/about" key={planet.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={`planet${index + 1}`}>
              <h3>{planet.title}</h3>
              <p>{planet.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <button type='button' className='button' onClick={() => navigate('/')}>Go back to homepage</button></>
    );
  };
  export default Planets;