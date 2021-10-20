import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../componente/menu/menu"

export default class Borrar extends React.Component {
    state = {
        proveedor: []
    }
    componentDidMount() {
        fetch('https://localhost/Exproof/public/api/detalle/' + this.props.location.state.idp)
            .then(response => response.json())
            .then(alumnosJson => this.setState({ proveedor: alumnosJson }))
        fetch('https://localhost/Exproof/public/api/borrar/' + this.props.location.state.idp, { method: 'delete' });

    }
    render() {
        const { proveedor } = this.state
        var fd = new Date();
        var fecha = fd.getFullYear() + '/' + (fd.getMonth() + 1) + '/' + fd.getDate();
        var tiempo = fd.getHours() + '/' + fd.getMinutes() + '/' + fd.getSeconds();
        return (
            <div className="container">
                <Menu/>
                <center>
                <div className=" mb-1" style={{ maxWidth: "750px" }}>
                    <div className="row no-gutters">
                        <div className="alert alert-success" role="alert" style={{ maxWidth: "750px" }}>
                            <h4 className="alert-heading">Registro Borrado</h4>
                            <p>El registro del proveedor {proveedor.nombrecontact_prov} de la empresa <br />{proveedor.razon_social} se borro exitosamente!!!!!<br />
                                En caso de contactar guarde los siguientes datos:<br />
                                Telefono:   {proveedor.telefono_prov}<br />
                                Correo:   {proveedor.correo_prov}</p>
                            <hr />
                            <p className="mb-0">Eliminado el {fecha + '--------' + tiempo} </p>
                            <Link to='/'>
                                <button type="button" className="btn btn-light">
                                    Regresar
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                </center>
                </div>
                
        )
    }
}