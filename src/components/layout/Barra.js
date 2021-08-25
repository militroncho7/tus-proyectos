import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

    //extraer info autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    //la primera vez no trae al usuario. Por eso necesitamos que recargue la info con un useEffect
    //de esta manera actualizamos y aparece el nombre del usuario en la barra
    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return (
        <header className="app-header">
            { usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null }

            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion"
                    onClick={ () => cerrarSesion() }
                >Cerrar sesión</button>
            </nav>
        </header>
    );
}
 
export default Barra;