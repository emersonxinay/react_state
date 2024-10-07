/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ListaProductos.jsx

import React from 'react';
import Producto from './Producto';

function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <div className="lista-productos">
      <h2>Productos Disponibles</h2>
      <div className="productos">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaProductos;
