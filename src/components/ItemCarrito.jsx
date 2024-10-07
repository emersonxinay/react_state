/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/ItemCarrito.jsx

import React from 'react';

function ItemCarrito({ item, eliminarDelCarrito, actualizarCantidad }) {
  const { id, nombre, precio, cantidad } = item;

  const manejarCambio = (e) => {
    const nuevaCantidad = parseInt(e.target.value);
    if (nuevaCantidad > 0) {
      actualizarCantidad(id, nuevaCantidad);
    }
  };

  return (
    <div className="item-carrito">
      <h4>{nombre}</h4>
      <p>Precio: ${precio.toFixed(2)}</p>
      <div>
        <label>Cantidad: </label>
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={manejarCambio}
        />
      </div>
      <button onClick={() => eliminarDelCarrito(id)}>Eliminar</button>
    </div>
  );
}

export default ItemCarrito;
