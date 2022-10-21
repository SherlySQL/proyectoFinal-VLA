import React, {Component} from "react";
import axios from "axios";


//imagenes utilizadas
import logo from '../imagenes/logo/vlamerica-logo.png';
import fb from '../imagenes/redes/fb.png';
import insta from '../imagenes/redes/insta.png';
import tiktok from '../imagenes/redes/tiktok.png';
import linkin from '../imagenes/redes/in.png';

import Adri from '../imagenes/colaboradores/Adri.png';
import Arnal from '../imagenes/colaboradores/Arnal.png';
import Ceci from '../imagenes/colaboradores/Ceci.png';
import Daniel from '../imagenes/colaboradores/Daniel.png';
import Daniela from '../imagenes/colaboradores/Daniela.png';
import Eli from '../imagenes/colaboradores/Eli.png';
import Irela from '../imagenes/colaboradores/Irela.png';
import Joha from '../imagenes/colaboradores/Joha.png';
import Nahu from '../imagenes/colaboradores/Nahu.png';
import Nere from '../imagenes/colaboradores/Nere.png';
import Steven from '../imagenes/colaboradores/Steven.png';
import Yeni from '../imagenes/colaboradores/Yeni.png';


const url="https://jsonplaceholder.typicode.com/users";


export default class Empleados extends React.Component {  
        // De esta Manera en 1 sola linea se exporta y se crea la clase

   //--------------------------------------------------------------------------LOGICA TS READ-------------------------------------------------------------------------------------------

    //Creamos un objeto llamado State
    state = {
        //Arreglo vacio para Read
        persons:[], 

        //Objeto vacio para Incluir
        form:{      
            id: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            company: ''
        }
    };


    //componentDidMount es una función de React para que toda la información que está
    // dentro de ella se la pase de una vez a la vista HTML
    componentDidMount(){
         this.peticionGET();
    }

    //FUNCIÓN PARA READ
    peticionGET = () => {
        axios.get(url)
            .then(resp => { //Esta es la respuesta del Api
                const persons = resp.data; //Creo otro objeto llamado const "persons" y en el guardo la respuesta del Api
                this.setState({ persons }) //Con la const "persons" llenamos el setState
                console.log(resp.data)
            }).catch(error => {
                console.log(error.message);
            })
    }
    

    
        //"handleChange" hace cambio de estado, va sincronizando en tiempo real
        // lo que recibe en el input y lo pasa a setState
        handleChange=event=>{
            this.setState({
                form:{   
                    ...this.state.form, //El setState hereda todos los atributos que hay en el form 
                    [event.target.name]: event.target.value
                }
            });
            console.log(this.state.form);
        }


        // //FUNCIÓN PARA INCLUIR
        // peticionPOST=()=>{
        //     delete this.state.form.id; //Eliminamos el autoincremento que le añadimos en el input/form/value, para que tome el id de la BD
        //     axios.post(url,this.state.form)
        //     .then(resp=>{
        //         this.peticionGET();
        //     }).catch(error=>{
        //         console.log(error.message);
        //     })
        // }


        //para que el submit no recargue
        recibirDatos=(e)=> {
            e.preventDefault();

        }




    //-------------------------------------------------------------------------VISTA DE HTML-------------------------------------------------------------------

