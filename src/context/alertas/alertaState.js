import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContex';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = props => {

    const intialState = {
        alerta: null
    };

    const [ state, dispatch ] = useReducer(alertaReducer, intialState);

    //funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });

        //después de 5 segundas limpia la alerta
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA,
            })
        }, 5000)
    };
    
    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
};

export default AlertaState;