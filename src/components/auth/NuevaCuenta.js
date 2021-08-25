import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContex';
import AuthContext from '../../context/autenticacion/authContext';

const NuevaCuenta = (props) => {

    //extraer valores del context
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const  { mensaje, autenticado, registrarUsuario } = authContext;

    //en caso de que el usuario se haya auth o sea un registro duplicado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        
    }, [mensaje, autenticado, props.history]);

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
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return;
        };

        //Password min. 6 caracteres
        if(password.length < 6) {
            mostrarAlerta('La contraseña debe ser de al menos 6 caracteres', 'alerta-error');
            return;
        }
        
        //Revisar password iguales
        if(password !== confirmar) {
            mostrarAlerta('Las contraseñas no son iguales', 'alerta-error');
            return;
        };

        //Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        });

    };

    return (
        <div className="form-usuario">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
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