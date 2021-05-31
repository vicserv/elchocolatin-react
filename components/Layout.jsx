import React from 'react'
import Carrito from './carrito-flotante/Carrito'
import Encabezado from './header/Encabezado'
import Menu from './menu/menu'

export default function layout({ children }) {
    return (
        <>
        <Encabezado/>
        <Menu/>
        {children}
        <Carrito/>
        </>
    )
}
