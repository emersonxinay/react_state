/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Producto.jsx

import React from 'react';

function Producto({ producto, agregarAlCarrito }) {
  const { nombre, precio, imagen } = producto;
  return (
    <div className="producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>Precio: ${precio.toFixed(2)}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  );
}

export default Producto;
