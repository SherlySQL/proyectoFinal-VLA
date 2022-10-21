import React, {Component} from "react";
import { ReactDOM } from "react";
import { NavLink } from "react-router-dom";

//imagenes utilizadas
import logo from '../imagenes/logo/vlalogo2.png';


class Navbar extends Component {
    render () {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      
              <a className="navbar-brand my-3" href="#"><img src={logo} width='115' className="rounded"/></a>  

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
          
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                      <NavLink className="nav-link" to="/proyectoFinal-VLA"><span className="sr-only">(current)</span>Inicio</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cursos">Cursos</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/empleados">Empleados</NavLink>
                    </li>

                    <li className="nav-item">
                    
                    </li>

                  </ul>

                  <form className="form-inline my-2 my-lg-0">


                  </form>
                </div>
          </nav>
        )
    }
}
export default Navbar