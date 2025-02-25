import React from 'react'

const SearchBar = ({ textoFiltro, soloEnStock, onTextoFiltroChange, onSoloEnStockChange }) => {
  return (
    <form className='flex flex-col mb-4 bg-emerald-200 p-2 rounded-lg'>
        <input 
        type="text" 
        value={textoFiltro}
        placeholder='Buscar...'
        className='p-2 border border-gray-300 bg-gray-200 rounded-lg' 
        onChange={(e) => onTextoFiltroChange(e.target.value)}
        />
        <label>
            <input 
            type="checkbox"
            className='cursor-pointer'
            checked={soloEnStock}
            onChange={(e) => onSoloEnStockChange(e.target.checked)}
            />
            {' '}
            Mostrar solo productos en <strong className='text-red-500 underline'>stock</strong> 
        </label>
    </form>
  )
}

export default SearchBar