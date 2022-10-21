import logo from './logo.svg';
import './App.css';
import axios from 'axios';

//import logo from './Assets/Img/logo.svg'


//RUTAS
import Router from './Router';


function App() { //El nombre de esta Funcion debe ser igual al Archivo App.js y el export 
  
  //VARIABLES

  //LA LOGICA DEL JS //CONSUMO DE API
   axios.get("https://randomuser.me/api/")
    .then(data =>{
    console.log (data)
   })
   

  return ( 

    //Div Principal
    <div className="App"> 
        {/* Se llaman los Componentes para pintarlos en Pantalla */}

        <div> <Router/> </div> {/*Esta Etiqueta llama a todos los componentes que esten 
                                dentro del BrowserRouter en Router.js, 
                                EN ANGULAR = ROUTER-OUTLET*/}
       
    </div>
  );
}

export default App; 