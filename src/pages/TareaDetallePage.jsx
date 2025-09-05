import React from "react";
import { useParams } from "react-router-dom";

const TareaDetallePage = ({ tareas }) => {
  const { id } = useParams();
  const tarea = tareas.find(t => t.id === parseInt(id));

  if (!tarea) {
    return <p>Tarea no encontrada</p>;
  }

  return (
    <div className="container">
      <h1>Detalles de la Tarea</h1>
      <p>ID: {tarea.id}</p>
      <p>Título: {tarea.titulo}</p>
    </div>
  );
};

export default TareaDetallePage;
