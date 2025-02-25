import React, { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import TablaProductos from './TablaProductos'

const TablaProductosFiltrable = ({productos}) => {

  const [textoFiltro, setTextoFiltro] = useState('')
  const [soloEnStock, setSoloEnStock] = useState(false)

  const productosFiltrados = productos.filter((producto) => {
    const coincideTexto = producto.nombre.toLowerCase().includes(textoFiltro.toLowerCase())
    const coinicdeStock = soloEnStock ? producto.stocked : true
    return coincideTexto && coinicdeStock
  })


  return (
    <div className='bg-emerald-100 w-1/2 mx-auto mt-6 p-4 rounded-lg'>
    <SearchBar 
    textoFiltro={textoFiltro}
    soloEnStock={soloEnStock}
    onTextoFiltroChange={setTextoFiltro}
    onSoloEnStockChange={setSoloEnStock}
    />

    <div className="mb-4 text-emerald-800 font-semibold">
      Productos disponibles: <span className="text-emerald-600">{productosFiltrados.length}</span>
    </div>

    {productosFiltrados.length === 0 && (
  <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
    ⚠️ No se encontraron productos con los filtros actuales
  </div>
)}

    <TablaProductos 
    productos={productosFiltrados}
    textoFiltro={textoFiltro}
    soloEnStock={soloEnStock}
    />

    </div>
  )
}



export default TablaProductosFiltrable