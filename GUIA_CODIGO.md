# Cardápio Digital Mr.Jaba - Estrutura de Código

## Arquivos de JavaScript

### 1. **data.js** - Dados dos Produtos
```javascript
const products = [
  { id: 1, name: "Cheese Burguer", price: 31.70, ... },
  { id: 2, name: "Salada Burguer", price: 32.90, ... },
  // ... 76 produtos totais
];

const categories = {
  burger_180g: "Burger 180g",
  burger_90g: "Burger 90g",
  // ... 10 categorias
};
```
**Função:** Armazena todos os dados dos produtos com nome, descrição, preço, categoria e emoji.

---

### 2. **auth.js** - Autenticação
```javascript
auth.login(email, password)      // Fazer login
auth.register(email, pass, conf) // Criar conta
auth.logout()                    // Logout
auth.isLogged()                  // Verificar se logado
auth.getUser()                   // Obter dados do usuário
```
**Função:** Gerencia login/registro de usuários usando localStorage.

---

### 3. **cart.js** - Carrinho de Compras
```javascript
cart.addItem(product, qty, notes)    // Adicionar produto
cart.removeItem(itemId)              // Remover item
cart.updateQuantity(itemId, qty)     // Alterar quantidade
cart.getCart()                       // Obter carrinho
cart.getTotal()                      // Total do carrinho
cart.getItemCount()                  // Quantidade de itens
cart.clearCart()                     // Limpar carrinho
```
**Função:** Gerencia itens do carrinho, quantidades e observações.

---

### 4. **app.js** - Lógica Principal
```javascript
app.init()                           // Inicializa a app
app.renderMenu()                     // Renderiza cardápio
app.openProductModal(productId)      // Abre modal do produto
app.addToCart()                      // Adiciona ao carrinho
app.renderCart()                     // Mostra carrinho
app.checkout()                       // Finaliza pedido
app.showNotification(message)        // Mostra notificação
```
**Função:** Controla toda a interação da aplicação (exibição, carrrinho, eventos).

---

## Arquivos HTML

### 1. **index.html** - Home Principal
- Hero section com mensagem de boas-vindas
- Features (Ingredientes Premium, Feito na Hora, Entrega Rápida)
- CTA (Call-to-Action) "Pedir Agora"
- Links para todas as páginas

### 2. **pages/menu.html** - Cardápio
- Filtros por categoria
- Grade de produtos com emoji e preço
- Modal para visualizar detalhes
- Opção de adicionar observações
- Seletor de quantidade

### 3. **pages/login.html** - Autenticação
- Formulário de login
- Formulário de registro
- Validação de email e senha
- Mensagens de erro/sucesso
- Benefícios de ter conta

### 4. **pages/cart.html** - Carrinho de Compras
- Lista de itens no carrinho
- Aumentar/diminuir quantidade
- Remover itens
- Resumo com subtotal, taxa e total
- Botão de finalizar compra

### 5. **pages/about.html** - Sobre Mr.Jaba
- História da hamburgueria
- Benefícios
- Localização com mapa
- Contato (endereço, telefone, WhatsApp)
- Links para redes sociais

---

## Fluxo de Funcionamento

```
1. Usuário acessa index.html (HOME)
   ↓
2. Clica em "Ver Cardápio" → menu.html
   ↓
3. Filtra por categoria e visualiza produtos
   ↓
4. Clica em "Adicionar" → abre modal
   ↓
5. Aumenta quantidade e adiciona observações
   ↓
6. Clica em "Adicionar ao Carrinho" → salva em localStorage
   ↓
7. Continua comprando ou vai para o carrinho (cart.html)
   ↓
8. Revisa itens e preço total
   ↓
9. Se não logado → redireciona para login.html
   ↓
10. Faz login/registro → cria conta em localStorage
   ↓
11. Volta ao carrinho e clica em "Finalizar Pedido"
   ↓
12. Pedido é salvo em localStorage com timestamp
   ↓
13. Carrinho é limpo e usuário retorna ao menu
```

---

## Estrutura de Dados

### Produto (data.js)
```javascript
{
  id: 1,
  name: "Cheese Burguer",
  description: "Pão brioche, burguer 180g...",
  price: 31.70,
  category: "burger_180g",
  image: "burger_1.jpg",
  emoji: "🧀",
  rating: 4.9,
  servings: "1 pessoa"
}
```

### Usuário (localStorage: mrjabaUser)
```javascript
{
  email: "user@example.com",
  name: "user",
  loginTime: 1234567890,
  createdAt: "02/12/2024 14:30:45"
}
```

### Item do Carrinho (localStorage: mrjabaCart)
```javascript
{
  id: 1234567890,           // Timestamp único
  productId: 1,             // ID do produto
  name: "Cheese Burguer",
  price: 31.70,
  quantity: 2,
  notes: "Sem cebola",
  emoji: "🧀",
  category: "burger_180g"
}
```

### Pedido (localStorage: lastOrder)
```javascript
{
  id: "PED-1234567890",
  user: "user@example.com",
  items: [...],
  total: "R$ 95.70",
  date: "02/12/2024 14:35:20",
  status: "Pedido Realizado"
}
```

---

## Funcionalidades Detalhadas

### 🔐 Autenticação
- ✅ Validação de email
- ✅ Validação de senha (mín. 4 caracteres)
- ✅ Confirmação de senha no registro
- ✅ Armazenamento seguro em localStorage
- ✅ Logout com limpeza de dados

### 🛒 Carrinho
- ✅ Adicionar produtos com observações
- ✅ Aumentar/diminuir quantidade
- ✅ Remover itens
- ✅ Cálculo automático de total com taxa (10%)
- ✅ Persistência em localStorage
- ✅ Sincronização em tempo real

### 📱 Interface
- ✅ Totalmente responsiva (mobile, tablet, desktop)
- ✅ Tema escuro com cores modernas
- ✅ Filtros por categoria
- ✅ Modal para detalhes do produto
- ✅ Notificações visuais
- ✅ Animações suaves

### 📍 Localização
- ✅ Endereço completo
- ✅ Mapa integrado (Google Maps)
- ✅ Telefone e WhatsApp
- ✅ Horário de funcionamento
- ✅ Redes sociais

---

## Como Customizar

### Cores
Edite `/css/style.css`:
```css
:root {
    --primary: #FF6B35;        /* Cor principal (laranja) */
    --dark: #1a1a1a;           /* Cor escura */
    --light: #f5f5f5;          /* Cor clara */
    --text: #333;              /* Texto */
}
```

### Informações de Contato
Edite `/pages/about.html` e atualize:
- Endereço
- Telefone/WhatsApp
- Horário de funcionamento
- Links de redes sociais
- Descrição da história

### Produtos
Edite `/js/data.js`:
- Adicione novos produtos
- Altere preços
- Mude descrições
- Adicione/remova categorias

---

## Deploy (Publicar Online)

### Opção 1: GitHub Pages
```bash
git init
git add .
git commit -m "Mr. Jaba Website"
git remote add origin https://github.com/seu-usuario/mrjaba.git
git push -u origin main
```
Acesse em: `https://seu-usuario.github.io/mrjaba`

### Opção 2: Vercel/Netlify
- Conecte seu repositório GitHub
- Deploy automático
- HTTPS gratuito
- CDN global

### Opção 3: Servidor Próprio
- Coloque em um servidor Apache/Nginx
- Configure SSL/HTTPS
- Configure domínio personalizado

---

## Melhorias Futuras

1. **Backend**: Implementar API real (Node.js, Python, etc)
2. **Pagamento**: Integrar gateway de pagamento (Stripe, MercadoPago)
3. **Autenticação Real**: OAuth2, JWT
4. **Admin Panel**: Gerenciar pedidos, produtos, usuários
5. **Notificações**: Email, SMS para confirmação de pedido
6. **Analytics**: Rastrear vendas e comportamento
7. **Avaliações**: Sistema de ratings e comentários
8. **Cupons**: Sistema de cupons/promoções

---

**Desenvolvido com ❤️ para Mr.Jaba**
