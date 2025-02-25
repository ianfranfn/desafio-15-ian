import React from 'react'
import TablaProductosFiltrable from './components/TablaProductosFiltrable.jsx'


const App = () => {

  const PRODUCTOS = [
    {categoria: "Frutas", precio: "$1", stocked: true, nombre: "Manzana"},
    {categoria: "Frutas", precio: "$1", stocked: true, nombre: "Fruta de Dragón"},
    {categoria: "Frutas", precio: "$2", stocked: false, nombre: "Maracuyá"},
    {categoria: "Verduras", precio: "$2", stocked: true, nombre: "Espinaca"},
    {categoria: "Verduras", precio: "$4", stocked: false, nombre: "Calabaza"},
    {categoria: "Verduras", precio: "$1", stocked: true, nombre: "Guisantes"}
  ]

  return (
      <TablaProductosFiltrable productos={PRODUCTOS} />

  )
}

export default App