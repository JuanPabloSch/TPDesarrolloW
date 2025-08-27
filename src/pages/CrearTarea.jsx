import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CrearTarea({ onCreate }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = ({ titulo }) => {
        onCreate(titulo);   // agrega a la lista global
        reset();            // limpia el formulario
        navigate("/tareas"); // redirige a la lista
    };

    return (
        <div>
        <h1>Crear Nueva Tarea</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
            type="text"
            placeholder="Título de la tarea"
            {...register("titulo", { required: true })}
            />
            {errors.titulo && <span>Este campo es obligatorio.</span>}
            <button type="submit">Agregar</button>
        </form>
        </div>
    );
}
