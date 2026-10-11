
import { useStudents } from "../context/StudentContext";

const students = [
  { id: 2493, name: "Sandy", course: "React JS" },
  { id: 2494, name: "Sanjay", course: "JavaScript" },
  { id: 2495, name: "Pirajith", course: "HTML & CSS" },
  { id: 2496, name: "Saisaran", course: "Python" },
  { id: 2497, name: "Rasmithaa", course: "Java" },
  { id: 2498, name: "Chandru", course: "Angular" },
  { id: 2499, name: "Mohamed Jasim", course: "Node JS" },
  { id: 2500, name: "Rashmi", course: "MongoDB" },
];

function StudentList() {
  const { favourites, addFavourite } = useStudents();

  return (
    <div className="page">
      <h1>Student List</h1>
      <p className="subtitle">
        Select your favourite students.
      </p>

      <div className="student-grid">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <div className="avatar">
                {student.name.charAt(0)}
              </div>

              <h2>{student.name}</h2>
              <p>Roll No: {student.id}</p>
              <p>Course: {student.course}</p>

              <button
                className={isFavourite ? "added" : ""}
                onClick={() => addFavourite(student)}
                disabled={isFavourite}
              >
                {isFavourite
                  ? "✓ Added to Favourite"
                  : "♡ Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;