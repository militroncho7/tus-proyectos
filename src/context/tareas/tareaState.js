import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { nombre: 'Colores Pantone', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { nombre: 'Colores Pantone', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4},
            { nombre: 'Colores Pantone', estado: false, proyectoId: 1},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { nombre: 'Colores Pantone', estado: false, proyectoId: 4},
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3}
        ],
        tareasproyecto: null
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
        dispath({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    };

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas,
                agregarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    );
};

export default TareaState