import { Link, createBrowserRouter } from "react-router-dom";
import Aboutplanets from "./aboutplanets";
import Home from "./home";
import Planets from "./planets";

const router = createBrowserRouter([
    {
      path: "/",
      element: <><div className='Heading'>Interesting Planets</div>
      <Link to="/home" className='Heading-options'>Home</Link>
      <br></br>
      <Link to="/planets" className='Heading-options'>Planets</Link>
      <br></br>
      <Link to ="/about" className='Heading-options'>About</Link></>
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/planets",
      element: <>
       <Planets />
      </>
    },
    {
      path: "/about",
      element: <Aboutplanets />
    }
  ]);
export default router;  