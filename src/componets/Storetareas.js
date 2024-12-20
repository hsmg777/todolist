import React from "react";
import './styles/Storetareas.css';

const Storetareas = () => {
    const postTareas = async () => {
        // Obtiene los valores de los inputs
        const titulo = document.getElementById("titulo").value;
        const descripcion = document.getElementById("descripcion").value;

        // Validación de campos vacíos
        if (!titulo || !descripcion) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Construye el payload
        const nuevaTarea = {
            titulo: titulo,
            descripcion: descripcion,
            estado: "pendiente", // Estado predeterminado
        };

        try {
            // Realiza la petición POST
            const response = await fetch("http://localhost:5000/tasks/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevaTarea),
            });

            // Verifica si la petición fue exitosa
            if (response.ok) {
                console.log("Tarea creada exitosamente.");
                alert("Tarea creada exitosamente.");
            } else {
                console.error("Error al crear tarea:", response.statusText);
            }
        } catch (error) {
            console.error("Error en la petición POST:", error);
        }
    };

    return (
        <div className="main-createTask">
            <h1>Crear Nueva Tarea</h1>
            <label>
                Título:
                <input type="text" placeholder="Titulo" id="titulo" />
            </label>
            <br />
            <label>
                Descripción:
                <input type="text" placeholder="Descripcion" id="descripcion" />
            </label>
            <br />
            <button onClick={postTareas}>Crear tarea</button>
        </div>
    );
};

export default Storetareas;
