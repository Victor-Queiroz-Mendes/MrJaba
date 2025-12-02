const products = [
  // --- BURGER 180G ---
  { id: 1, name: "Cheese Burguer", description: "Pão brioche, burguer 180g, queijo prato duplo e maionese da casa. (Serve 1 Pessoa)", price: 31.70, category: "burger_180g", image: "burger_1.jpg", emoji: "🧀", rating: 4.9, servings: "1 pessoa" },
  { id: 2, name: "Salada Burguer", description: "Pão brioche, burguer 180g, queijo prato duplo, alface, tomate e maionese da casa. (Serve 1 Pessoa)", price: 32.90, category: "burger_180g", image: "burger_2.jpg", emoji: "🥗", rating: 4.8, servings: "1 pessoa" },
  { id: 3, name: "Pork Burguer", description: "Pão brioche, burguer de porco 180g, queijo prato, cream cheese, jalapeno, geleia de cebola, BBQ de goiaba e maionese da casa. (Serve 1 Pessoa)", price: 33.90, category: "burger_180g", image: "burger_3.jpg", emoji: "🐷", rating: 4.9, servings: "1 pessoa" },
  { id: 4, name: "Chicken House", description: "Pão brioche, frango empanado, queijo prato, catupiry, alface, tomate e maionese da casa. (Serve 1 Pessoa)", price: 39.20, category: "burger_180g", image: "burger_4.jpg", emoji: "🍗", rating: 4.8, servings: "1 pessoa" },
  { id: 5, name: "Texas Burguer", description: "Pão brioche, burguer 180g, queijo prato, bacon, geleia de cebola, picles de pepino e cebola, BBQ de goiaba e maionese da casa. (Serve 1 Pessoa)", price: 35.90, category: "burger_180g", image: "burger_5.jpg", emoji: "🔥", rating: 4.9, servings: "1 pessoa" },
  { id: 6, name: "Mexicano", description: "Pão brioche, burguer 180g, queijo prato, cream cheese, jalapeno, guacamole, doritos e BBQ de goiaba. (Serve 1 Pessoa)", price: 39.20, category: "burger_180g", image: "burger_6.jpg", emoji: "🌶️", rating: 4.7, servings: "1 pessoa" },
  { id: 7, name: "Mineiro", description: "Pão brioche, burguer 180g, queijo prato, queijo coalho, couve no alho e azeite, farofa de torresmos, BBQ de goiaba e maionese da casa. (Serve 1 Pessoa)", price: 40.30, category: "burger_180g", image: "burger_7.jpg", emoji: "🧂", rating: 4.9, servings: "1 pessoa" },
  { id: 8, name: "O Bravo", description: "Pão brioche, burguer de boi 180g, queijo prato, onions rings, duas fatias de bacon e maionese picante. (Serve 1 Pessoa)", price: 40.30, category: "burger_180g", image: "burger_8.jpg", emoji: "💪", rating: 4.9, servings: "1 pessoa" },
  { id: 9, name: "Monster Bacon", description: "Pão brioche, 2 burguers 180g, queijo prato duplo, muito bacon e maionese da casa. (Serve 1 Pessoa)", price: 58.30, category: "burger_180g", image: "burger_9.jpg", emoji: "👹", rating: 5.0, servings: "1 pessoa" },
  { id: 10, name: "Bacon", description: "Pão brioche, burguer 180g, queijo prato, muito bacon e maionese da casa. (Serve 1 Pessoa)", price: 43.50, category: "burger_180g", image: "burger_10.jpg", emoji: "🥓", rating: 4.9, servings: "1 pessoa" },
  { id: 11, name: "Mega Cheese", description: "Pão brioche, burguer 180g, queijo prato, queijo coalho, requeijão cremoso, cheddar ou cream cheese e maionese da casa. (Serve 1 Pessoa)", price: 54.10, category: "burger_180g", image: "burger_11.jpg", emoji: "🧀", rating: 4.9, servings: "1 pessoa" },
  { id: 12, name: "Cheddar", description: "Pão brioche, burguer 180g, cheddar, geleia de cebola e bacon. (Serve 1 Pessoa)", price: 39.20, category: "burger_180g", image: "burger_12.jpg", emoji: "🟡", rating: 4.8, servings: "1 pessoa" },
  { id: 13, name: "Casal Perfeito", description: "Pão brioche, burguer de boi 180g, burguer de porco 180g, queijo prato, cream cheese, bacon, geleia de cebola, picles de pepino e cebola, BBQ de goiaba, mostarda com mel e maionese da casa. (Serve 1 Pessoa)", price: 58.30, category: "burger_180g", image: "burger_13.jpg", emoji: "👫", rating: 5.0, servings: "1 pessoa" },
  { id: 14, name: "Egg Burguer", description: "Pão brioche, burguer de boi 180g, queijo prato, ovo, alface, tomate e maionese da casa. (Serve 1 Pessoa)", price: 39.20, category: "burger_180g", image: "burger_14.jpg", emoji: "🥚", rating: 4.8, servings: "1 pessoa" },
  { id: 15, name: "Mega Monster", description: "Pão brioche, 3 burguers 180g, queijo prato triplo, muito bacon e maionese da casa. (Serve 1 Pessoa)", price: 68.90, category: "burger_180g", image: "burger_15.jpg", emoji: "👹", rating: 5.0, servings: "1 pessoa" },
  { id: 16, name: "Pulled Pork (Lanche)", description: "Pão brioche, queijo prato e queijo coalho, copa lombo defumada, picles de pepino e cebola, BBQ de goiaba, mostarda com mel e maionese da casa. (Serve 1 Pessoa)", price: 39.20, category: "burger_180g", image: "burger_16.jpg", emoji: "🐷", rating: 4.9, servings: "1 pessoa" },

  // --- BURGER 90G ---
  { id: 17, name: "Cheesinho", description: "Pão brioche, burguer 90g, queijo prato duplo e maionese da casa. (Serve 1 Pessoa)", price: 26.40, category: "burger_90g", image: "burger_17.jpg", emoji: "🧀", rating: 4.8, servings: "1 pessoa" },
  { id: 18, name: "Saladinha", description: "Pão brioche, burguer 90g, queijo prato duplo, alface, tomate e maionese da casa. (Serve 1 Pessoa)", price: 27.60, category: "burger_90g", image: "burger_18.jpg", emoji: "🥗", rating: 4.7, servings: "1 pessoa" },
  { id: 19, name: "Texinha", description: "Pão brioche, burguer 90g, queijo prato, bacon, geleia de cebola, picles de pepino e cebola, BBQ de goiaba e maionese da casa. (Serve 1 Pessoa)", price: 28.60, category: "burger_90g", image: "burger_19.jpg", emoji: "🔥", rating: 4.8, servings: "1 pessoa" },
  { id: 20, name: "Chedinho", description: "Pão brioche, burguer 90g, cheddar, geleia de cebola e bacon. (Serve 1 Pessoa)", price: 28.60, category: "burger_90g", image: "burger_20.jpg", emoji: "🟡", rating: 4.8, servings: "1 pessoa" },
  { id: 21, name: "Mineirinho", description: "Pão brioche, burguer 90g, queijo prato, queijo coalho, couve no alho e azeite, farofa de torresmos, BBQ de goiaba e maionese da casa. (Serve 1 Pessoa)", price: 28.60, category: "burger_90g", image: "burger_21.jpg", emoji: "🧂", rating: 4.8, servings: "1 pessoa" },
  { id: 22, name: "Mexicaninho", description: "Pão brioche, burguer 90g, queijo prato, cream cheese, jalapeno, guacamole, doritos e BBQ de goiaba. (Serve 1 Pessoa)", price: 28.60, category: "burger_90g", image: "burger_22.jpg", emoji: "🌶️", rating: 4.6, servings: "1 pessoa" },
  { id: 23, name: "Chiquito", description: "Pão brioche, frango empanado, queijo prato, catupiry, alface, tomate e maionese da casa. (Serve 1 Pessoa)", price: 28.60, category: "burger_90g", image: "burger_23.jpg", emoji: "🍗", rating: 4.7, servings: "1 pessoa" },
  { id: 24, name: "Baconzinho", description: "Pão brioche, burguer 90g, queijo prato, muito bacon e maionese da casa. (Serve 1 Pessoa)", price: 30.70, category: "burger_90g", image: "burger_24.jpg", emoji: "🥓", rating: 4.8, servings: "1 pessoa" },
  { id: 25, name: "Monstrinho", description: "Pão brioche, 2 burguer 90g, queijo prato duplo, muito bacon e maionese da casa. (Serve 1 Pessoa)", price: 39.20, category: "burger_90g", image: "burger_25.jpg", emoji: "👹", rating: 4.9, servings: "1 pessoa" },

  // --- DOG'S ---
  { id: 26, name: "Dog", description: "Pão brioche, 2 salsichas, catupiry, bacon, BBQ de goiaba, maionese da casa e batata palha. (Serve 1 Pessoa)", price: 23.30, category: "dogs", image: "dog_1.jpg", emoji: "🌭", rating: 4.6, servings: "1 pessoa" },
  { id: 27, name: "Perrito", description: "Pão brioche, 2 salsichas, cream cheese, bacon, BBQ de goiaba, maionese da casa, jalapeno ou geleia de pimenta e doritos. (Serve 1 Pessoa)", price: 25.40, category: "dogs", image: "dog_2.jpg", emoji: "🌭", rating: 4.7, servings: "1 pessoa" },

  // --- PORÇÕES ---
  { id: 28, name: "Fritas Grande", description: "Batata palito. (Serve 2 pessoas)", price: 35.00, category: "porcoes", image: "porcoes_1.jpg", emoji: "🍟", rating: 4.8, servings: "2 pessoas" },
  { id: 29, name: "Fritas + Bacon", description: "Batata palito com bacon e cheddar. (Serve 2 pessoas) OBS: Na escolha de 2 queijos, será feito meio a meio.", price: 43.30, category: "porcoes", image: "porcoes_2.jpg", emoji: "🍟", rating: 4.9, servings: "2 pessoas" },
  { id: 30, name: "Fritas + Pulled Pork", description: "Batata palito com pulled pork e cream cheese. (Serve 2 pessoas) OBS: Na escolha de 2 queijos, será feito meio a meio.", price: 44.90, category: "porcoes", image: "porcoes_3.jpg", emoji: "🍟", rating: 4.9, servings: "2 pessoas" },
  { id: 31, name: "Fritas Pequena", description: "Batata palito. (Individual)", price: 12.00, category: "porcoes", image: "porcoes_4.jpg", emoji: "🍟", rating: 4.7, servings: "1 pessoa" },
  { id: 32, name: "Mandioca Frita + Bacon", description: "Mandioca frita com bacon e requeijão cremoso. (Serve 2 pessoas) OBS: Na escolha de 2 queijos, será feito meio a meio.", price: 43.80, category: "porcoes", image: "porcoes_5.jpg", emoji: "🥔", rating: 4.8, servings: "2 pessoas" },
  { id: 33, name: "Mandioca Frita", description: "Mandioca frita. (Serve 2 pessoas)", price: 36.90, category: "porcoes", image: "porcoes_6.jpg", emoji: "🥔", rating: 4.7, servings: "2 pessoas" },
  { id: 34, name: "Mandioca Frita + Pulled Pork", description: "Mandioca frita com pulled pork e cream cheese. (Serve 2 pessoas) OBS: Na escolha de 2 queijos, será feito meio a meio.", price: 41.90, category: "porcoes", image: "porcoes_7.jpg", emoji: "🥔", rating: 4.8, servings: "2 pessoas" },
  { id: 35, name: "Nossa Batata", description: "Batata bolinha no azeite e tempero da casa. (Serve 2 pessoas)", price: 37.90, category: "porcoes", image: "porcoes_8.jpg", emoji: "🍠", rating: 4.8, servings: "2 pessoas" },
  { id: 36, name: "Frãguetz", description: "Iscas de frango empanado. (Serve 2 pessoas)", price: 46.20, category: "porcoes", image: "porcoes_9.jpg", emoji: "🍗", rating: 4.9, servings: "2 pessoas" },
  { id: 37, name: "Onions Rings", description: "Anéis de cebola empanado. (Serve 2 pessoas)", price: 35.00, category: "porcoes", image: "porcoes_10.jpg", emoji: "🧅", rating: 4.8, servings: "2 pessoas" },

  // --- MOLHOS DA CASA ---
  { id: 38, name: "Potinho de Maionese da Casa 30 ML", description: "Maionese da casa - UNI", price: 5.00, category: "molhos", image: "molhos_1.jpg", emoji: "🤍", rating: 4.9, servings: "1 un" },
  { id: 39, name: "Potinho de BBQ de Goiaba 30 ML", description: "BBQ de Goiaba - UNI", price: 5.00, category: "molhos", image: "molhos_2.jpg", emoji: "🍯", rating: 4.8, servings: "1 un" },
  { id: 40, name: "Potinho de Mostarda com Mel 30 ML", description: "Mostarda com Mel - UNI", price: 5.00, category: "molhos", image: "molhos_3.jpg", emoji: "💛", rating: 4.9, servings: "1 un" },

  // --- DOCES ---
  { id: 41, name: "Pastel de Nutella", description: "Massa de Leite Ninho recheado com Nutella.", price: 12.00, category: "doces", image: "doces_1.jpg", emoji: "🍫", rating: 4.9, servings: "1 un" },
  { id: 42, name: "Pipoking", description: "Pipoca Gourmet", price: 13.50, category: "doces", image: "doces_2.jpg", emoji: "🍿", rating: 4.8, servings: "1 un" },

  // --- ÁGUA E SUCO ---
  { id: 43, name: "Água sem gás 500ml", description: "Água mineral pura", price: 5.00, category: "agua_suco", image: "bebidas_1.jpg", emoji: "💧", rating: 5.0, servings: "500ml" },
  { id: 44, name: "Água com gás 500ml", description: "Água com gás", price: 5.00, category: "agua_suco", image: "bebidas_2.jpg", emoji: "💧", rating: 5.0, servings: "500ml" },
  { id: 45, name: "Surfrutos Maracujá 300ml", description: "Suco natural Surfrutos", price: 9.00, category: "agua_suco", image: "bebidas_3.jpg", emoji: "🍊", rating: 4.8, servings: "300ml" },
  { id: 46, name: "Surfrutos Acerola 300ml", description: "Suco natural Surfrutos", price: 9.00, category: "agua_suco", image: "bebidas_4.jpg", emoji: "🍓", rating: 4.8, servings: "300ml" },
  { id: 47, name: "Surfrutos Goiaba 300ml", description: "Suco natural Surfrutos", price: 9.00, category: "agua_suco", image: "bebidas_5.jpg", emoji: "🍑", rating: 4.8, servings: "300ml" },
  { id: 48, name: "Suco Del Valle Uva 290ml", description: "Suco Del Valle", price: 8.50, category: "agua_suco", image: "bebidas_6.jpg", emoji: "🍇", rating: 4.7, servings: "290ml" },

  // --- REFRIGERANTE ---
  { id: 49, name: "Coca-Cola Lata 350ml", description: "Refrigerante Coca-Cola", price: 8.00, category: "refrigerante", image: "refrigerante_1.jpg", emoji: "🥤", rating: 4.9, servings: "350ml" },
  { id: 50, name: "Coca-Cola Zero Lata 350ml", description: "Refrigerante Coca-Cola Zero", price: 8.00, category: "refrigerante", image: "refrigerante_2.jpg", emoji: "🥤", rating: 4.9, servings: "350ml" },
  { id: 51, name: "Guaraná Antarctica Lata 350ml", description: "Refrigerante Guaraná", price: 8.00, category: "refrigerante", image: "refrigerante_3.jpg", emoji: "🥤", rating: 4.8, servings: "350ml" },
  { id: 52, name: "Sprite Lata 350ml", description: "Refrigerante Sprite", price: 8.00, category: "refrigerante", image: "refrigerante_4.jpg", emoji: "🥤", rating: 4.8, servings: "350ml" },
  { id: 53, name: "Fanta Laranja Lata 350ml", description: "Refrigerante Fanta Laranja", price: 8.00, category: "refrigerante", image: "refrigerante_5.jpg", emoji: "🟠", rating: 4.7, servings: "350ml" },
  { id: 54, name: "Fanta Uva Lata 350ml", description: "Refrigerante Fanta Uva", price: 8.00, category: "refrigerante", image: "refrigerante_6.jpg", emoji: "🟣", rating: 4.7, servings: "350ml" },
  { id: 55, name: "Schweppes Citrus Lata 350ml", description: "Refrigerante Schweppes", price: 8.00, category: "refrigerante", image: "refrigerante_7.jpg", emoji: "🥤", rating: 4.6, servings: "350ml" },
  { id: 56, name: "Schweppes Tônica Lata 350ml", description: "Refrigerante Schweppes Tônica", price: 8.00, category: "refrigerante", image: "refrigerante_8.jpg", emoji: "🥤", rating: 4.6, servings: "350ml" },
  { id: 57, name: "Red Bull 250ml", description: "Bebida Energética Red Bull", price: 13.00, category: "refrigerante", image: "refrigerante_9.jpg", emoji: "⚡", rating: 4.5, servings: "250ml" },
  { id: 58, name: "H2O Limoneto 500ml", description: "Bebida H2O Limoneto", price: 9.00, category: "refrigerante", image: "refrigerante_10.jpg", emoji: "🍋", rating: 4.7, servings: "500ml" },
  { id: 59, name: "Itubaína Longe Neck 355ml", description: "Bebida Itubaína", price: 7.50, category: "refrigerante", image: "refrigerante_11.jpg", emoji: "🥤", rating: 4.6, servings: "355ml" },
  { id: 60, name: "Coca-Cola Zero 600ml", description: "Refrigerante Coca-Cola Zero", price: 9.00, category: "refrigerante", image: "refrigerante_12.jpg", emoji: "🥤", rating: 4.9, servings: "600ml" },
  { id: 61, name: "Coca-Cola 2L", description: "Refrigerante Coca-Cola", price: 15.90, category: "refrigerante", image: "refrigerante_13.jpg", emoji: "🥤", rating: 4.9, servings: "2L" },
  { id: 62, name: "Coca Cola Zero 2L", description: "Refrigerante Coca-Cola Zero", price: 15.90, category: "refrigerante", image: "refrigerante_14.jpg", emoji: "🥤", rating: 4.9, servings: "2L" },
  { id: 63, name: "Guaraná Antarctica 2L", description: "Refrigerante Guaraná", price: 14.00, category: "refrigerante", image: "refrigerante_15.jpg", emoji: "🥤", rating: 4.8, servings: "2L" },
  { id: 64, name: "Sprite 2L", description: "Refrigerante Sprite", price: 14.00, category: "refrigerante", image: "refrigerante_16.jpg", emoji: "🥤", rating: 4.8, servings: "2L" },
  { id: 65, name: "Fanta Laranja 2L", description: "Refrigerante Fanta Laranja", price: 14.00, category: "refrigerante", image: "refrigerante_17.jpg", emoji: "🟠", rating: 4.7, servings: "2L" },
  { id: 66, name: "Fanta Uva 2L", description: "Refrigerante Fanta Uva", price: 14.00, category: "refrigerante", image: "refrigerante_18.jpg", emoji: "🟣", rating: 4.7, servings: "2L" },

  // --- CERVEJA ---
  { id: 67, name: "Heineken LN 330ml", description: "Cerveja Heineken Premium", price: 15.00, category: "cerveja", image: "cerveja_1.jpg", emoji: "🍺", rating: 4.8, servings: "330ml" },
  { id: 68, name: "Heineken LN 0% 330ml", description: "Cerveja Heineken 0% álcool", price: 15.00, category: "cerveja", image: "cerveja_2.jpg", emoji: "🍺", rating: 4.7, servings: "330ml" },
  { id: 69, name: "Smirnoff Ice 275ml", description: "Bebida Smirnoff Ice", price: 16.00, category: "cerveja", image: "cerveja_3.jpg", emoji: "❄️", rating: 4.6, servings: "275ml" },
  { id: 70, name: "Draft 600ml", description: "Chopp Draft", price: 16.90, category: "cerveja", image: "cerveja_4.jpg", emoji: "🍻", rating: 4.7, servings: "600ml" },

  // --- CHOPP ---
  { id: 71, name: "Pilsen 500ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 17.00, category: "chopp", image: "chopp_1.jpg", emoji: "🍻", rating: 4.8, servings: "500ml" },
  { id: 72, name: "Pilsen 300ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 13.00, category: "chopp", image: "chopp_2.jpg", emoji: "🍻", rating: 4.7, servings: "300ml" },
  { id: 73, name: "IPA 500ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 19.00, category: "chopp", image: "chopp_3.jpg", emoji: "🍻", rating: 4.9, servings: "500ml" },
  { id: 74, name: "IPA 300ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 15.00, category: "chopp", image: "chopp_4.jpg", emoji: "🍻", rating: 4.8, servings: "300ml" },
  { id: 75, name: "Black 500ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 18.00, category: "chopp", image: "chopp_5.jpg", emoji: "🍻", rating: 4.9, servings: "500ml" },
  { id: 76, name: "Black 300ml", description: "Somente para retirada. Copo descartável sem tampa.", price: 15.00, category: "chopp", image: "chopp_6.jpg", emoji: "🍻", rating: 4.8, servings: "300ml" },
];

const categories = {
  burger_180g: "Burger 180g",
  burger_90g: "Burger 90g",
  dogs: "Dogs",
  porcoes: "Porções",
  molhos: "Molhos",
  doces: "Doces",
  agua_suco: "Água e Suco",
  refrigerante: "Refrigerante",
  cerveja: "Cerveja",
  chopp: "Chopp"
};
