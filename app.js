const app = {
  state: {
    cart: [],
    selectedCategory: 'all',
    currentScreen: 'homeScreen',
    selectedProduct: null,
    quantity: 1
  },

  init() {
    this.loadCartFromStorage();
    this.loadProductImages();
    this.loadLogo();
    this.renderCategories();
    this.renderProducts();
    this.updateCartBadge();
  },

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    this.state.currentScreen = screenId;

    if (screenId === 'homeScreen') {
      this.renderProducts();
      this.updateNavigation();
    } else if (screenId === 'cartScreen') {
      this.renderCart();
      this.updateNavigation();
    } else if (screenId === 'searchScreen') {
      this.updateNavigation();
      document.getElementById('searchInput').focus();
    } else if (screenId === 'favoritesScreen') {
      this.loadFavorites();
      this.updateNavigation();
    } else if (screenId === 'profileScreen') {
      this.updateNavigation();
    }
  },

  updateNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (this.state.currentScreen === 'homeScreen') {
      document.querySelectorAll('.nav-item')[0].classList.add('active');
    } else if (this.state.currentScreen === 'searchScreen') {
      document.querySelectorAll('.nav-item')[1].classList.add('active');
    } else if (this.state.currentScreen === 'cartScreen') {
      document.querySelectorAll('.nav-item')[2].classList.add('active');
    } else if (this.state.currentScreen === 'favoritesScreen') {
      document.querySelectorAll('.nav-item')[3].classList.add('active');
    } else if (this.state.currentScreen === 'profileScreen') {
      document.querySelectorAll('.nav-item')[4].classList.add('active');
    }
  },

  renderCategories() {
    const container = document.getElementById('categoryFilter');
    container.innerHTML = categories.map(cat => `
      <button class="category-btn ${cat.id === 'all' ? 'active' : ''}" 
              onclick="app.selectCategory('${cat.id}')">
        ${cat.emoji} ${cat.name}
      </button>
    `).join('');
  },

  selectCategory(categoryId) {
    this.state.selectedCategory = categoryId;
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    this.renderProducts();
  },

  renderProducts() {
    const container = document.getElementById('productsGrid');
    let filtered = products;

    if (this.state.selectedCategory !== 'all') {
      filtered = products.filter(p => p.category === this.state.selectedCategory);
    }

    container.innerHTML = filtered.map(product => `
      <div class="product-card" onclick="app.showProductDetail(${product.id})">
        <div class="product-image" style="display: flex; align-items: center; justify-content: center; font-size: 60px;">
          ${product.emoji}
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
          <div class="product-footer">
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="product-add-btn" onclick="event.stopPropagation(); app.addToCart(${product.id})">+</button>
          </div>
        </div>
      </div>
    `).join('');
  },

  showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    this.state.selectedProduct = product;
    this.state.quantity = 1;

    const container = document.getElementById('productDetail');
    container.innerHTML = `
      <div class="detail-image" style="display: flex; align-items: center; justify-content: center; font-size: 120px; background: #1a1a1a;">
        ${product.emoji}
      </div>
      <div class="detail-content">
        <div class="detail-header">
          <div class="detail-title">
            <h1>${product.name}</h1>
            <div class="detail-rating">⭐ ${product.rating}</div>
          </div>
          <button class="favorite-btn" onclick="alert('❤️ Adicionado aos favoritos!')">❤️</button>
        </div>

        <p class="detail-description">${product.description}</p>

        <div class="detail-meta">
          <span>⏱️ ${product.deliveryTime}</span>
          ${product.freeDelivery ? '<span style="color: #FF6B35;">✓ Frete Grátis</span>' : ''}
        </div>

        <div class="quantity-selector">
          <button class="quantity-btn" onclick="app.decreaseQuantity()">−</button>
          <div class="quantity-value">${this.state.quantity}</div>
          <button class="quantity-btn" onclick="app.increaseQuantity()">+</button>
        </div>

        <div class="detail-price">R$ ${(product.price * this.state.quantity).toFixed(2)}</div>

        <button class="add-to-cart-btn" onclick="app.addSelectedToCart()">Adicionar ao Carrinho</button>
      </div>
    `;

    this.showScreen('detailsScreen');
  },

  increaseQuantity() {
    this.state.quantity++;
    const product = this.state.selectedProduct;
    document.querySelector('.quantity-value').textContent = this.state.quantity;
    document.querySelector('.detail-price').textContent = `R$ ${(product.price * this.state.quantity).toFixed(2)}`;
  },

  decreaseQuantity() {
    if (this.state.quantity > 1) {
      this.state.quantity--;
      const product = this.state.selectedProduct;
      document.querySelector('.quantity-value').textContent = this.state.quantity;
      document.querySelector('.detail-price').textContent = `R$ ${(product.price * this.state.quantity).toFixed(2)}`;
    }
  },

  addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = this.state.cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += 1;
    } else {
      this.state.cart.push({ ...product, quantity: 1 });
    }

    this.saveCartToStorage();
    this.updateCartBadge();
    this.showNotification('✓ Adicionado ao carrinho!');
  },

  addSelectedToCart() {
    const product = this.state.selectedProduct;
    const existing = this.state.cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += this.state.quantity;
    } else {
      this.state.cart.push({ ...product, quantity: this.state.quantity });
    }

    this.saveCartToStorage();
    this.updateCartBadge();
    this.showNotification('✓ Adicionado ao carrinho!');
    this.showScreen('homeScreen');
  },

  renderCart() {
    const itemsContainer = document.getElementById('cartItems');
    const summaryContainer = document.getElementById('cartSummary');

    if (this.state.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="empty-cart">
          <div class="empty-cart-icon">🛒</div>
          <p>Seu carrinho está vazio</p>
        </div>
      `;
      summaryContainer.innerHTML = '';
      return;
    }

    itemsContainer.innerHTML = this.state.cart.map(item => `
      <div class="cart-item">
        <div style="width: 100px; height: 100px; border-radius: 10px; display: flex; align-items: center; justify-content: center; background: #1a1a1a; font-size: 48px;">
          ${item.emoji}
        </div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>
          <div class="cart-item-controls">
            <button onclick="app.updateCartQuantity(${item.id}, -1)">−</button>
            <div class="cart-item-quantity">${item.quantity}</div>
            <button onclick="app.updateCartQuantity(${item.id}, 1)">+</button>
            <button class="remove-btn" onclick="app.removeFromCart(${item.id})">🗑️</button>
          </div>
        </div>
      </div>
    `).join('');

    this.updateCartSummary();
  },

  updateCartQuantity(productId, change) {
    const item = this.state.cart.find(item => item.id === productId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCartToStorage();
        this.renderCart();
      }
    }
  },

  removeFromCart(productId) {
    this.state.cart = this.state.cart.filter(item => item.id !== productId);
    this.saveCartToStorage();
    this.updateCartBadge();
    this.renderCart();
  },

  updateCartSummary() {
    const container = document.getElementById('cartSummary');
    const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 50 ? 0 : 5;
    const total = subtotal + deliveryFee;

    container.innerHTML = `
      <div class="summary-row">
        <span>Subtotal</span>
        <span>R$ ${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Taxa de Entrega</span>
        <span>${deliveryFee === 0 ? 'Grátis ✓' : 'R$ ' + deliveryFee.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span>R$ ${total.toFixed(2)}</span>
      </div>
      <button class="checkout-btn" onclick="app.checkout()">Finalizar Pedido</button>
    `;
  },

  checkout() {
    if (this.state.cart.length === 0) {
      alert('Carrinho vazio!');
      return;
    }

    const subtotal = this.state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal >= 50 ? 0 : 5;
    const total = subtotal + deliveryFee;

    alert(`🎉 Pedido confirmado!\nTotal: R$ ${total.toFixed(2)}\n\nAgradecemos a preferência na Mr. Jaba!`);
    this.state.cart = [];
    this.saveCartToStorage();
    this.updateCartBadge();
    this.showScreen('homeScreen');
  },

  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const count = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = count;
  },

  saveCartToStorage() {
    localStorage.setItem('mrjaba_cart', JSON.stringify(this.state.cart));
  },

  loadLogo() {
    const logo = localStorage.getItem('mrjaba_logo');
    if (logo) {
      const logoEl = document.querySelector('.location');
      if (logoEl) {
        logoEl.innerHTML = `<img src="${logo}" alt="Mr. Jaba" style="height: 30px; border-radius: 4px; margin-right: 8px;"> <span style="font-size: 12px;">Mr. Jaba - Salto, SP</span>`;
      }
    }
  },

  loadProductImages() {
    const productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');
    products.forEach(product => {
      if (productImages[product.id]) {
        product.image = productImages[product.id];
      }
    });
  },

  showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #FF6B35;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 1000;
      animation: slideDown 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideUp 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  },

  searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('searchResults');

    if (input.length === 0) {
      results.innerHTML = '';
      return;
    }

    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(input) || 
      p.description.toLowerCase().includes(input)
    );

    if (filtered.length === 0) {
      results.innerHTML = '<p style="color: #999; text-align: center; padding: 20px; grid-column: 1/-1;">Nenhum produto encontrado</p>';
      return;
    }

    results.innerHTML = filtered.map(product => `
      <div class="product-card" onclick="app.showProductDetail(${product.id})">
        <div class="product-image" style="display: flex; align-items: center; justify-content: center; font-size: 60px;">
          ${product.emoji}
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
          <div class="product-footer">
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="product-add-btn" onclick="event.stopPropagation(); app.addToCart(${product.id})">+</button>
          </div>
        </div>
      </div>
    `).join('');
  },

  loadFavorites() {
    const container = document.getElementById('favoritesList');
    const favorites = JSON.parse(localStorage.getItem('mrjaba_favorites') || '[]');

    if (favorites.length === 0) {
      container.innerHTML = `
        <div class="favorites-empty">
          <div class="favorites-empty-icon">❤️</div>
          <p>Nenhum produto favorito</p>
          <p style="font-size: 12px; margin-top: 10px;">Adicione seus produtos favoritos!</p>
        </div>
      `;
      return;
    }

    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    grid.innerHTML = favoriteProducts.map(product => `
      <div class="product-card" onclick="app.showProductDetail(${product.id})">
        <div class="product-image" style="display: flex; align-items: center; justify-content: center; font-size: 60px;">
          ${product.emoji}
        </div>
        <div class="product-info">
          <div class="product-name">${product.name}</div>
          <div class="product-rating">⭐ ${product.rating}</div>
          <div class="product-footer">
            <div class="product-price">R$ ${product.price.toFixed(2)}</div>
            <button class="product-add-btn" onclick="event.stopPropagation(); app.addToCart(${product.id})">+</button>
          </div>
        </div>
      </div>
    `).join('');
    container.innerHTML = '';
    container.appendChild(grid);
  },

  addToFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('mrjaba_favorites') || '[]');
    if (!favorites.includes(productId)) {
      favorites.push(productId);
      localStorage.setItem('mrjaba_favorites', JSON.stringify(favorites));
      this.showNotification('❤️ Adicionado aos favoritos!');
    }
  },

  logout() {
    alert('👋 Até logo! Volte em breve.');
    this.showScreen('homeScreen');
  }

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => app.init());

// Easter egg para acessar admin (duplo clique no local)
function checkAdminAccess() {
  const password = prompt('🔐 Digite a senha do admin:');
  if (password === 'admin123') {
    window.location.href = 'admin.html';
  } else if (password !== null) {
    alert('Senha incorreta!');
  }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
