import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar sesión
    const [ usuario, guardarUsuario ] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    };

    //Cuando el usuario quiere iniciar sesión
    const onSubmit =  e => {
        e.preventDefault();

        //validar sin campos vacios

        //Password min. 6 caracteres

        //Revisar password iguales

        //Pasarlo al action

    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>¡Regístrate!</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Repite tu password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu contraseña"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registarme"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">Volver a iniciar sesión</Link>

            </div>
        </div>
    );
}
 
export default NuevaCuenta;