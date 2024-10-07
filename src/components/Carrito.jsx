/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Carrito.jsx

import React from 'react';
import ItemCarrito from './ItemCarrito';

function Carrito({ carrito, eliminarDelCarrito, actualizarCantidad }) {
  // Calcular el total
  const total = carrito.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((item) => (
            <ItemCarrito
              key={item.id}
              item={item}
              eliminarDelCarrito={eliminarDelCarrito}
              actualizarCantidad={actualizarCantidad}
            />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Carrito;
