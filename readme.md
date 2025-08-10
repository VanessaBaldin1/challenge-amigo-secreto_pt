# 🎁 Challenge - Amigo Secreto

Aplicação simples para sorteio de **Amigo Secreto** desenvolvida em JavaScript, HTML e CSS.  
Permite adicionar nomes a uma lista e realizar um sorteio aleatório para escolher quem será o amigo secreto.

---

## 📌 Funcionalidades

- **Adicionar nomes** à lista.
- **Validação** para impedir que nomes vazios sejam inseridos.
- **Exibição dinâmica** da lista de amigos na tela.
- **Sorteio aleatório** usando `Math.random()` e `Math.floor()`.
- **Exibição do resultado** do sorteio na tela.

---

## 📂 Estrutura de Pastas

```plaintext
challenge-amigo-secreto_pt/
│
├── index.html          # Estrutura HTML principal
├── style.css           # Estilização da página
├── script.js           # Lógica em JavaScript
├── README.md           # Documentação do projeto
└── assets/             # (opcional) imagens e ícones

---

3. Executar no navegador
Localize o arquivo index.html.

Clique duas vezes para abrir no navegador ou abra via Live Server no VS Code.

🖥 Tecnologias Utilizadas
HTML5 – Estrutura da página

CSS3 – Estilização

JavaScript (ES6) – Lógica de programação

📜 Lógica do Sorteio
Armazena os nomes em um array (let amigos = []).

Ao clicar em Adicionar, valida se o campo não está vazio e insere no array.

Ao clicar em Sortear Amigo, gera um índice aleatório:

javascript
Copiar
Editar
let indice = Math.floor(Math.random() * amigos.length);
Exibe o nome sorteado na tela.

📋 Exemplo de Uso
Digite um nome no campo de texto e clique em Adicionar.

Repita o processo até inserir todos os amigos.

Clique em Sortear Amigo.

O sistema exibirá o nome do amigo sorteado.

📄 Licença
Este projeto está sob a licença MIT.
Você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que mantenha os créditos.

✨ Autor
Desenvolvido por Vanessa Baldin
Se gostou do projeto, ⭐ dê um star no repositório para apoiar!