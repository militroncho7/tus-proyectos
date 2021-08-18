import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return (
        <aside>
            <h1><span>tus</span>PROYECTOS</h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Elige tu proyecto</h2>

                <ListadoProyectos />

            </div>
        </aside>
    );
}
 
export default Sidebar;