import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../componente/menu/menu"

export default class editar extends React.Component {
    state = {
        proveedor: [],
        estados: [],
        municipios: [],
        editar: '',
    }
    componentDidMount() {
        fetch('https://localhost/Exproof/public/api/estados')
            .then(response => response.json())
            .then(estadosJson => this.setState({ estados: estadosJson }))
        fetch('https://localhost/Exproof/public/api/municipios')
            .then(response => response.json())
            .then(municipiosJson => this.setState({ municipios: municipiosJson }))
        fetch('https://localhost/Exproof/public/api/detalle/' + this.props.location.state.idp)
            .then(response => response.json())
            .then(proveedoresJson => this.setState({ proveedor: proveedoresJson }))

    }


    dataField = (e) => {
        this.setState({
            proveedor: {
                ...this.state.proveedor,
                [e.target.name]: e.target.value
            }
        })
    }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            id_proveedor: this.state.proveedor.id_proveedor,
            nombrecontact_prov: this.state.proveedor.nombrecontact_prov,
            telefono_prov: this.state.proveedor.telefono_prov,
            correo_prov: this.state.proveedor.correo_prov,
            razon_social: this.state.proveedor.razon_social,
            rfc_prov: this.state.proveedor.rfc_prov,
            id_estado: this.state.proveedor.id_estado,
            id_municipio: this.state.proveedor.id_municipio,
            cp_prov: this.state.proveedor.cp_prov,
            colonia_prov: this.state.proveedor.colonia_prov,
            calle_prov: this.state.proveedor.calle_prov,
            numero_prov: this.state.proveedor.numero_prov,
        };
        fetch('http://localhost/Exproof/public/api/editar/' + this.state.proveedor.id_proveedor, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => this.setState({ editar: "Registro editado exitosamente !!!!!" }))

    }
    render() {
        const { editar, estados, municipios, proveedor } = this.state
        return (
            <div className="container"
                style={{
                    maxWidth: "750px",

                }}>
                <Menu />
                {editar ? <div className="alert alert-success" role="alert">{editar}</div> : <div></div>}
                <form onSubmit={this.subForm} style={{
                    background: "-webkit - linear - gradient(110deg, #f3b50a 40 %, rgba(0, 0, 0, 0) 30 %), - webkit - radial - gradient(farthest - corner at 0 % 0 %, #cc9c00 70 %, #ffc23f 70 %)",
                    background: "-o-linear-gradient(110deg, #f3b50a 40%, rgba(0, 0, 0, 0) 30%), -o-radial-gradient(farthest-corner at 0% 0%, #cc9c00 70%, #ffc23f 70%)",
                    background: "-moz-linear-gradient(110deg, #f3b50a 40%, rgba(0, 0, 0, 0) 30%), -moz-radial-gradient(farthest-corner at 0% 0%, #cc9c00 70%, #ffc23f 70%)",
                    background: "linear-gradient(110deg, #f3b50a 40%, rgba(0, 0, 0, 0) 30%), radial-gradient(farthest-corner at 0% 0%, #cc9c00 70%, #ffc23f 70%)",

}}>

                <h1>Editar proveedor</h1>
                <div className="row no-gutters">
                    <div className="form-group col-md-8">
                        <label>Nombre del proveedor</label>
                        <input type="text" name="nombrecontact_prov" defaultValue={proveedor.nombrecontact_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-7">
                        <label>Correo</label>
                        <input type="text" name="correo_prov" defaultValue={proveedor.correo_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-5">
                        <label>Telefono</label>
                        <input type="text" name="telefono_prov" defaultValue={proveedor.telefono_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-7">
                        <label>Razon social</label>
                        <input type="text" name="razon_social" defaultValue={proveedor.razon_social} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-5">
                        <label>RFC</label>
                        <input type="text" name="rfc_prov" defaultValue={proveedor.rfc_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="estados">Estado</label>
                        <select name="id_estado" id="estados" className="form-control" onChange={this.dataField}>
                            {estados.map((estados, i) =>
                                <option value={estados.id_estado} key={i}>
                                    {(estados.id_estado === proveedor.id_estado) ?
                                        '- - -' + estados.nombre_est + '- - -'
                                        :
                                        estados.nombre_est
                                    }</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="municipios">Municipio</label>
                        <select name="id_municipio" id="municipios" className="form-control" onChange={this.dataField}>
                            {municipios.map((municipios, i) =>
                                <option value={municipios.id_municipio} key={i}>
                                    {(municipios.id_municipio === proveedor.id_municipio) ?
                                        '- - -' + municipios.nombre_mun + '- - -'
                                        :
                                        municipios.nombre_mun
                                    }</option>)}
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label>CP</label>
                        <input type="text" name="cp_prov" defaultValue={proveedor.cp_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-5">
                        <label>Colonia</label>
                        <input type="text" name="colonia_prov" defaultValue={proveedor.colonia_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-5">
                        <label>Calle</label>
                        <input type="text" name="calle_prov" defaultValue={proveedor.calle_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Numero</label>
                        <input type="text" name="numero_prov" defaultValue={proveedor.numero_prov} className="form-control form-control-sm" onChange={this.dataField} />
                    </div>

                </div>

                <br />
                <center>
                <button type="submit" className="btn btn-primary">Registrar</button>
                {"                        "}
                <Link to='/'>
                    <button type="button" className="btn btn-danger ">
                        Cancelar
                    </button>
                </Link>

                </center>

                </form>
            </div >
        );
    }
}
