import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios';

const TareaState = props => {
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    };

    //crear disptch y state
    const [ state, dispath ] = useReducer(TareaReducer, initialState);

    //Crear funciones

    //obtener tareas un proyecto especifico
    const obtenerTareas = async proyecto => {
        try {
            const resultado = await clienteAxios.get('/api/tareas', {params: { proyecto }});
            dispath({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            });            
        } catch (error) {
            console.log(error);
        }
    };

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);
            dispath({
                type: AGREGAR_TAREA,
                payload: tarea
            });
        } catch (error) {
            console.log(error);
        }
    };

    //valida y muestra un error
    const validarTarea = () => {
        dispath({
            type: VALIDAR_TAREA
        })
    };

    //eliminar tareas por ID
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispath({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    };

    //edita o modifica una tarea
    const actualizarTarea = async tarea => {

       try {
           const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);

           dispath({
            tyoe: ACTUALIZAR_TAREA,
            payload: resultado.data.tarea
        })

       } catch (error) {
           console.log(error);
       }
    };

    //extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispath({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    };

    //elimina tarea seleccionada
    const limpiarTarea = () => {
        dispath({
            type: LIMPIAR_TAREA
        })
    };

    return (
        <TareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
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
