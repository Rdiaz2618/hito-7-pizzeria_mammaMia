import { useMemo, useState } from 'react';
import { pizzaCart } from '../data/pizzas';
import { CartContext } from './CartContextValue';

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(pizzaCart);

  const agregarAlCarrito = (pizza) => {
    setCarrito((carritoActual) => {
      const pizzaExistente = carritoActual.find((item) => item.id === pizza.id);

      if (pizzaExistente) {
        return carritoActual.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item,
        );
      }

      return [...carritoActual, { ...pizza, count: 1 }];
    });
  };

  const cambiarCantidad = (id, cantidad) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((pizza) => (pizza.id === id ? { ...pizza, count: pizza.count + cantidad } : pizza))
        .filter((pizza) => pizza.count > 0),
    );
  };

  const total = useMemo(
    () => carrito.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.count, 0),
    [carrito],
  );

  return (
    <CartContext.Provider value={{ carrito, total, agregarAlCarrito, cambiarCantidad }}>
      {children}
    </CartContext.Provider>
  );
};

