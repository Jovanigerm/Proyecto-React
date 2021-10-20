import React from 'react'
import { Link } from 'react-router-dom'
import "../css/vistadetalle.css"
import Menu from "../componente/menu/menu"

export default class Detalle extends React.Component {
    state = {
        proveedor: []
    }
    componentDidMount() {
        fetch('https://localhost/Exproof/public/api/detalle/' + this.props.location.state.idp)
            .then(response => response.json())
            .then(proveedoresJson => this.setState({ proveedor: proveedoresJson }))
    }
    render() {
        const { proveedor } = this.state
        return (
            <div className="container">
                <Menu />
                <br />
                <div className="card mb-1">
                    <div className="row no-gutters">
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-6">
                        <h2>Detalle de proveedor </h2>

                            <div className="card-body">
                                <table>
                                    <thead>
                                        <tr>
                                            <td className="dato"><b>Nombre: </b></td>
                                            <td>{proveedor.nombrecontact_prov}</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="dato" ><b>Telefono: </b></td>
                                            <td>{proveedor.telefono_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Razon Social: </b></td>
                                            <td>{proveedor.razon_social}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>RFC: </b></td>
                                            <td>{proveedor.rfc_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Correo: </b></td>
                                            <td>{proveedor.correo_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Estado: </b></td>
                                            <td>{proveedor.id_estado}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Municipio: </b></td>
                                            <td>{proveedor.id_municipio}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>C.P: </b></td>
                                            <td>{proveedor.cp_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Colonia: </b></td>
                                            <td>{proveedor.colonia_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Calle: </b></td>
                                            <td>{proveedor.calle_prov}</td>
                                        </tr>
                                        <tr>
                                            <td className="dato" ><b>Numero exterior: </b></td>
                                            <td>{proveedor.numero_prov}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body">
                                <img src="https://www.franquiciasdecafe.com.mx/wp-content/uploads/2014/05/como-elegir-proveedores-cafeteria.jpg"></img>
                            </div>
                            <br />
                            <br />
                            <p className="card-text">
                                <small className="text-mute">Ultima actualizacion {proveedor.created_at}</small>
                            </p>
                        </div>
                        <center>
                            <Link to='/'>
                                <button type="button" className="btn btn-primary">
                                    Regresar
                                </button>
                            </Link>

                        </center>

                    </div>
                </div>
                <br />

            </div>
        )
    }
}