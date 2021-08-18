import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    //state del form
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    });

    //Extraer nombre del proyecto
    const { nombre } = tarea;

    //si no hay ningun proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //leer los valores del form
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    };

    
    const onSubmit = e => {
        e.preventDefaut();

        //validar

        //pasar validacion

        //agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //reiniciar form
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contendor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contendor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;