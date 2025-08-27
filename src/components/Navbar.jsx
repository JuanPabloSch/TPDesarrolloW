import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tareas">Ver Tareas</Link></li>
            <li><Link to="/crear">Crear Tarea</Link></li>
        </ul>
        </nav>
    );
}
