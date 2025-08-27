import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tareas from "./pages/Tareas";
import CrearTarea from "./pages/CrearTarea";
import TareaDetalle from "./pages/TareaDetalle";
import "./App.css";

function App() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (titulo) => {
        setTareas((prev) => {
        const nextId = prev.length ? Math.max(...prev.map(t => t.id)) + 1 : 1;
        return [...prev, { id: nextId, titulo }];
        });
    };

    return (
        <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tareas" element={<Tareas tareas={tareas} setTareas={setTareas} />} />
            <Route path="/crear" element={<CrearTarea onCreate={agregarTarea} />} />
            <Route path="/tarea/:id" element={<TareaDetalle />} />
        </Routes>
        </div>
    );
}

export default App;