   render () {
    //Para el value de los inputs del form
    const {form}=this.state;

    return (

        <>
            {/* <!------------------------------------------------------------------------- TEXTO #1 ------------------------------------------------------------------------------------> */}
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 mt-5 titulo">Conozca a nuestros Asesores Profesionales</h1>
                    <p>Contamos con un gran equipo de personas dispuestas a ayudarle a lograr su meta por medio de la educación. Actualmente contamos con asesores de distintas nacionalidades a lo largo del continente, México, Nicaragua, Costa Rica, Colombia, Venezuela y Argentina son parte de los países de los que ellos proceden y residen. ¡Cualquier duda o consulta, no dude en contactar a su Asesor Profesional asignado, estamos para servirle.!</p>
                </div>
            </div>

            {/* <!------------------------------------------------------------------------- CARROSEL #2 ------------------------------------------------------------------------------------> */}     
            <div className="container py-5 fondo sombra">

                <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">

                    {/* <!-- Imagenes --> */}
                    <div className="carousel-inner responsive2">
                        <div className="carousel-item active" data-interval="100">                              
                            <img src={Adri} className="rounded sombra" height={230} width={210} alt="imagen"/>  
                            <img src={Arnal} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Ceci} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Daniel} className="rounded sombra" height={230} width={210} alt="imagen"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src={Daniela} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Eli} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Irela} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Joha} className="rounded sombra" height={230} width={210} alt="imagen"/>
                        </div>
                        <div className="carousel-item" data-interval="100">
                            <img src={Nahu} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Nere} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Steven} className="rounded sombra" height={230} width={210} alt="imagen"/>
                            <img src={Yeni} className="rounded sombra" height={230} width={210} alt="imagen"/>
                        </div>
                    </div>

                    {/* <!-- Botones --> */}
                    <a className="carousel-control-prev" href="#" data-target="#carouselExampleInterval" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#"  data-target="#carouselExampleInterval" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>



            {/* <!------------------------------------------------------------------------- FORM #3 ------------------------------------------------------------------------------------> */}     

            <div className="container p-3 mt-5">
                <h2 className="my-5 titulo">Datos de Nuestros Asesores Profesionales</h2>
                
                {/* <hr/>
                <hr/>

                <div className="row d-flex">
                    <div className="col-md-10 text-justify m-auto">
                        <form onSubmit={()=>this.recibirDatos()} onChange={()=>this.peticionPOST()} className="card mt-4" >
                            <div className="card-body">

                                <div className="form-row">
                                    <div className="form-group col-md-1">
                                        <label for="inputNombre">#ID:</label>
                                        <input type="text" className="form-control" readOnly value={this.state.persons.length+1}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputNombre">Nombre:</label>
                                        <input type="text" className="form-control" placeholder="nombre, apellidos" name='name' onChange={this.handleChange} value={form.name}/>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label for="inputEmail">Email:</label>
                                        <input type="email" className="form-control" placeholder="ejemplo@cr.com" name='email' onChange={this.handleChange} value={form.email}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputPhone">phone:</label>
                                        <input type="tel" className="form-control" placeholder="0000-0000" name='phone' onChange={this.handleChange} value={form.phone}/>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-7">
                                        <label for="inputAddress">Address:</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="país, cuidad, avenida" name='address' onChange={this.handleChange} value={form.address}/>
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label for="inputCompany">Company:</label>
                                        <input type="text" className="form-control" placeholder="Company" name='company' onChange={this.handleChange} value={form.company}/>
                                    </div> 
                                    <div className="col-md-2 mt-3 pt-3">
                                        <button type="submit" className="btn btn-info btn-block ">Incluir</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>

            <hr/>
            <hr/>


            {/* <!------------------------------------------------------------------------- TABLA #4 ------------------------------------------------------------------------------------> */}     

            <div className="container p-3 mt-5">
                <table className="table table-striped m-auto text-center" id="tabla">
                    <thead>
                        <tr className="bg-dark text-center">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Company</th> 
                            {/* <th>Acciones</th> */}
                        </tr>
                    </thead>

                    <tbody>          
                        {this.state.persons.map((item)=>(
                            <tr>    
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address.city}</td>
                                <td>{item.company.name}</td> 
                                {/* <td><a href="#" className="btn btn-outline-info">Editar</a>{"  "}  
                                <a href="#" className="btn btn-outline-danger">Eliminar</a> </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>  

            {/* <!------------------------------------------------------------------------- ROW#5 ------------------------------------------------------------------------------------> */}
            <div className="container-fluid mt-5 p-5 bg-light">
                   <img src={logo} className="my-2"  alt="imagen" />
            </div>


            {/* <!------------------------------------------------------------------------- ROW#6 ------------------------------------------------------------------------------------> */}
            <div className="container-fluid fondo p-5" >
                <div class="row ">
                        <div class="col-md-4 mt-2">
                            
                            <h5 class="mt-5  text-center">VLA of America</h5>
                            <p>Te preparamos con las habilidades que necesitas para un mejor futuro.</p>
                            <p className="text-info">¡No lo pienses más, ponte en contacto con nosotros!</p>
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







