/* eslint-disable no-unused-vars */
// src/App.jsx

import React, { useState } from 'react';
import ListaProductos from './components/ListaProductos';
import Carrito from './components/Carrito';
import productosData from './components/data/productos';
import './App.css'; // Opcional: para estilos

function AppCarro() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const actualizarCantidad = (id, cantidad) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad: cantidad } : item
      )
    );
  };

  return (
    <div className="app">
      <h1>Tienda en Línea</h1>
      <div className="contenedor">
        <ListaProductos
          productos={productosData}
          agregarAlCarrito={agregarAlCarrito}
        />
        <Carrito
          carrito={carrito}
          eliminarDelCarrito={eliminarDelCarrito}
          actualizarCantidad={actualizarCantidad}
        />
      </div>
    </div>
  );
}

export default AppCarro;
