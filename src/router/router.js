import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Reporte from '../componente/reporte'
import Detalle from '../componente/detalle'
import Alta from '../componente/alta'
import Borrar from '../componente/borrar'
import Editar from '../componente/editar'

export default function router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Reporte} />
                <Route exact path="/detalle" component={Detalle} />
                <Route exact path="/alta" component={Alta} />
                <Route exact path="/borrar" component={Borrar} />
                <Route exact path="/editar" component={Editar} />
                
            </Switch>
        </BrowserRouter>
    )
}