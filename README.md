# Mr.Jaba - Cardápio Digital Web App

Um cardápio digital moderno e responsivo para mobile (web app) com suporte a login, carrinho de compras e gerenciamento de pedidos.

## 📁 Estrutura de Pastas

```
/images
  ├── /products          ← Adicione aqui as fotos dos produtos
  └── /logo              ← Adicione aqui a logo da hamburgueria
```

## 🖼️ Instruções de Adicionar Imagens

### Fotos dos Produtos

Adicione as imagens na pasta `/images/products/` com os seguintes nomes:

**Burgers 180g:**
- burger_1.jpg até burger_16.jpg (Cheese até Pulled Pork)

**Burgers 90g:**
- burger_17.jpg até burger_25.jpg (Cheesinho até Monstrinho)

**Dogs:**
- dog_1.jpg (Dog)
- dog_2.jpg (Perrito)

**Porções:**
- porcoes_1.jpg até porcoes_10.jpg (Fritas Grande até Onions Rings)

**Molhos:**
- molhos_1.jpg (Maionese)
- molhos_2.jpg (BBQ)
- molhos_3.jpg (Mostarda com Mel)

**Doces:**
- doces_1.jpg (Pastel de Nutella)
- doces_2.jpg (Pipoking)

**Bebidas:**
- bebidas_1.jpg até bebidas_6.jpg (Água/Sucos)

**Refrigerantes:**
- refrigerante_1.jpg até refrigerante_18.jpg (Refrigerantes)

**Cerveja:**
- cerveja_1.jpg até cerveja_4.jpg (Cervejas)

**Chopp:**
- chopp_1.jpg até chopp_6.jpg (Chopps)

### Logo

Adicione a logo da hamburgueria em `/images/logo/logo.png` ou `logo.jpg`

**Recomendações:**
- Formato: JPG, PNG
- Tamanho máximo: 2MB por imagem
- Resolução: Mínimo 400x400px para produtos, 300x300px para logo
- Proporção: Quadrada é melhor para produtos

## 🚀 Como Usar

1. **Abra o servidor HTTP:**
   ```bash
   python3 -m http.server 8000
   ```

2. **Acesse no navegador:**
   ```
   http://localhost:8000
   ```

## 📱 Funcionalidades

- ✅ Login/Registro de usuários
- ✅ Visualizar cardápio com filtros por categoria
- ✅ Adicionar produtos ao carrinho
- ✅ Adicionar observações nos produtos (sem cebola, extra bacon, etc)
- ✅ Aumentar/diminuir quantidade no carrinho
- ✅ Calcular total com taxa de serviço
- ✅ Finalizar pedidos
- ✅ Histórico de pedidos (localStorage)
- ✅ Página sobre a hamburgueria com localização
- ✅ Design responsivo para mobile/tablet/desktop
- ✅ Tema escuro moderno

## 📁 Estrutura de Arquivos

```
MrJaba/
├── index.html                 # Home principal
├── css/
│   └── style.css             # Estilos completos
├── js/
│   ├── data.js               # Dados dos produtos (76 itens)
│   ├── app.js                # Lógica principal da aplicação
│   ├── auth.js               # Sistema de autenticação
│   ├── cart.js               # Gerenciamento do carrinho
│   └── images/               # Pasta para imagens em base64 (se necessário)
├── pages/
│   ├── menu.html             # Página do cardápio
│   ├── login.html            # Página de login/registro
│   ├── cart.html             # Página do carrinho
│   └── about.html            # Página sobre Mr.Jaba
└── images/
    ├── /products             # ← Adicione fotos dos produtos aqui
    └── /logo                 # ← Adicione logo aqui
```

## 🎨 Cores

- Primária: `#FF6B35` (Laranja)
- Escuro: `#1a1a1a` (Preto)
- Claro: `#f5f5f5` (Cinza claro)

## 💾 Armazenamento Local

Todos os dados são salvos em localStorage:
- Usuário logado: `mrjabaUser`
- Carrinho: `mrjabaCart`
- Último pedido: `lastOrder`

## 📝 Cardápio Completo

O cardápio possui **76 produtos** distribuídos em 10 categorias:

1. **Burgers 180g** - 16 produtos
2. **Burgers 90g** - 9 produtos
3. **Dogs** - 2 produtos
4. **Porções** - 10 produtos
5. **Molhos** - 3 produtos
6. **Doces** - 2 produtos
7. **Água e Sucos** - 6 produtos
8. **Refrigerantes** - 18 produtos
9. **Cervejas** - 4 produtos
10. **Chopp** - 6 produtos

## 🔐 Autenticação

- Email: qualquer email válido
- Senha: mínimo 4 caracteres
- Dados salvos localmente (localStorage)

## 📞 Informações de Contato

Você pode editar as informações de contato no arquivo `/pages/about.html`:
- Endereço
- Telefone
- WhatsApp
- Horário de funcionamento
- Redes sociais

## 🎯 Próximos Passos

1. Adicione as fotos dos produtos nas pastas corretas
2. Atualize as informações de contato em `about.html`
3. Customize as cores em `css/style.css` (variáveis :root)
4. Teste em diferentes dispositivos
5. Publique em um servidor web

## ⚠️ Notas Importantes

- As imagens são exibidas via emoji por padrão, mas podem ser substituídas por fotos reais
- O site funciona offline (todos os dados são locais)
- Para criar um backend real, você precisará de um servidor (Node.js, Python, PHP, etc)
- As informações de pedidos são perdidas ao limpar localStorage

## 🎓 Tecnologias Usadas

- HTML5
- CSS3 (Grid, Flexbox)
- JavaScript Vanilla (sem frameworks)
- LocalStorage API

---

**Desenvolvido com ❤️ para Mr.Jaba**
