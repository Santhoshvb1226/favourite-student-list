
import { useStudents } from "../context/StudentContext";

function FavouriteStudents() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <div className="page">
      <h1>Favourite Students ❤️</h1>
      <p className="subtitle">
        Your selected favourite students.
      </p>

      {favourites.length === 0 ? (
        <div className="empty-message">
          <h2>No favourite students added yet</h2>
          <p>Go to Student List and add your favourites.</p>
        </div>
      ) : (
        <div className="student-grid">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h2>{student.name}</h2>
              <p>Roll No: {student.id}</p>
              <p>Course: {student.course}</p>

              <button
                className="remove-button"
                onClick={() => removeFavourite(student.id)}
              >
                Remove from Favourite
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouriteStudents;