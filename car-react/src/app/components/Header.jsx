import React from "react";

export const Headers = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
}) => {
  // Función para eliminar productos del carrito
  const onRemoveProduct = (product) => {
    const updatedProducts = allProducts
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // Filtrar los productos con cantidad mayor que 0

    setTotal(updatedProducts.reduce((acc, item) => acc + item.price * item.quantity, 0)); // Actualizamos el total
    setCountProducts(updatedProducts.reduce((acc, item) => acc + item.quantity, 0)); // Actualizamos el contador de productos
    setAllProducts(updatedProducts); // Actualizamos el estado de los productos
  };

  // Mostrar el carrito con los productos y la cantidad total
  return (
    <header className="header">
      <div className="cart-info">
        <div className="cart-details">
          <p>Total: ${total}</p>
          <p>Productos: {countProducts}</p>
        </div>
        <div className="cart-items">
          <h3>Carrito</h3>
          <ul>
            {allProducts.map(
              (product) =>
                product.quantity > 0 && (
                  <li key={product.id}>
                    <img src={product.urlImage} alt={product.nameProduct} width={50} />
                    <span>{product.nameProduct}</span>
                    <span> ${product.price}</span>
                    <span>Cantidad: {product.quantity}</span>
                    <button onClick={() => onRemoveProduct(product)}>
                      Eliminar
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};


