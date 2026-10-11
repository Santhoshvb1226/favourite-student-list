
import { Link, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudent";
import { useStudents } from "./context/StudentContext";
function App() {
  const { students } = useStudents();
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          StudentHub
        </Link>

        <div className="nav-links">
          <Link to="/">Student List</Link>
          <Link to="/favourites">Favourite Students</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route
          path="/favourites"
          element={<FavouriteStudents />}
        />
      </Routes>

      <footer>
        Favourite Student List | Built with React
      </footer>
    </>
  );
}

export default App;