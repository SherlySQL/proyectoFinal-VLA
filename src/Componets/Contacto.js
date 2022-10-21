import React, { Component } from "react";
import { ReactDOM } from "react";

//imagenes utilizadas
import main20 from '../imagenes/fondos/main20.jpeg';
import logo from '../imagenes/logo/vlamerica-logo.png';
import laptop from '../imagenes/fondos/laptop-and-coffe.jpg';
import fb from '../imagenes/redes/fb.png';
import insta from '../imagenes/redes/insta.png';
import tiktok from '../imagenes/redes/tiktok.png';
import linkin from '../imagenes/redes/in.png';


class Contacto extends Component {

    render() {
        return (

            <>
                {/* <!------------------------------------------------------------------------- SECCION #1 ------------------------------------------------------------------------------------> */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 mt-5 titulo">¿Deseas Infomación?</h1>
                        <p>Te preparamos con las habilidades que necesitas para un mejor futuro.</p>
                        <p className="text-info">¡No lo pienses más, ponte en contacto con nosotros!</p>
                    </div>
                </div>


                {/* <!------------------------------------------------------------------------- FORMULARIO #2 ------------------------------------------------------------------------------------> */}

                <div className="container">
                    <div className="row d-flex">

                        <div className="col-md-6 text-center mt-5">
                            <div className="info-left">
                            <h5>¿Haznos saber Cúales Cursos te interesan?</h5>
                                <form className="card mt-4">
                                    <div className="card-body">
                                     
                                        <div className="form-group form-control form-check text-left ">
                                            <h5 className="my-2 titulo text-center">Idiomas</h5>
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion1}></input>
                                            <label className="form-check-label ml-4">Inglés Laboral</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion2}></input>
                                            <label className="form-check-label ml-4">Inglés para Niños A1 | A2</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion3}></input>
                                            <label className="form-check-label ml-4">Portugués Integral</label>
                                        </div>

                                        <div className="form-group form-control form-check text-left">
                                            <h5 className="my-2 titulo text-center">Tecnológicos</h5>
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion4}></input>
                                            <label className="form-check-label ml-4">Master Front End Web Developer</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion5}></input>
                                            <label className="form-check-label ml-4">Cisco</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion6}></input>
                                            <label className="form-check-label ml-4">Bootcamp Cisco CCNA</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion7}></input>
                                            <label className="form-check-label ml-4">Linux Administrator</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion8}></input>
                                            <label className="form-check-label ml-4">Amazon Web Services Cloud Practitioner</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion9}></input>
                                            <label className="form-check-label ml-4">Amazon Web Services Architect</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion10}></input>
                                            <label className="form-check-label ml-4"> Microsoft SQL</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion11}></input>
                                            <label className="form-check-label ml-4">Ciberseguridad</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion12}></input>
                                            <label className="form-check-label ml-4">Programación Python</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion13}></input>
                                            <label className="form-check-label ml-4">Microsoft Azure</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion14}></input>
                                            <label className="form-check-label ml-4">Marketing Digital</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion15}></input>
                                            <label className="form-check-label ml-4">Virtualización VMWare</label>
                                        </div>

                                        <div className="form-group form-control form-check text-left">
                                            <h5 className="my-2 titulo text-center">Gerenciales</h5>
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion16}></input>
                                            <label className="form-check-label ml-4">Gerencia de Proyectos</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion17}></input>
                                            <label className="form-check-label ml-4">Microsoft Excel Básico | Intermedio | Avanzado</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion18}></input>
                                            <label className="form-check-label ml-4">Lean Six Sigma Yellow Belt</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion18}></input>
                                            <label className="form-check-label ml-4">Scrum Master Professional</label>
                                            <br />
                                            <input className="form-check-input ml-1" type="checkbox" value="something" ref={this.opcion19}></input>
                                            <label className="form-check-label ml-4">ITIL v4</label>
                                        </div>
                                   

                                        <div className="form-group form-control mt-5"> 
                                            <h5 className="my-3 titulo text-center">Información Requerida *</h5>                                          
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Nombre Completo *" required ref={this.nombreref}></input>
                                            </div>                        
                                            <div className="form-group">
                                                <input className="form-control" type="tel" placeholder="WhatsApp *" required ref={this.whatsAppref}></input>
                                            </div>                                           
                                            <div className="form-group">
                                                <input className="form-control" type="email" placeholder="Correo Electrónico *" required ref={this.correoref}></input>
                                            </div>                                           
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Pais *" required ref={this.paisref}></input>
                                            </div>                                          
                                            <div className="form-group">
                                                <textarea className="form-control" cols={30} rows={4} placeholder="Comentarios" ref={this.commentref}></textarea>
                                            </div>                                         
                              
                                            <input className="btn btn-danger btn-block mb-3" type="submit" value="¡Sí, quiero aprender!"></input> 
                                         </div>                             
                                    </div>
                                </form>
                            </div>
                        </div>
                        

                        <div className="col-md-6 mt-5">
                            <div className="info-right">
                                <img src={main20} className="card-img-top my-5 sombra"  alt="imagen" />
                                <br/><br/><br/>
                                <img src={logo} className="my-5"  alt="imagen" />
                                <br/><br/><br/>
                                <img src={laptop} className="card-img-top my-5 sombra"  alt="imagen" />
                            </div>
                        </div>
                    </div>
                </div>

            {/* <!------------------------------------------------------------------------- ROW#5 ------------------------------------------------------------------------------------> */}
            <div className="container-fluid mt-5 p-5 bg-light">    

            <h2 className=" titulo">Contactos</h2>
            </div>
            

            {/* <!------------------------------------------------------------------------- ROW#6 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid fondo p-4" >

                    <div class="row ">
                        <div class="col-md-4 mt-2">
                            <h5 class="mt-2  text-center">¿Sabias que Contamos con?</h5>
                            <h5 class="mt-5  text-center">VLA Consulting</h5>
                            <p class=" text-center">Para tu Compañía</p>
                            <p>VLA Consulting es la forma mas fácil de desarrollar implementaciones tecnológicas, tanto nivel de cámaras de seguridad, servidores, Hardware, Redes inalámbricas y mucho más!!, esto permite que su empresa pueda dar el salto al mundo de la tecnología y llegar al próximo nivel, en donde puedes gestionar toda una red con un mismo proveedor, abarcando todas las tecnologías actuales en un solo lugar.</p>
                        </div>

                        <div class="col-md-4  mt-2 p-5 text-center">
                            <p>Panamá +507 833-5602</p>
                            <p>USA +1 786-633-4717</p>
                            <p>Costa Rica +506 4102 3282</p>
                            <p>España +34 911 23 5522</p>
                        </div>

                        <div class="col-md-4  justify-content-center mt-5">
                            <h4 class=" mt-2 mb-5">Seguínos</h4>
                            <div>
                                <a href="#"><img src={fb} alt="fb" height={40}/></a>
                                <a href="#"><img src={insta} alt="insta"  height={40} /></a>
                                <a href="#"><img src={tiktok} alt="tiktok"  height={40} /></a>
                                <a href="#"><img src={linkin} alt="in"  height={40} /></a>
                            </div>
                        </div>
                    </div>

                </div>

            </>
        )
    }

}

export default Contacto


