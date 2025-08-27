import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Tareas.css"; // nuevo archivo de estilos

export default function Tareas({ tareas, setTareas }) {
    useEffect(() => {
        if (tareas.length === 0) {
        const timer = setTimeout(() => {
            setTareas([
            { id: 1, titulo: "Comprar leche" },
            { id: 2, titulo: "Estudiar React" },
            { id: 3, titulo: "Hacer ejercicio" },
            ]);
        }, 1000);
        return () => clearTimeout(timer);
        }
    }, [tareas.length, setTareas]);

    return (
        <div>
        <h1>Lista de Tareas</h1>
        {tareas.length === 0 ? (
            <p>Cargando tareas...</p>
        ) : (
            <div className="card-grid">
            {tareas.map((t) => (
                <div key={t.id} className="card">
                <h3>{t.titulo}</h3>
                <Link to={`/tarea/${t.id}`} className="card-link">
                    Ver detalle
                </Link>
                </div>
            ))}
            </div>
        )}
        </div>
    );
}
