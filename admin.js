let selectedProductId = null;
let currentLogoFile = null;
let currentProductFile = null;

function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');

  if (tabName === 'gallery') {
    loadGallery();
  } else if (tabName === 'products') {
    loadProductsList();
  }
}

function handleLogoUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showStatus('logoStatus', 'Arquivo muito grande! Máximo 5MB', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    currentLogoFile = event.target.result;
    const preview = document.getElementById('logoPreview');
    preview.innerHTML = `
      <div class="preview-item" style="max-width: 200px;">
        <img src="${currentLogoFile}" alt="Logo Preview">
        <button class="remove-btn" onclick="currentLogoFile = null; loadLogo()">✕</button>
      </div>
    `;
    saveLogo();
  };
  reader.readAsDataURL(file);
}

function handleProductUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    showStatus('productStatus', 'Arquivo muito grande! Máximo 5MB', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    currentProductFile = event.target.result;
  };
  reader.readAsDataURL(file);
}

function saveProductImage() {
  if (!selectedProductId) {
    showStatus('productStatus', 'Selecione um produto!', 'error');
    return;
  }

  if (!currentProductFile) {
    showStatus('productStatus', 'Selecione uma imagem!', 'error');
    return;
  }

  let productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');
  productImages[selectedProductId] = currentProductFile;
  localStorage.setItem('mrjaba_product_images', JSON.stringify(productImages));

  showStatus('productStatus', 'Imagem salva com sucesso!', 'success');
  currentProductFile = null;
  document.getElementById('productInput').value = '';
  setTimeout(() => {
    loadProductsList();
    loadGallery();
  }, 500);
}

function saveLogo() {
  if (currentLogoFile) {
    localStorage.setItem('mrjaba_logo', currentLogoFile);
    showStatus('logoStatus', 'Logo salva com sucesso!', 'success');
  }
}

function loadLogo() {
  const logo = localStorage.getItem('mrjaba_logo');
  const preview = document.getElementById('logoPreview');

  if (logo) {
    preview.innerHTML = `
      <div class="preview-item" style="max-width: 200px;">
        <img src="${logo}" alt="Logo">
        <button class="remove-btn" onclick="localStorage.removeItem('mrjaba_logo'); loadLogo()">✕</button>
      </div>
    `;
    currentLogoFile = logo;
  } else {
    preview.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">Nenhuma logo enviada</p>';
  }
}

function loadProductsList() {
  const select = document.getElementById('productSelect');
  const gallery = document.getElementById('productsGallery');
  const productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');

  select.innerHTML = '<option value="">-- Escolha um produto --</option>';
  products.forEach(product => {
    select.innerHTML += `<option value="${product.id}">${product.id} - ${product.name}</option>`;
  });

  select.onchange = () => {
    selectedProductId = select.value;
  };

  gallery.innerHTML = '';
  products.forEach(product => {
    if (productImages[product.id]) {
      gallery.innerHTML += `
        <div class="product-item">
          <img src="${productImages[product.id]}" alt="${product.name}">
          <div class="product-item-info">
            <div class="product-item-name">${product.name}</div>
            <div class="product-item-id">ID: ${product.id}</div>
          </div>
          <button class="btn btn-danger" onclick="removeProductImage(${product.id})">Remover</button>
        </div>
      `;
    }
  });

  if (gallery.innerHTML === '') {
    gallery.innerHTML = '<p style="color: #999; text-align: center; padding: 20px;">Nenhuma imagem de produto enviada</p>';
  }
}

function removeProductImage(productId) {
  let productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');
  delete productImages[productId];
  localStorage.setItem('mrjaba_product_images', JSON.stringify(productImages));
  loadProductsList();
  loadGallery();
}

function loadGallery() {
  const categoryFilter = document.getElementById('categoryFilter');
  const grid = document.getElementById('galleryGrid');
  const productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');

  // Populate category filter
  if (categoryFilter.children.length === 1) {
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        categoryFilter.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
      }
    });
  }

  filterGallery();
}

function filterGallery() {
  const categoryFilter = document.getElementById('categoryFilter');
  const selectedCategory = categoryFilter.value;
  const grid = document.getElementById('galleryGrid');
  const productImages = JSON.parse(localStorage.getItem('mrjaba_product_images') || '{}');

  grid.innerHTML = '';

  products.forEach(product => {
    if (productImages[product.id]) {
      if (!selectedCategory || product.category === selectedCategory) {
        grid.innerHTML += `
          <div class="preview-item">
            <img src="${productImages[product.id]}" alt="${product.name}" title="${product.name}">
            <button class="remove-btn" onclick="removeProductImage(${product.id})">✕</button>
          </div>
        `;
      }
    }
  });

  if (grid.innerHTML === '') {
    grid.innerHTML = '<p style="color: #999; text-align: center; padding: 20px; grid-column: 1/-1;">Nenhuma imagem nesta categoria</p>';
  }
}

function showStatus(elementId, message, type) {
  const el = document.getElementById(elementId);
  el.textContent = message;
  el.className = `status-message ${type}`;

  setTimeout(() => {
    el.className = 'status-message';
  }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadLogo();
  loadProductsList();
});
