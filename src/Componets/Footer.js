import React, {Component} from "react";
import { ReactDOM } from "react";



class Footer extends Component {

    render () {

        return (

            // <footer className="container-fluid text-center bg-dark fixed-bottom text-info">
           <footer className="container-fluid text-center bg-dark text-info"> 
                <div className="row">
                    <div className="col">
                        <p className="mt-2">Copyright&copy;  Virtual Learning of America 2022</p>
                    </div>
                </div>
            </footer>

        )
    }

}

export default Footer