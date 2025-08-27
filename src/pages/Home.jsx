import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => { document.title = "Inicio – Tareas"; }, []);
    return (
        <div>
        <h1>Bienvenido</h1>
        <p><Link to="/tareas">Ir a la lista de tareas</Link></p>
        </div>
    );
}
