import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <h1>Bienvenido a la App de Tareas</h1>
      <p>Puedes <Link to="/tareas">ver tus tareas</Link> o <Link to="/crear">crear una nueva tarea</Link>.</p>
    </div>
  );
};

export default HomePage;
