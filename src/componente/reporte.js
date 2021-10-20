import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../componente/menu/menu"


export default class reporte extends React.Component {

    state = {
        proveedores: []
    }

    componentDidMount() {
        fetch('https://localhost/Exproof/public/api/reporte')
            .then(response => response.json())
            .then(proveedoresJson => this.setState({ proveedores: proveedoresJson }))
    }

    render() {
        const { proveedores } = this.state
        return (
            <div className="container">
            <Menu/><br></br>
                <div className="row no-gutters">
                    <div className="col-md-2">
                    <h2>Proveedores</h2>
                    </div>
                    <div className="col-md-10">
                    <p style={{textAlign:"right"}}>
                    <Link to="/alta" >
                        <button type="button" className="btn btn-outline-success btn-sm">Alta de Proveedores</button>
                    </Link>
                </p>

                    </div>
                </div>
                <table className="table table-hover">
                    <thead style={{background: "#AED6F1"}}>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correro</th>
                            <th scope="col">Razon social</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Municipio</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Otros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proveedores.map((proveedor, i) =>
                            <tr key={i} >
                                <td className="table-success">{i+1}</td>
                                <td>{proveedor.nombrecontact_prov}</td>
                                <td>{proveedor.telefono_prov}</td>
                                <td>{proveedor.correo_prov}</td>
                                <td>{proveedor.razon_social}</td>
                                <td>{proveedor.direccion}</td>
                                <td>{proveedor.municipio}</td>
                                <td>{proveedor.estado}</td>
                                <td>
                                    <Link to={{ pathname:'/detalle', state: { idp: proveedor.id_proveedor } }}> 
                                        <button type="button" className="btn btn-outline-info btn-sm">
                                            Detalle
                                        </button>
                                    </Link>
                                    {' '}
                                    <Link to={{ pathname:'/editar', state: { idp: proveedor.id_proveedor } }}>
                                        <button type="button" className="btn btn-outline-warnig btn-sm">
                                            Editar
                                        </button>
                                    </Link>
                                    {' '}
                                    <Link to={{ pathname:'/borrar', state: { idp: proveedor.id_proveedor } }}>
                                        <button type="button" className="btn btn-outline-danger btn-sm">
                                            Borrar
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )
    }
}