import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CrearTareaPage = ({ tareas, setTareas }) => {
  const navigate = useNavigate();

  // Inicializamos react-hook-form
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    // Creamos un objeto con la nueva tarea
    const nuevaTarea = { 
      id: tareas.length + 1, 
      titulo: data.titulo 
    };

    // Actualizamos el estado global de tareas
    setTareas([...tareas, nuevaTarea]);
    console.log("Tarea creada:", nuevaTarea);

    // Limpiamos el formulario
    reset();

    // Redirigimos a la lista de tareas
    navigate("/tareas");
  };

  return (
    <div className="container">
      <h1>Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="task-form">
        <input
          type="text"
          placeholder="Título de la tarea"
          {...register("titulo", { required: true })}
        />
        {/* Mensaje de error si el campo está vacío */}
        {errors.titulo && <span className="error">Este campo es obligatorio.</span>}

        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default CrearTareaPage;
