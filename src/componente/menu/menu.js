import React from 'react'
import Nav from 'react-bootstrap/Nav'

export default class Lista extends React.Component {
    render() {
        return<Nav fill variant="tabs" style={{background: "linear-gradient( #D6EAF8  1%, rgba(0, 0, 0, 0) 100%)"}}>
                <Nav.Item >
                    <Nav.Link href="/">Proveedores</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Catalogo2">Catalogo2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Catalogo3">Catalogo3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Catalogo4">Catalogo4</Nav.Link>
                </Nav.Item>
            </Nav>
    }
}