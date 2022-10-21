import React, {Component} from "react";
import { ReactDOM } from "react";

//imagenes utilizadas
import videoCall from '../imagenes/img/video-call.png';
import certificado from '../imagenes/img/certificate5.png';
import contrato from '../imagenes/img/deal4.png';


class Acerca extends Component {

    render () {

        return (

            <>
            {/* <!------------------------------------------------------------------------- SECCION #1 ------------------------------------------------------------------------------------> */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 mt-5 titulo">¿Por qué elegir a VLA?</h1>
                        <p>Aquí vamos un paso más allá y te damos asistencia para conseguir un nuevo empleo, preparándote para trabajar directamente con algunas de las empresas más importantes del mundo.</p>
                        <p>Con VLA adquieres habilidades profesionales, certificados y títulos en línea.</p>
                    </div>
                </div>

                <h3 className="my-5 titulo">Acerca de VLA of América</h3>

            {/* <!------------------------------------------------------------------------- SECCION #2 ------------------------------------------------------------------------------------> */}
                <div className="fondo">
                    <div className="container fondo">
                        <div className="row d-flex">
                            <div className="col-sm-4 text-center mt-5">
                                <img src={videoCall} className="mt-3 mb-5" height={170} alt="imagen" /> 
                                <h5 className="display-5 text-center mt-5">100% En Vivo</h5>
                                <p>Todos los cursos de VLA son enseñados totalmete en vivo, con un método de enseñanza único. Las clases de VLA permiten a todos nuestros estudiantes interactuar con sus profesores y responder todas sus dudas en tiempo real.</p>
                            </div>
                            <div className="col-sm-4 text-center mt-5">
                                <img src={certificado} className="mt-4"  height={270} alt="imagen" />
                                <h5 className="display-5 text-center mt-5">Certifícate con VLA</h5>
                                <p>Te preparamos para ganar las certificaciones más importantes de la industria como Cisco, PMP, Microsoft Azure, Scrum y muchas más. Con profesores expertos y certificados 100% en vivo por Internet.</p>
                                <a href="#" className="btn btn-outline-info bordex my-5 text-center">CONOCE MÁS SOBRE VLA</a>
                            </div>
                            <div className="col-sm-4 text-center mt-5">
                                <img src={contrato} height={250} alt="imagen" />
                                <h5 className="display-5 text-center mt-5">Ayuda gratis para buscar empleo</h5>
                                <p>Uno de los más grandes beneficios de VLA es que  aquí tienes un programa de asistencia completamente gratis que te prepara y ayuda a conseguir tu próxima entrevista de trabajo para asegurar tu éxito.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!------------------------------------------------------------------------- SECCION #3 ------------------------------------------------------------------------------------> */}
                <div className="container">             
                    <h3 className="mt-5  titulo">Lo que nuestros estudiantes dicen de VLA</h3>
                    <div className="row d-flex text-center">
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/dKZq3YiJ7Xo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/Y-0B0wIGPeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/HyEjo_toTbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div className="row d-flex text-center mb-5">
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/z-1Ng1k66Z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                        </div>
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/AuWDhCbSk80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-sm-4  mt-5">
                            <iframe width="360" height="215" src="https://www.youtube.com/embed/jGkawQuwekM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            

                {/* <!------------------------------------------------------------------------- SECCION #4 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid fondo p-3">
                    <h3 className="mt-5 titulo">Testimonios</h3>
                    <h5 className="titulo">Certificaciones que te pagan bien</h5>
                    <div className="row d-flex">
                        <div className="col-md-3 text-center my-5">
                            <h5 className="display-5 text-center ">Daniela Delgado</h5>
                            <p >VLA me permitió conseguir el trabajo que tanto buscaba, fue casi un milagro</p>
                        </div>
                        <div className="col-md-3 text-center my-5">
                            <h5 className="display-5 text-center ">Alisson Alvarado</h5>
                            <p>En tan solo 2 días encontre el trabajo que tanto buscaba. Solo fue terminar mi curso de ingles y encontré una gran oportunidad</p>
                        </div>
                        <div className="col-md-3 text-center my-5">
                            <h5 className="display-5 text-center ">Jefry Goleath</h5>
                            <p>VLA es una excelente plataforma para buscar empleo, como especialista en redes logré conseguir el empleo que tanto buscaba</p>
                        </div>
                        <div className="col-md-3 text-center my-5">
                            <h5 className="display-5 text-center ">Wendel Rodriguez</h5>
                            <p>Gracias a los convenios que tiene Grupo VLA puede encontrar un trabajo de forma sencilla y comoda</p>
                        </div>
                    </div>
                </div>




        </>
        )
    }

}

export default Acerca