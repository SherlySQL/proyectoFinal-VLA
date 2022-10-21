import React, {Component} from "react";
import { ReactDOM } from "react";

//imagenes utilizadas
import code5 from '../imagenes/img/code5.jpg';
import idiomas12 from '../imagenes/img/idiomas12.jpg';
import gerente from '../imagenes/img/gerente.jpg';
import ninos11 from '../imagenes/img/ninos11.jpg';
import clasesvirtuales from '../imagenes/fondos/clasesvirtuales.jpg';
import Estadisticas from '../imagenes/fondos/Estadisticas.png';
import playa2 from '../imagenes/fondos/playa2.jpg';
import Empresas from '../imagenes/empresas/Empresas.png';



class Main extends Component {

    render () {
        return (
            <>
                {/* <!------------------------------------------------------------------------- SECCION #1 ------------------------------------------------------------------------------------> */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 mt-5 titulo">Virtual Learning of America</h1>
                        <p>Las empresas buscan personas con habilidades informáticas, gerenciales, de idiomas y mercadeo digital. Aprende con las clases 100% en vivo por Internet de VLA. Tu rumbo a un mejor empleo empieza aquí.</p>
                    </div>
                </div>


                {/* <!------------------------------------------------------------------------- SECCION #2  IMG PRINCIPAL ------------------------------------------------------------------------------------> */}
                <div className="container fondoImagenmain sombra mb-5">
                        <h4 className="mt-5">TU CAMINO HACIA EL ÉXITO</h4>
                </div>


                {/* <!------------------------------------------------------------------------- SECCION #3 ------------------------------------------------------------------------------------> */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="mt-5 titulo">Actualmente te ofrecemos</h3>
                            <div className="row d-flex">
                                <div className="col-md-3 text-center mt-5">
                                    <img src={code5} className="rounded-circle mt-4 sombra" height={200} width={260} alt="imagen1" />
                                    <h5 className="display-5 text-center mt-5">Cursos de Tecnología</h5>
                                </div>
                                <div className="col-md-3 text-center mt-5">
                                    <img src={idiomas12} className="rounded-circle mt-4 sombra" height={200} width={260} alt="imagen1" />
                                    <h5 className="display-5 text-center mt-5">Cursos de Idiomas</h5>
                                </div>
                                <div className="col-md-3 text-center mt-5">
                                    <img src={gerente} className=" rounded-circle mt-4 sombra" height={200} width={260} alt="imagen1" />
                                    <h5 className="display-5 text-center mt-5">Cursos Gerenciales</h5>
                                </div>
                                <div className="col-md-3 text-center mt-5">
                                    <img src={ninos11} className=" rounded-circle mt-4 sombra" height={200} width={260} alt="imagen1" />
                                    <h5 className="display-5 text-center mt-5">Cursos para Niños</h5>
                                </div>
                            </div>
                    </div>
                </div>


                {/* <!------------------------------------------------------------------------- SECCION #4 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid" > 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-left">
                                <img src={clasesvirtuales} className="card-img-top mt-4 sombra" height={300} width={330} alt="imagen" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-right">   
                                <h3 className="mt-5 titulo">Solicita una clase gratuita</h3>
                                <p className="text-center"> <strong>Toma una clase gratis y vive la experiencia VLA</strong></p>
                                <p className="text-justify "> El 87 % de las personas que aprenden para el desarrollo profesional reportan haber obtenido un ascenso, un aumento o comenzar una mejor carrera.</p>
                                
                                <a href="#" className="btn btn-outline-info bordex mt-3">Elige tu clase gratis</a>
                            </div>
                        </div>
                    </div>
                </div> <br/><br/><br/><br/>


                {/* <!------------------------------------------------------------------------- SECCION #5 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid" > 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="info-left">
                                <h5 className="mt-5 titulo">Datos Estadísticos</h5>
                                <img src={Estadisticas} className="card-img-top mt-4 bordex" height={370} width={330} alt="imagen" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="info-right">  
                                <h5 className="mt-5 titulo">Nuestra Mayor Recompensa es cuando Encuentras un Trabajo Mejor</h5> 
                                <img src={playa2} className="card-img-top mt-4 bordex" height={370} width={330} alt="imagen" />
                            </div>
                        </div>
                    </div>
                </div> <br/><br/><br/>


                <h3 className="my-5 titulo">Compañías que confían en VLA</h3>


                {/* <!------------------------------------------------------------------------- SECCION #6 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid fondo p-5" > 
                    <img src={Empresas} className="card-img-top mt-4" alt="imagen" />
                </div> 


            </>
        )
    }

}

export default Main