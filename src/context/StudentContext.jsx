
import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    setFavourites((previous) => {
      const alreadyExists = previous.some(
        (item) => item.id === student.id
      );

      if (alreadyExists) {
        return previous;
      }

      return [...previous, student];
    });
  };

  const removeFavourite = (id) => {
    setFavourites((previous) =>
      previous.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export function useStudents() {
  return useContext(StudentContext);
}