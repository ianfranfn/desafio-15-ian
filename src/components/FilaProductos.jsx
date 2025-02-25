import React from 'react'

const FilaProductos = ({ producto }) => {

    const nombre = producto.stocked ? producto.nombre :
        <span
            className='text-red-700 font-semibold line-through'
        >
            {producto.nombre}
        </span>

    const precio = producto.stocked ? producto.precio :
        <span
            className='text-red-700 font-semibold line-through'
        >
            {producto.precio}
        </span>

    return (

        <tr className=''>
            <td>{nombre}</td>
            <td>{precio}</td>
        </tr>

    )
}

export default FilaProductos