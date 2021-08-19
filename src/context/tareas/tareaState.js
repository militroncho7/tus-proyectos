import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Colores Pantone', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 6, nombre: 'Colores Pantone', estado: false, proyectoId: 2},
            { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
            { id: 9, nombre: 'Colores Pantone', estado: false, proyectoId: 1},
            { id: 10, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2},
            { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { id: 12, nombre: 'Colores Pantone', estado: false, proyectoId: 4},
            { id: 13, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    };

    //crear disptch y state
    const [ state, dispath ] = useReducer(TareaReducer, initialState);

    //Crear funciones

    //obtener tareas un proyecto especifico
    const obtenerTareas = proyectoId => {
        dispath({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispath({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    };

    //valida y muestra un error
    const validarTarea = () => {
        dispath({
            type: VALIDAR_TAREA
        })
    };

    //eliminar tareas por ID
    const eliminarTarea = id => {
        dispath({
            type: ELIMINAR_TAREA,
            payload: id
        })
    };

    //cambiar estado tarea
    const cambiarEstadoTarea = tarea => {
        dispath({
            type: ESTADO_TAREA,
            payload: tarea
        })
    };

    //extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispath({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    };

    //edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispath({
            tyoe: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //elimina tarea seleccionada
    const limpiarTarea = () => {
        dispath({
            type: LIMPIAR_TAREA
        })
    };

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
};

export default TareaState
