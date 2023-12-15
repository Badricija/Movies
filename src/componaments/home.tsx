import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <p className='planet-paragraph'>Welcome, this is a site where you can see some of the interesting planets that are in this universe!</p>
            <button type='button'className='button' onClick={() => navigate('/')}>Go back to homepage</button>
        </>
    );
  }

export default Home;