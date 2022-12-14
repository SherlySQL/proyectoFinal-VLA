import React, {Component} from "react";
import { ReactDOM } from "react";

//imagenes utilizadas
import webDeveloper from '../imagenes/fondos/2.web-developer.jpg';
import curso1 from '../imagenes/cursos/1.marketing-digital.jpg';
import curso2 from '../imagenes/cursos/2.ingles-laboral.jpg';
import curso3 from '../imagenes/cursos/3.cisco.png';
import curso4 from '../imagenes/cursos/4.master-webdev.jpg';
import curso5 from '../imagenes/cursos/5.vmware.png';
import curso6 from '../imagenes/cursos/6.linux.jpg';
import curso7 from '../imagenes/cursos/7.aws.png';
import curso8 from '../imagenes/cursos/8.python.png';
import curso9 from '../imagenes/cursos/9.portugues.jpg';
import curso10 from '../imagenes/cursos/10.espanol.png';
import curso11 from '../imagenes/cursos/11.excel.jpg';
import curso12 from '../imagenes/cursos/12.project-management.png';
import curso13 from '../imagenes/cursos/13.Azure.png';
import curso14 from '../imagenes/cursos/14.juniperpng.png';
import curso15 from '../imagenes/cursos/15.SQL.png';
import curso16 from '../imagenes/cursos/16.Sigma-1.jpg';
import curso17 from '../imagenes/cursos/17.scrum.png';
import curso18 from '../imagenes/cursos/18.ciberseguridad.jpg';
import logo from '../imagenes/logo/vlamerica-logo.png';

