//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// app.js — Lógica do Amigo Secreto
// Estrutura principal: array de amigos + funções para adicionar, listar e sortear.

const amigos = [];

const form = document.getElementById('formAdicionar');
const input = document.getElementById('inputAmigo');
const listaEl = document.getElementById('listaAmigos');
const contadorEl = document.querySelector('#tituloLista small') || document.getElementById('contador');
const btnSortear = document.getElementById('btnSortear');
const resultadoEl = document.getElementById('resultado');

function atualizarLista() {
  listaEl.innerHTML = '';
  if (amigos.length === 0) {
    const li = document.createElement('li');
    li.className = 'vazio';
    li.textContent = 'Nenhum amigo adicionado.';
    listaEl.appendChild(li);
  } else {
    amigos.forEach((nome, idx) => {
      const li = document.createElement('li');
      li.textContent = nome;
      li.dataset.index = idx;
      listaEl.appendChild(li);
    });
  }
  if (contadorEl) contadorEl.textContent = `(${amigos.length})`;
}

function adicionarAmigo(event) {
  if (event) event.preventDefault();
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    input.focus();
    return;
  }

  // Opcional: evitar duplicatas (descomente se quiser)
  // if (amigos.includes(nome)) {
  //   alert('Esse nome já está na lista.');
  //   input.value = '';
  //   input.focus();
  //   return;
  // }

  amigos.push(nome);
  atualizarLista();
  input.value = '';
  input.focus();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista está vazia. Adicione pelo menos um nome.');
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceAleatorio];

  resultadoEl.innerHTML = `O amigo secreto é: <strong>${nomeSorteado}</strong>`;
  // se quiser esconder o nome após x segundos, descomente:
  // setTimeout(() => resultadoEl.innerHTML = '', 6000);
}

// Event listeners
form.addEventListener('submit', adicionarAmigo);
btnSortear.addEventListener('click', sortearAmigo);

// Inicializa UI
atualizarLista();

