import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../componets/styles/Dashboard.css";

const Dashboard = () => {
    const [tareas, setTareas] = useState([]);
    const navigate = useNavigate();

    // Función para obtener las tareas
    const getTareas = async () => {
        try {
            const response = await fetch("http://localhost:5000/tasks/");
            const data = await response.json();
            setTareas(
                data.map((tarea) => ({
                    ...tarea,
                    checked: tarea.estado === "completado", // Agregar estado local para el checkbox
                }))
            );
        } catch (error) {
            console.error("Error al obtener las tareas:", error);
        }
    };

    // Función para manejar el cambio de checkbox
    const toggleCheckbox = (id_tarea) => {
        setTareas((prevTareas) =>
            prevTareas.map((tarea) =>
                tarea.id_tarea === id_tarea
                    ? { ...tarea, checked: !tarea.checked }
                    : tarea
            )
        );
    };

    // Función para eliminar una tarea
    const eliminarTarea = async (id_tarea) => {
        try {
            const response = await fetch(`http://localhost:5000/tasks/${id_tarea}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log(`Tarea con ID ${id_tarea} eliminada.`);
                // Actualiza el estado local eliminando la tarea
                setTareas((prevTareas) =>
                    prevTareas.filter((tarea) => tarea.id_tarea !== id_tarea)
                );
            } else {
                console.error("Error al eliminar la tarea:", response.statusText);
            }
        } catch (error) {
            console.error("Error en la petición DELETE:", error);
        }
    };

    const crearTarea = () => {
        navigate("/storetarea");
    };

    const salir = () => {
        navigate("/");
    };

    useEffect(() => {
        getTareas();
    }, []);

    return (
        <div className="main-page-dashboard">
            <div className="head-dashboard">
                <img src="/logo.png" alt="Logo" />
                <h1>TaskDo</h1>
                <button className="leave-button" onClick={salir}>Salir</button>
            </div>
            <div className="form-dashboard">
                <button className="addTask-button" onClick={crearTarea}>Agrega una nueva tarea</button>
                <table>
                    <thead>
                        <tr>
                            <th>Eliminar</th>
                            <th>Estado</th>
                            <th>Título</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas.map((tarea) => (
                            <tr key={tarea.id_tarea}>
                                <td>
                                    <button
                                        className="delete-button"
                                        onClick={() => eliminarTarea(tarea.id_tarea)}
                                    >
                                        <img src="/trash.png" alt="Eliminar" />
                                    </button>
                                </td>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={tarea.checked}
                                        onChange={() => toggleCheckbox(tarea.id_tarea)}
                                    />
                                </td>
                                <td>
                                    <p
                                        style={{
                                            textDecoration: tarea.checked
                                                ? "line-through"
                                                : "none",
                                        }}
                                    >
                                        {tarea.titulo}
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