class Cursos extends Component {

render () {
    return (

        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">     
                    <img src={webDeveloper} className="card-img-top sombra responsive1" alt="Cursos"/>           
                    <h1 className="display-4 mt-5">Catalogo de Cursos de VLA</h1>
                </div>
            </div>
                


            <div className="container"> 
            {/* <!------------------------------------------------------------------------- ROW#1 ------------------------------------------------------------------------------------> */}
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso1} className="card-img-top mt-1 p-2 rounded" alt=" Cursos de Marketing Digital" />
                                <h4 className="card-title mt-3">Cursos de Marketing Digital</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El curso de Marketing Digital de VLA est?? dise??ado para ayudarte a comprender y dominar todos los aspectos desde el nivel b??sico hasta llegar a ser experto en temas de: Estrat??gia, branding, t??cnicas y ciclos de vida de los clientes.</p>
                                <p className="card-text p-2">No requiere de ninguna experiencia previa. Se analizar??n ejemplos de empresas reales, son sesiones no solo te??ricas, sino tambi??n pr??cticas para poner por obra lo aprendido clase a clase.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso2} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Ingl??s" />
                                <h4 className="card-title mt-3">Cursos de Ingl??s</h4>
                                <p className="card-text mt-5">Duraci??n: 4 meses</p>
                                <p className="card-text">Limite: 15 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El programa tiene una duraci??n de 4 meses por m??dulo. Los m??dulos es t??n basados en el marco Europeo <strong>(A1 ??? A2 -B1 ??? B2)</strong></p>
                                <p className="card-text">Los es tudiantes tendr??n profesores exper tos y nativos seg??n el nivel de ubicaci??n.</p>
                                <p className="card-text"><strong>??EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">??Muy sencillo! Cont??ctanos para un examen de ubicaci??n y uno de nuestros asesores se pondr?? en contacto contigo para que puedas hacerlo completamente ??GRATIS!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso3} className="card-img-top rounded-circle" alt="T??cnico en Cisco CCNA" />
                                <h4 className="card-title mt-3">T??cnico en Cisco CCNA</h4>
                                <p className="card-text mt-5">Duraci??n: 6 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Certif??quese para el examen de Cisco <strong>200-301</strong>, ponemos a disposici??n todas las herramientas necesarias para lograr su meta.</p>
                                <p className="card-text p-3">En es te programa aprender?? desde cero hasta dominar la configuraci??n de equipos de telecomunicaciones como routers y switches , as?? como los nuevos temas incluidos en esta nueva versi??n enfocados en: Automatizaci??n y Seguridad</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso4} className="card-img-top rounded-circle" alt="Cursos de Web Developer" />
                                <h4 className="card-title mt-3">Cursos de Web Developer</h4>
                                <p className="card-text mt-5">Duraci??n: 7 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Est?? dise??ado para iniciar desde 0, sin ning??n requisito previo, e ir avanzando por un mundo de tecnolog??as, abarcando un nivel Junior e incluso finalizando en un nivel Senior, dominando m??s de 10 lenguajes, tecnolog??as y librer??as en nuestra cartera de conocimiento.</p>
                                <p className="card-text p-3">Se incluir??n laboratorios y pr??cticas para ir formando nuestro portafolio de presentaci??n, con tan solo el primer m??dulo, estaremos capacitados para desempe??arnos laboralmente.</p>
                            </div>
                        </div>
                    </div>
                </div> <br></br> 


                {/* <!------------------------------------------------------------------------- ROW#2 ------------------------------------------------------------------------------------> */}
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso3} className="card-img-top rounded-circle" alt="Bootcamp examen CCNA" />
                                <h4 className="card-title mt-3">Bootcamp examen CCNA</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p> 
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Este curso se enfoca en proporcionar a los estudiantes que ya tienen conocimientos previos las habilidades y el conocimiento para obtener la certificaci??n de Cisco CCNA en Routing and Switching.</p>
                                <p className="card-text p-2">En este curso se cubren todos los t??picos que necesitas saber sobre CCNA. Es una excelente gu??a  bien para aquellos que ya tienen algunos conocimientos y desean repasar algunos temas importantes en preparaci??n para la prueba.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso6} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Linux" />
                                <h4 className="card-title mt-3">Cursos de Linux</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>  
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Dirigido a profesionales de TI que necesiten realizar tareas de administraci??n de Linux, entre ellas: instalaci??n, establecimiento de conectividad de red, gesti??n de  almacenamiento f??sico y administraci??n  de seguridad b??sica</p>
                                <p className="card-text p-2">El curso consta de exposiciones magistrales, demostraciones, laboratorios y tareas que el estudiante deber?? de completar lo cual requiere de conocimientos b??sicos en redes y computaci??n.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso7} className="card-img-top mt-1 p-2 rounded" alt="Curso de AWS" />
                                <h4 className="card-title mt-3">Cursos de AWS</h4>
                                <p className="card-text mt-5">Duraci??n: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">(AWS) es la plataforma en la nube m??s adoptada y completa en el mundo, que ofrece m??s de 175 servicios integrales de centros de datos a nivel global.</p>
                                <p className="card-text p-2">En este curso, obtendr?? una descripci??n detallada de conceptos de la nube y de los servicios, la seguridad, la arquitectura, los precios y el soporte de AWS.El curso tambi??n le ayuda a prepararse para el examen AWS <strong>Certified Cloud Practitioner.</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                               <img src={curso8} className="card-img-top rounded-circle" height={160} alt="Cursos de Python" />
                               <h4 className="card-title mt-3">Cursos de Python</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Este curso comprende los fundamentos de programaci??n y la implementaci??n en Python de programas orientados a la administraci??n y automatizaci??n de tareas.</p>
                                <p className="card-text p-2">Los trabajos de programaci??n Python, son algo que muchas personas interesadas en el campo de la inform??tica buscan. Esto se debe, a que Python es un lenguaje de programaci??n muy popular y muchas compa????as diferentes en todo el mundo lo usan para varias tareas diferentes.</p>
                            </div>
                        </div>
                    </div>
               </div> <br></br>    
            

                {/* <!------------------------------------------------------------------------- ROW#3 ------------------------------------------------------------------------------------> */}
                <div className="row">
                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso9} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Portugues" />
                                <h4 className="card-title mt-3">Cursos de Portugues</h4>
                                <p className="card-text mt-5">Duraci??n: 8 meses</p>
                                <p className="card-text">Limite: 15 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text"><strong>Niveles de Portugu??s</strong></p>
                                <p className="card-text">El curso se divide en 2 m??dulos con 4 diferentes niveles en total: Principiante, B??sico, Intermedio y Avanzado; en los cuales se aprender habilidades para desarrollarse en cualquier tipo de ambiente.</p>
                                <p className="card-text"><strong>??EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">??Muy sencillo! Cont??ctanos para un examen de ubicaci??n y uno de nuestros asesores se pondr?? en contacto contigo para que puedas hacerlo completamente ??GRATIS!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso10} className="card-img-top rounded-circle" alt=" Cursos de Espa??ol" />
                                <h4 className="card-title mt-3">Cursos de Espa??ol</h4>
                                <p className="card-text mt-5">Pr??ximamente</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text mt-5"><strong>??Curso Disponible Pr??ximamente!</strong></p> 
                                <p className="card-text p-3">Actualmente estamos preparando toda la infomaci??n sobre ??ste curso y muy pronto la compartiremos contigo. Si quieres saber m??s, cont??ctanos y con gusto te informaremos tan pronto est?? disponible la informaci??n.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso11} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Excel" />
                                <h4 className="card-title mt-3">Cursos de Excel</h4>
                                <p className="card-text mt-5">Duraci??n: 2 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text"><strong>Niveles de Excel</strong></p>
                                <p className="card-text">Excel se divide en 3 diferentes niveles B??sico, Intermedio y Avanzado en los cuales se aprender herramientas complementarias entre los niveles las cuales le aportan al estudiante las habilidades para desarrollar en cualquier tipo de ambiente.</p>
                                <p className="card-text"><strong>??EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">??Muy sencillo! Cont??ctanos para un examen de ubicaci??n y uno de nuestros asesores se pondr?? en contacto contigo para que puedas hacerlo completamente ??GRATIS!</p>
                            </div>
                        </div>
                    </div>

                    {/* Espacio Libre, sin Card*/}

                </div> <br></br> 


                {/* <!------------------------------------------------------------------------- ROW#4 ------------------------------------------------------------------------------------> */}
                <div className="row">

                <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso12} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Project Management" />
                                <h4 className="card-title mt-3">Cursos de Project Management</h4>
                                <p className="card-text mt-5">Duraci??n: 5 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Durante el desarrollo de este curso de Project Manager  el estudiante desarrollara su inteligencia y la capacidad de adaptarse a las adversidades y explotando su capacidad de resoluci??n de problemas.</p>
                                <p className="card-text p-2">Con este curso, aprender??s las destrezas necesarias para controlar los proyectos en todas sus facetas utilizando los est??ndares del Project Management Institute (PMI), cuerpo que ha desarrollado la base de profesionales m??s extensa a nivel mundial.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso13} className="card-img-top rounded-circle" alt="Cursos de Azure" />
                                <h4 className="card-title mt-3">Cursos de Azure</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Microsoft Azure es un servicio de computaci??n en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos.</p>
                                <p className="card-text p-2">Este taller proporcionar?? conocimiento de los servicios en la nube yc??mo se proporcionan esos servicios a trav??s de Microsoft Azure.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso14} className="card-img-top rounded-circle" alt="Cursos de JNCIA"/>
                                <h4 className="card-title mt-3">Cursos de JNCIA</h4>
                                <p className="card-text mt-5">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Juniper Networks es una de las empresas lideres en el mundo de las redes.</p>
                                <p className="card-text p-3">La certificaci??n Juniper <strong>Networks Certified Associate Junos (JNCIA-Junos)</strong> es la credencial de nivel de entrada requerida para continuar con las certificaciones avanzadas en el track de certificaci??n Junos. Los candidatos exitosos demuestran el conocimiento del sistema operativo Juniper Networks Junos , los fundamentos de redes, y el enrutamiento b??sico.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso15} className="card-img-top mt-1 p-2 rounded" alt="Cursos de SQL" />
                                <h4 className="card-title mt-3">Cursos de SQL</h4>
                                <p className="card-text mt-4">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Adquiera todas las habilidades necesarias para administrar bases de datos con confianza, as?? como resoluci??n de problemas con din??micas modernas.</p>
                                <p className="card-text p-2">Al finalizar tendr?? las habilidades necesarias para administrar elementos clave de la administraci??n de la base de datos de SQL Server, incluida la administraci??n de usuarios, la copia de seguridad de datos, la automat izaci??n yel monitoreo de seguridad.</p>
                            </div>
                        </div>
                    </div>
                </div> <br></br> 


                {/* <!------------------------------------------------------------------------- ROW#5 ------------------------------------------------------------------------------------> */}
                <div className="row">


                <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso5} className="card-img-top rounded-circle" alt="Cursos de VMWare" />
                                <h4 className="card-title mt-3">Cursos de VMWare</h4>
                                <p className="card-text mt-5">Pr??ximamente</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text mt-5"><strong>??Curso Disponible Pr??ximamente!</strong></p> 
                                <p className="card-text p-3">Actualmente estamos preparando toda la infomaci??n sobre ??ste curso y muy pronto la compartiremos contigo. Si quieres saber m??s, cont??ctanos y con gusto te informaremos tan pronto est?? disponible la informaci??n.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso16} className="card-img-top rounded-circle" alt="Cursos de Six Sigma" />
                                <h4 className="card-title mt-3">Cursos de Six Sigma</h4>
                                <p className="card-text mt-5">Duraci??n: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">La certificaci??n <strong>Six Sigma Yellow Belt</strong> est?? dirigida a aquellas personas que cuentan con roles operativos en la organizaci??n y que cuentan con el inter??s o la necesidad de desarrollar conocimientos b??sicos en Six Sigma.</p>
                                <p className="card-text p-2">Con este curso, desarrollar??s las destrezas fundamentales en la administraci??n de proyectos de mejora utilizando herramientas estad??sticas y administrativas para el an??lisis de problemas y la gesti??n de mejoramiento continuo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso17} className="card-img-top rounded-circle" alt="Cursos de Scrum" />
                                <h4 className="card-title mt-3">Cursos de Scrum</h4>
                                <p className="card-text mt-5">Duraci??n: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>     
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El enfoque de este curso es te??rico pr??ctico ya que se explica la teor??a del marco de trabajo de SCRUM, se proponen din??micas y se hacen simulaciones de SCRUM como una forma de integrar la teor??a con la pr??ctica.</p>
                                <p className="card-text p-2">Profundizando en temas de comunicaci??n, liderazgo y desarrollo de equipos colaborativos. Los participantes en este taller podr??n optar por la <strong>certificaci??n Scrum Master Certified (SMC??)</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso18} className="card-img-top rounded-circle" alt="Cursos de Ciberseguridad" />
                                <h4 className="card-title mt-3">Cursos de Ciberseguridad</h4>
                                <p className="card-text mt-3">Duraci??n: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>   
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El curso inicia con las bases en temas de Ciber seguridad y preparar para el examen de Fundamentos de Ciber seguridad.</p>
                                <p className="card-text p-2"> Ayuda a obtener las habilidades y formaci??n necesarias para comenzar la carrera. Tras la realizaci??n del curso el alumno estar?? preparado para afrontar con garant??as los ex??menes principales de Fundamentos de Ciber seguridad.</p>
                            </div>
                        </div>
                    </div>
                </div> <br></br><br></br><br></br><br></br>             
            </div>


            {/* <!------------------------------------------------------------------------- ROW#6 ------------------------------------------------------------------------------------> */}
                <div className="container-fluid mt-5 p-5 bg-light">    
                    <h1 className="display-4  titulo">Detalle de los Cursos de VLA</h1>      
                    <img src={logo} className="my-2"  alt="imagen" />
                </div>
            

            {/* <!------------------------------------------------------------------------- ROW#7 ------------------------------------------------------------------------------------> */}
            <div className="container-fluid fondo p-5" >
                
                    <p>* Clases en vivo (no pre-grabadas)</p>
                    <p>* Opciones flexibles de pago</p>
                    <p>* Ayuda gratis para buscar empleo</p>
                    <p>* Consigue el empleo de tus sue??os en 4-8 meses</p>
                    <p>* Tutor??as ilimitadas</p>
                    <p>* Certificados Oficiales</p>

           </div>  

        </>
            
        )
    }

}

export default Cursos






