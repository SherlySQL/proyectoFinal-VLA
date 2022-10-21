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
                                <p className="card-text mt-5">Duración: 3 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El curso de Marketing Digital de VLA está diseñado para ayudarte a comprender y dominar todos los aspectos desde el nivel básico hasta llegar a ser experto en temas de: Estratégia, branding, técnicas y ciclos de vida de los clientes.</p>
                                <p className="card-text p-2">No requiere de ninguna experiencia previa. Se analizarán ejemplos de empresas reales, son sesiones no solo teóricas, sino también prácticas para poner por obra lo aprendido clase a clase.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso2} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Inglés" />
                                <h4 className="card-title mt-3">Cursos de Inglés</h4>
                                <p className="card-text mt-5">Duración: 4 meses</p>
                                <p className="card-text">Limite: 15 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El programa tiene una duración de 4 meses por módulo. Los módulos es tán basados en el marco Europeo <strong>(A1 – A2 -B1 – B2)</strong></p>
                                <p className="card-text">Los es tudiantes tendrán profesores exper tos y nativos según el nivel de ubicación.</p>
                                <p className="card-text"><strong>¿EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">¡Muy sencillo! Contáctanos para un examen de ubicación y uno de nuestros asesores se pondrá en contacto contigo para que puedas hacerlo completamente ¡GRATIS!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso3} className="card-img-top rounded-circle" alt="Técnico en Cisco CCNA" />
                                <h4 className="card-title mt-3">Técnico en Cisco CCNA</h4>
                                <p className="card-text mt-5">Duración: 6 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Certifíquese para el examen de Cisco <strong>200-301</strong>, ponemos a disposición todas las herramientas necesarias para lograr su meta.</p>
                                <p className="card-text p-3">En es te programa aprenderá desde cero hasta dominar la configuración de equipos de telecomunicaciones como routers y switches , así como los nuevos temas incluidos en esta nueva versión enfocados en: Automatización y Seguridad</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso4} className="card-img-top rounded-circle" alt="Cursos de Web Developer" />
                                <h4 className="card-title mt-3">Cursos de Web Developer</h4>
                                <p className="card-text mt-5">Duración: 7 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Está diseñado para iniciar desde 0, sin ningún requisito previo, e ir avanzando por un mundo de tecnologías, abarcando un nivel Junior e incluso finalizando en un nivel Senior, dominando más de 10 lenguajes, tecnologías y librerías en nuestra cartera de conocimiento.</p>
                                <p className="card-text p-3">Se incluirán laboratorios y prácticas para ir formando nuestro portafolio de presentación, con tan solo el primer módulo, estaremos capacitados para desempeñarnos laboralmente.</p>
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
                                <p className="card-text mt-5">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p> 
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Este curso se enfoca en proporcionar a los estudiantes que ya tienen conocimientos previos las habilidades y el conocimiento para obtener la certificación de Cisco CCNA en Routing and Switching.</p>
                                <p className="card-text p-2">En este curso se cubren todos los tópicos que necesitas saber sobre CCNA. Es una excelente guía  bien para aquellos que ya tienen algunos conocimientos y desean repasar algunos temas importantes en preparación para la prueba.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso6} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Linux" />
                                <h4 className="card-title mt-3">Cursos de Linux</h4>
                                <p className="card-text mt-5">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>  
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Dirigido a profesionales de TI que necesiten realizar tareas de administración de Linux, entre ellas: instalación, establecimiento de conectividad de red, gestión de  almacenamiento físico y administración  de seguridad básica</p>
                                <p className="card-text p-2">El curso consta de exposiciones magistrales, demostraciones, laboratorios y tareas que el estudiante deberá de completar lo cual requiere de conocimientos básicos en redes y computación.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso7} className="card-img-top mt-1 p-2 rounded" alt="Curso de AWS" />
                                <h4 className="card-title mt-3">Cursos de AWS</h4>
                                <p className="card-text mt-5">Duración: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">(AWS) es la plataforma en la nube más adoptada y completa en el mundo, que ofrece más de 175 servicios integrales de centros de datos a nivel global.</p>
                                <p className="card-text p-2">En este curso, obtendrá una descripción detallada de conceptos de la nube y de los servicios, la seguridad, la arquitectura, los precios y el soporte de AWS.El curso también le ayuda a prepararse para el examen AWS <strong>Certified Cloud Practitioner.</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                               <img src={curso8} className="card-img-top rounded-circle" height={160} alt="Cursos de Python" />
                               <h4 className="card-title mt-3">Cursos de Python</h4>
                                <p className="card-text mt-5">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Este curso comprende los fundamentos de programación y la implementación en Python de programas orientados a la administración y automatización de tareas.</p>
                                <p className="card-text p-2">Los trabajos de programación Python, son algo que muchas personas interesadas en el campo de la informática buscan. Esto se debe, a que Python es un lenguaje de programación muy popular y muchas compañías diferentes en todo el mundo lo usan para varias tareas diferentes.</p>
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
                                <p className="card-text mt-5">Duración: 8 meses</p>
                                <p className="card-text">Limite: 15 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text"><strong>Niveles de Portugués</strong></p>
                                <p className="card-text">El curso se divide en 2 módulos con 4 diferentes niveles en total: Principiante, Básico, Intermedio y Avanzado; en los cuales se aprender habilidades para desarrollarse en cualquier tipo de ambiente.</p>
                                <p className="card-text"><strong>¿EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">¡Muy sencillo! Contáctanos para un examen de ubicación y uno de nuestros asesores se pondrá en contacto contigo para que puedas hacerlo completamente ¡GRATIS!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso10} className="card-img-top rounded-circle" alt=" Cursos de Español" />
                                <h4 className="card-title mt-3">Cursos de Español</h4>
                                <p className="card-text mt-5">Próximamente</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text mt-5"><strong>¡Curso Disponible Próximamente!</strong></p> 
                                <p className="card-text p-3">Actualmente estamos preparando toda la infomación sobre éste curso y muy pronto la compartiremos contigo. Si quieres saber más, contáctanos y con gusto te informaremos tan pronto esté disponible la información.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso11} className="card-img-top mt-1 p-2 rounded" alt="Cursos de Excel" />
                                <h4 className="card-title mt-3">Cursos de Excel</h4>
                                <p className="card-text mt-5">Duración: 2 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text"><strong>Niveles de Excel</strong></p>
                                <p className="card-text">Excel se divide en 3 diferentes niveles Básico, Intermedio y Avanzado en los cuales se aprender herramientas complementarias entre los niveles las cuales le aportan al estudiante las habilidades para desarrollar en cualquier tipo de ambiente.</p>
                                <p className="card-text"><strong>¿EN QUE NIVEL ME ENCUENTRO?</strong></p>
                                <p className="card-text p-2">¡Muy sencillo! Contáctanos para un examen de ubicación y uno de nuestros asesores se pondrá en contacto contigo para que puedas hacerlo completamente ¡GRATIS!</p>
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
                                <p className="card-text mt-5">Duración: 5 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>        
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Durante el desarrollo de este curso de Project Manager  el estudiante desarrollara su inteligencia y la capacidad de adaptarse a las adversidades y explotando su capacidad de resolución de problemas.</p>
                                <p className="card-text p-2">Con este curso, aprenderás las destrezas necesarias para controlar los proyectos en todas sus facetas utilizando los estándares del Project Management Institute (PMI), cuerpo que ha desarrollado la base de profesionales más extensa a nivel mundial.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso13} className="card-img-top rounded-circle" alt="Cursos de Azure" />
                                <h4 className="card-title mt-3">Cursos de Azure</h4>
                                <p className="card-text mt-5">Duración: 3 meses/nivel</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Microsoft Azure es un servicio de computación en la nube creado por Microsoft para construir, probar, desplegar y administrar aplicaciones y servicios mediante el uso de sus centros de datos.</p>
                                <p className="card-text p-2">Este taller proporcionará conocimiento de los servicios en la nube ycómo se proporcionan esos servicios a través de Microsoft Azure.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso14} className="card-img-top rounded-circle" alt="Cursos de JNCIA"/>
                                <h4 className="card-title mt-3">Cursos de JNCIA</h4>
                                <p className="card-text mt-5">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>       
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Juniper Networks es una de las empresas lideres en el mundo de las redes.</p>
                                <p className="card-text p-3">La certificación Juniper <strong>Networks Certified Associate Junos (JNCIA-Junos)</strong> es la credencial de nivel de entrada requerida para continuar con las certificaciones avanzadas en el track de certificación Junos. Los candidatos exitosos demuestran el conocimiento del sistema operativo Juniper Networks Junos , los fundamentos de redes, y el enrutamiento básico.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso15} className="card-img-top mt-1 p-2 rounded" alt="Cursos de SQL" />
                                <h4 className="card-title mt-3">Cursos de SQL</h4>
                                <p className="card-text mt-4">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">Adquiera todas las habilidades necesarias para administrar bases de datos con confianza, así como resolución de problemas con dinámicas modernas.</p>
                                <p className="card-text p-2">Al finalizar tendrá las habilidades necesarias para administrar elementos clave de la administración de la base de datos de SQL Server, incluida la administración de usuarios, la copia de seguridad de datos, la automat ización yel monitoreo de seguridad.</p>
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
                                <p className="card-text mt-5">Próximamente</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text mt-5"><strong>¡Curso Disponible Próximamente!</strong></p> 
                                <p className="card-text p-3">Actualmente estamos preparando toda la infomación sobre éste curso y muy pronto la compartiremos contigo. Si quieres saber más, contáctanos y con gusto te informaremos tan pronto esté disponible la información.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso16} className="card-img-top rounded-circle" alt="Cursos de Six Sigma" />
                                <h4 className="card-title mt-3">Cursos de Six Sigma</h4>
                                <p className="card-text mt-5">Duración: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>      
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">La certificación <strong>Six Sigma Yellow Belt</strong> está dirigida a aquellas personas que cuentan con roles operativos en la organización y que cuentan con el interés o la necesidad de desarrollar conocimientos básicos en Six Sigma.</p>
                                <p className="card-text p-2">Con este curso, desarrollarás las destrezas fundamentales en la administración de proyectos de mejora utilizando herramientas estadísticas y administrativas para el análisis de problemas y la gestión de mejoramiento continuo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso17} className="card-img-top rounded-circle" alt="Cursos de Scrum" />
                                <h4 className="card-title mt-3">Cursos de Scrum</h4>
                                <p className="card-text mt-5">Duración: 2 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>     
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El enfoque de este curso es teórico práctico ya que se explica la teoría del marco de trabajo de SCRUM, se proponen dinámicas y se hacen simulaciones de SCRUM como una forma de integrar la teoría con la práctica.</p>
                                <p className="card-text p-2">Profundizando en temas de comunicación, liderazgo y desarrollo de equipos colaborativos. Los participantes en este taller podrán optar por la <strong>certificación Scrum Master Certified (SMC®)</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="card" >      
                            <div className="facefront pb-5">
                                <img src={curso18} className="card-img-top rounded-circle" alt="Cursos de Ciberseguridad" />
                                <h4 className="card-title mt-3">Cursos de Ciberseguridad</h4>
                                <p className="card-text mt-3">Duración: 3 meses</p>
                                <p className="card-text">Limite: 30 estudiantes</p>   
                            </div>
                            <div className="faceback">
                                <h4 className="card-title">Sobre Este Curso</h4>
                                <p className="card-text">El curso inicia con las bases en temas de Ciber seguridad y preparar para el examen de Fundamentos de Ciber seguridad.</p>
                                <p className="card-text p-2"> Ayuda a obtener las habilidades y formación necesarias para comenzar la carrera. Tras la realización del curso el alumno estará preparado para afrontar con garantías los exámenes principales de Fundamentos de Ciber seguridad.</p>
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
                    <p>* Consigue el empleo de tus sueños en 4-8 meses</p>
                    <p>* Tutorías ilimitadas</p>
                    <p>* Certificados Oficiales</p>

           </div>  

        </>
            
        )
    }

}

export default Cursos






