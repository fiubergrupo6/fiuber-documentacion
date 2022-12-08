import React, { useContext } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './fiuber-navbar.css'

const FiuberNavbar = () => {

  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
      <Navbar.Brand className='brand'>
        Fiuber Docs
      </Navbar.Brand>
      <Nav className='me-auto'>
        <NavDropdown title='Documentación Técnica' id='collasible-nav-dropdown'>
          <NavDropdown.Item href='/fiuber-documentacion/installation'>Instalaci&oacute;n y Configuraci&oacute;n</NavDropdown.Item>
          <NavDropdown.Item href='/fiuber-documentacion/architecture'>Definici&oacute;n de Arquitectura</NavDropdown.Item>
          <NavDropdown.Item href='/fiuber-documentacion/rest'>Especificaci&oacute;n de API REST</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title='Guías de Usuario' id='collasible-nav-dropdown'>
          <NavDropdown.Item href='/fiuber-documentacion/mobile'>Fiuber Mobile</NavDropdown.Item>
          <NavDropdown.Item href='/fiuber-documentacion/backoffice'>Fiuber Backoffice</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default FiuberNavbar
