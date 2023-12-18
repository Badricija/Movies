import { Link } from "react-router-dom";
import  styles  from './mainpage.module.css'
 
const MainPage: React.FC = () => {

return (
    <div className= {styles.mainPageeee} >
        <div className='Heading'>Studio Ghibli</div>
        <Link to="/about" className='Heading-options'>About</Link>
        <br></br>
        <Link to="/movies" className='Heading-options'>Movies</Link>
        <br></br>
        <Link to="/authors" className='Heading-options'>Authors</Link>
    </div>
)
};
export default MainPage;