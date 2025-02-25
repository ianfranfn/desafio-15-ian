import React from 'react'

const FilaCategoriaProductos = ({ categoria }) => {
    return (

        <tr>
            <th 
            colSpan="2"
            className='flex flex-col items-center bg-emerald-200 text-emerald-800 rounded-2xl pl-2 pr-2 mt-5 w-max'
            >
                {categoria}
            </th>
        </tr>

    )
}

export default FilaCategoriaProductos