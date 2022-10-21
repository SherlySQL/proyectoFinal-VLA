
import React, { Component } from "react";
import {BrowserRouter,Route} from 'react-router-dom'



//Componentes
import Navbar from './Componets/Navbar';
import Main from './Componets/Main';
import Acerca from './Componets/Acerca';
import Contacto from './Componets/Contacto';
import Empleados from './Componets/Empleados';
import Cursos from './Componets/Cursos';
import Footer from './Componets/Footer';


class Router extends Component {
    render () {

        return (
            <BrowserRouter>               

                    <Navbar /> 
                    {/* SISTEMA DE RUTAS  */}
                    {/* EXACT es para que nos tire las rutas exactas que aparecen en la barra de 
                        navegación de internet  */}
                  
                    <Route exact path="/proyectoFinal-VLA" component={ Main } /> {/* Al Main no le puse objeto, 
                                                                 Para que al cargar la pagina, 
                                                                 Me muestre Main de una vez*/}
                    <Route exact path="/acerca" component={ Acerca } /> 
                    <Route exact path="/contacto" component={ Contacto } />
                    <Route exact path="/empleados" component={ Empleados } />
                    <Route exact path="/cursos" component={ Cursos } />                                            
                    <Footer />                    
           </BrowserRouter>
        )
    }
}

export default Router 
