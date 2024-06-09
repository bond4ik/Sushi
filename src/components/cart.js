export const getCartItems = () => {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch (error) {
    console.error('Ошибка при получении данных из localStorage:', error);
    return [];
  }
};

export const addToCart = (product) => {
  try {
    if (!product || typeof product.id === 'undefined') {
      throw new Error('Невалидный продукт');
    }
  const cartItems = getCartItems();
  const index = cartItems.findIndex(item => item.id === product.id);
  let newItems;
  if (index !== -1) {
    newItems = [...cartItems];
    newItems[index] = { ...newItems[index], quantity: newItems[index].quantity + 1 };
  } else {
    newItems = [...cartItems, { ...product, quantity: 1 }];
  }
  localStorage.setItem('cart', JSON.stringify(newItems));
  return newItems;
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
  }
};

export const updateQuantity = (product, delta) => {
  try {
    if (typeof product.id === 'undefined' || typeof delta !== 'number' || isNaN(delta)) {
      throw new Error('Невалидные данные продукта или изменения количества');
    }
    const cartItems = getCartItems();
    const index = cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      let newItems = [...cartItems];
      const updatedQuantity = newItems[index].quantity + delta;
      if (updatedQuantity > 0) {
        newItems[index] = { ...newItems[index], quantity: updatedQuantity };
      } else {
        newItems = newItems.filter((_, i) => i !== index);
      }
      localStorage.setItem('cart', JSON.stringify(newItems));
      return newItems;
    }
    return cartItems;
  } catch (error) {
    console.error('Ошибка при обновлении количества:', error);
    return [];
  }
};

export const clearCart = () => {
  try {
    localStorage.removeItem('cart');
  } catch (error) {
    console.error('Ошибка при очистке корзины:', error);
  }
};

