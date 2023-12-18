import { createBrowserRouter } from "react-router-dom";
import About from "./about/about";
import Movies from "./movies/movies";
import Authors from "./authors/movieauthors";
import MainPage from "./main page/mainpage";
import AboutMovie from "./about movies/aboutmovies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/movies/aboutmovie/:id",
    element: <AboutMovie />
  },
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "/authors",
    element: <Authors />
  }
]);
export default router;  