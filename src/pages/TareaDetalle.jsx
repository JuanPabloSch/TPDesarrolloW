import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function TareaDetalle() {
    const { id } = useParams();
    useEffect(() => { document.title = `Tarea ${id}`; }, [id]);
    return <h1>Detalles de la Tarea ID: {id}</h1>;
}
