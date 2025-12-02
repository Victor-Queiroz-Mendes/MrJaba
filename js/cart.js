// Sistema de carrinho
const cart = {
  getCart() {
    return JSON.parse(localStorage.getItem('mrjabaCart')) || [];
  },

  saveCart(cartItems) {
    localStorage.setItem('mrjabaCart', JSON.stringify(cartItems));
  },

  addItem(product, quantity = 1, notes = '') {
    const currentCart = this.getCart();
    
    const existingItem = currentCart.find(
      item => item.productId === product.id && item.notes === notes
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentCart.push({
        id: Date.now(),
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        notes: notes,
        emoji: product.emoji,
        category: product.category
      });
    }

    this.saveCart(currentCart);
    return currentCart;
  },

  removeItem(itemId) {
    let currentCart = this.getCart();
    currentCart = currentCart.filter(item => item.id !== itemId);
    this.saveCart(currentCart);
    return currentCart;
  },

  updateQuantity(itemId, quantity) {
    const currentCart = this.getCart();
    const item = currentCart.find(i => i.id === itemId);
    
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart(currentCart);
    }
    
    return currentCart;
  },

  clearCart() {
    localStorage.removeItem('mrjabaCart');
    return [];
  },

  getTotal() {
    const cartItems = this.getCart();
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  getItemCount() {
    const cartItems = this.getCart();
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  },

  groupByCategory() {
    const cartItems = this.getCart();
    const grouped = {};

    cartItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    return grouped;
  }
};
