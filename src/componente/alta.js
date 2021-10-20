import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../componente/menu/menu"


export default class alta extends React.Component {
    state = {
        nombrecontact_prov: '',
        telefono_prov: '',
        correo_prov: '',
        razon_social: '',
        rfc_prov: '',
        id_estado: '1',
        id_municipio: '1',
        cp_prov: '',
        colonia_prov: '',
        calle_prov: '',
        numero_prov: '',
        estados: [],
        municipios: [],
        alta: '',
    }
    componentDidMount() {
        fetch('https://localhost/Exproof/public/api/estados')
            .then(response => response.json())
            .then(estadosJson => this.setState({ estados: estadosJson }))
        fetch('https://localhost/Exproof/public/api/municipios')
            .then(response => response.json())
            .then(municipiosJson => this.setState({ municipios: municipiosJson }))
    }

    dataField = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    subForm = (e) => {
        e.preventDefault();
        let data = {
            nombrecontact_prov: this.state.nombrecontact_prov,
            telefono_prov: this.state.telefono_prov,
            correo_prov: this.state.correo_prov,
            razon_social: this.state.razon_social,
            rfc_prov: this.state.rfc_prov,
            id_estado: this.state.id_estado,
            id_municipio: this.state.id_municipio,
            cp_prov: this.state.cp_prov,
            colonia_prov: this.state.colonia_prov,
            calle_prov: this.state.calle_prov,
            numero_prov: this.state.numero_prov,
        };
        fetch('http://localhost/Exproof/public/api/alta', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => this.setState({ alta: "Registro Exitoso !!!!!" }))

    }
    render() {
        const { alta, estados, municipios } = this.state
        return (
            <div className="container" style={{ maxWidth: "750px" }}>
                <Menu/>
                {alta ? <div className="alert alert-success" role="alert">{alta}</div> : <div></div>}
                <form onSubmit={this.subForm}>
                <h1>Alta Proveedores</h1>
                    <div className="row no-gutters">
                        <div className="form-group col-md-8">
                            <label>Nombre del proveedor</label>
                            <input type="text" name="nombrecontact_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-7">
                            <label>Correo</label>
                            <input type="text" name="correo_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-5">
                            <label>Telefono</label>
                            <input type="text" name="telefono_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-7">
                            <label>Razon social</label>
                            <input type="text" name="razon_social" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-5">
                            <label>RFC</label>
                            <input type="text" name="rfc_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="estados">Estado</label>
                            <select name="id_estado" id="estados" className="form-control" onClick={this.dataField}>
                                <option>----------------</option>
                                {estados.map((estados, i) => <option value={estados.id_estado} key={i}>{estados.nombre_est}</option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-5">
                            <label htmlFor="municipios">Municipio</label>
                            <select name="id_municipio" id="municipios" className="form-control" onChange={this.dataField}>
                            <option>----------------</option>
                                {(municipios.map((municipios, i) => <option value={municipios.id_municipio} key={i}>{municipios.nombre_mun}</option>))
}

                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label>CP</label>
                            <input type="text" name="cp_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-5">
                            <label>Colonia</label>
                            <input type="text" name="colonia_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-5">
                            <label>Calle</label>
                            <input type="text" name="calle_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>
                        <div className="form-group col-md-2">
                            <label>Numero</label>
                            <input type="text" name="numero_prov" className="form-control form-control-sm" onChange={this.dataField} />
                        </div>

                    </div>

                    <br />
                    <button type="submit" className="btn btn-primary">Registrar</button>
                    {""}
                    <Link to='/'>
                        <button type="button" className="btn btn-outline-danger ">
                            Cancelar
                        </button>
                    </Link>

                </form>
            </div>
        );
    }
}
