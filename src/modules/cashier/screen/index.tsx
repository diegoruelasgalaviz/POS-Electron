import React, { useState } from 'react';
import './styles.css';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cashier: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  // Placeholder products (in a real app, this would come from a database)
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
    { id: 3, name: 'Product 3', price: 20.99 },
    { id: 4, name: 'Product 4', price: 25.99 },
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setTotal(prevTotal => prevTotal + product.price);
  };

  const removeFromCart = (productId: number, price: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter(item => item.id !== productId);
    });
    setTotal(prevTotal => prevTotal - price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleCheckout = () => {
    // Handle payment processing here
    alert(`Total amount: $${total.toFixed(2)}`);
    clearCart();
  };

  return (
    <div className="cashier">
      <div className="cashier-layout">
        <div className="products-section">
          <h2>Products</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card" onClick={() => addToCart(product)}>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Cart</h2>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)} x {item.quantity}</span>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id, item.price)}
                >
                  -
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier; 