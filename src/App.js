import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; // ✅ correcto
import HomePage from "./pages/HomePage";
import TareasPage from "./pages/TareasPage";
import CrearTareaPage from "./pages/CrearTareaPage";
import TareaDetallePage from "./pages/TareaDetallePage";

function App() {
  // Estado global de tareas
  const [tareas, setTareas] = useState([]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/tareas"
          element={<TareasPage tareas={tareas} setTareas={setTareas} />}
        />
        <Route
          path="/crear"
          element={<CrearTareaPage tareas={tareas} setTareas={setTareas} />}
        />
        <Route
          path="/tarea/:id"
          element={<TareaDetallePage tareas={tareas} />}
        />
      </Routes>
    </div>
  );
}

export default App;
