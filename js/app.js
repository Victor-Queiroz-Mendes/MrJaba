// Sistema de estado global
const app = {
  user: JSON.parse(localStorage.getItem('mrjabaUser')) || null,
  cart: JSON.parse(localStorage.getItem('mrjabaCart')) || [],
  
  init() {
    this.renderMenu();
    this.updateCartCount();
    this.attachEventListeners();
    this.updateUserUI();
  },

  // Funções de autenticação
  login(email, password) {
    const user = {
      email: email,
      name: email.split('@')[0],
      loginTime: new Date().getTime()
    };
    this.user = user;
    localStorage.setItem('mrjabaUser', JSON.stringify(user));
    this.updateUserUI();
    return true;
  },

  logout() {
    this.user = null;
    localStorage.removeItem('mrjabaUser');
    this.updateUserUI();
  },

  updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userDisplay = document.getElementById('userDisplay');
    
    if (this.user) {
      if (loginBtn) loginBtn.innerHTML = `👤 ${this.user.name}`;
      if (userDisplay) userDisplay.innerHTML = `Bem-vindo, <strong>${this.user.name}</strong>!`;
    } else {
      if (loginBtn) loginBtn.innerHTML = 'Entrar';
    }
  },

  // Funções do cardápio
  renderMenu() {
    const menuContainer = document.getElementById('productsContainer');
    if (!menuContainer) return;

    menuContainer.innerHTML = '';
    
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
        <div class="product-image">
          <img src="../images/products/${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML += '<span class=emoji>${product.emoji}</span>'">
          <span class="price">R$ ${product.price.toFixed(2)}</span>
        </div>
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <div class="product-footer">
          <span class="rating">⭐ ${product.rating}</span>
          <button class="btn-add" onclick="app.openProductModal(${product.id})">Adicionar</button>
        </div>
      `;
      menuContainer.appendChild(productCard);
    });
  },

  openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    if (!modal) return;

    const imageHTML = `<img src="../images/products/${product.image}" alt="${product.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px;" onerror="this.style.display='none'; this.parentElement.innerHTML = '<span style=font-size:80px>${product.emoji}</span>'">`;
    document.getElementById('modalProductImage').innerHTML = imageHTML;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = `R$ ${product.price.toFixed(2)}`;
    document.getElementById('productQuantity').value = 1;
    document.getElementById('productNotes').value = '';
    document.getElementById('currentProductId').value = productId;

    modal.style.display = 'flex';
  },

  closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.style.display = 'none';
  },

  addToCart() {
    const productId = parseInt(document.getElementById('currentProductId').value);
    const quantity = parseInt(document.getElementById('productQuantity').value);
    const notes = document.getElementById('productNotes').value;
    const product = products.find(p => p.id === productId);

    if (!product) return;

    const cartItem = {
      id: Date.now(),
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      notes: notes,
      emoji: product.emoji
    };

    this.cart.push(cartItem);
    this.saveCart();
    this.updateCartCount();
    this.closeProductModal();
    this.showNotification(`${product.name} adicionado ao carrinho!`);
  },

  removeFromCart(itemId) {
    this.cart = this.cart.filter(item => item.id !== itemId);
    this.saveCart();
    this.updateCartCount();
    this.renderCart();
  },

  updateCartItemQuantity(itemId, quantity) {
    const item = this.cart.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveCart();
      this.updateCartCount();
      this.renderCart();
    }
  },

  saveCart() {
    localStorage.setItem('mrjabaCart', JSON.stringify(this.cart));
  },

  updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
      const total = this.cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCount.textContent = total;
    }
  },

  renderCart() {
    const cartContainer = document.getElementById('cartContainer');
    if (!cartContainer) return;

    if (this.cart.length === 0) {
      cartContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
      document.getElementById('checkoutBtn').disabled = true;
      return;
    }

    cartContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item">
        <div class="item-info">
          <span class="item-emoji">${item.emoji}</span>
          <div>
            <h4>${item.name}</h4>
            ${item.notes ? `<p class="item-notes">Obs: ${item.notes}</p>` : ''}
            <p>R$ ${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div class="item-controls">
          <button class="qty-btn" onclick="app.updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span class="qty">${item.quantity}</span>
          <button class="qty-btn" onclick="app.updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
          <button class="btn-remove" onclick="app.removeFromCart(${item.id})">✕</button>
        </div>
      </div>
    `).join('');

    this.updateCheckout();
    document.getElementById('checkoutBtn').disabled = false;
  },

  updateCheckout() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `R$ ${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
  },

  checkout() {
    if (!this.user) {
      this.showNotification('Por favor, faça login para continuar');
      window.location.href = 'pages/login.html';
      return;
    }

    if (this.cart.length === 0) {
      this.showNotification('Carrinho vazio!');
      return;
    }

    const order = {
      id: 'PED-' + Date.now(),
      user: this.user.email,
      items: this.cart,
      total: this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.10,
      date: new Date().toLocaleString('pt-BR'),
      status: 'Pendente'
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));
    this.showNotification('✓ Pedido realizado com sucesso!');
    this.cart = [];
    this.saveCart();
    this.updateCartCount();
    this.renderCart();
    
    setTimeout(() => {
      window.location.href = 'pages/menu.html';
    }, 1500);
  },

  showNotification(message) {
    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
      notif.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  },

  attachEventListeners() {
    // Menu hamburger
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
    }
    
    // Fechar menu ao clicar em um link
    if (navMenu) {
      const navLinks = navMenu.querySelectorAll('a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          if (menuToggle) menuToggle.classList.remove('active');
        });
      });
    }

    // Modal
    const modal = document.getElementById('productModal');
    if (modal) {
      window.addEventListener('click', (e) => {
        if (e.target === modal) this.closeProductModal();
      });
    }

    // Botão de quantidade
    const qtyInputs = document.querySelectorAll('#productQuantity');
    qtyInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        e.target.value = Math.max(1, parseInt(e.target.value) || 1);
      });
    });
  }
};

// Inicializar quando o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
