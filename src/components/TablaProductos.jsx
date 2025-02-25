import React from 'react'
import FilaCategoriaProductos from './FilaCategoriaProductos.jsx'
import FilaProductos from './FilaProductos.jsx'

const TablaProductos = ({ productos }) => {
    const filas = []
    let categoriaActual = null

    productos.forEach((producto) => {

        if (producto.categoria !== categoriaActual) {
            filas.push(
                <FilaCategoriaProductos
                    categoria={producto.categoria}
                    key={producto.categoria} />
            )
        }

        filas.push(
            <FilaProductos
                producto={producto}
                key={producto.nombre} />
        )
        categoriaActual = producto.categoria
    });

    return (
        <table>
            <thead className='grid grid-cols-2 gap-3'>
                <tr className='bg-emerald-200 text-emerald-800 rounded font-semibold text-lg w-max'>   
                    <th className='pl-5'>Nombre</th>
                    <th className='pl-46 pr-5'>Precio</th>
                </tr>
            </thead>
            <tbody>{filas}</tbody>
        </table>
    )
}

export default TablaProductos