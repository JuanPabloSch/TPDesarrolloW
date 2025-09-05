import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const TareasPage = ({ tareas, setTareas }) => {
  useEffect(() => {
    // Simular carga de datos desde API
    setTimeout(() => {
      setTareas([
        { id: 1, titulo: "Comprar leche" },
        { id: 2, titulo: "Hacer tarea de React" },
        { id: 3, titulo: "Lavar ropa" }
      ]);
    }, 1000);
  }, [setTareas]);

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      {tareas.length === 0 ? (
        <p>Cargando tareas...</p>
      ) : (
        <ul className="task-list">
          {tareas.map(tarea => (
            <li key={tarea.id}>
              <Link to={`/tarea/${tarea.id}`}>{tarea.titulo}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TareasPage;
