//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// app.js — Lógica do Amigo Secreto
// Estrutura principal: array de amigos + funções para adicionar, listar e sortear.

// app.js — Lógica do Amigo Secreto (todos os IDs precisam bater com o HTML)

(function () {
  'use strict';

  // Estado
  const amigos = [];

  // Elementos
  const form = document.getElementById('formAdicionar');
  const input = document.getElementById('inputAmigo');
  const listaEl = document.getElementById('listaAmigos');
  const contadorEl = document.getElementById('contador');
  const btnSortear = document.getElementById('btnSortear');
  const btnLimpar = document.getElementById('btnLimpar');
  const resultadoEl = document.getElementById('resultado');

  // Helper: escapa texto para evitar injeção de HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"'`=\/]/g, function (s) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#47;',
        '`': '&#96;',
        '=': '&#61;'
      }[s];
    });
  }

  // Atualiza lista na UI e estado dos botões
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
        li.dataset.index = String(idx);
        listaEl.appendChild(li);
      });
    }

    if (contadorEl) contadorEl.textContent = `(${amigos.length})`;
    atualizarEstadoBotoes();
  }

  // Habilita/desabilita botões conforme estado
  function atualizarEstadoBotoes() {
    if (btnSortear) btnSortear.disabled = amigos.length === 0;
    if (btnLimpar) btnLimpar.disabled = amigos.length === 0;
  }

  // Adiciona amigo (chamado pelo submit do form)
  function adicionarAmigo(event) {
    if (event) event.preventDefault();
    const nome = input.value.trim();

    if (nome === '') {
      alert('Por favor, insira um nome.');
      input.focus();
      return;
    }

    // Opção: evitar duplicatas (descomente se quiser)
    // const normalizado = nome.toLowerCase();
    // if (amigos.some(a => a.toLowerCase() === normalizado)) {
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

  // Sorteia um amigo aleatoriamente
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert('A lista está vazia. Adicione pelo menos um nome.');
      return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceAleatorio];

    resultadoEl.innerHTML = `🎉 O amigo secreto é: <strong>${escapeHtml(nomeSorteado)}</strong>`;
  }

  // Limpa histórico com confirmação
  function limparHistorico() {
    if (amigos.length === 0 && resultadoEl.innerHTML.trim() === '') {
      // nada a fazer
      return;
    }
    const confirmar = confirm('Deseja realmente limpar a lista de amigos e o resultado do sorteio?');
    if (!confirmar) return;

    amigos.length = 0; // mantém referência
    atualizarLista();
    resultadoEl.innerHTML = '';
    input.value = '';
    input.focus();
  }

  // Inicializa event listeners
  function init() {
    atualizarLista();

    if (form) form.addEventListener('submit', adicionarAmigo);
    if (btnSortear) btnSortear.addEventListener('click', sortearAmigo);
    if (btnLimpar) btnLimpar.addEventListener('click', limparHistorico);

    // Se quiser adicionar via Enter quando o campo tem foco, o submit do form já faz isso.
    // Mas mantemos um listener seguro para evitar comportamento duplicado:
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        // O form.submit() será disparado mesmo sem este bloco, então só prevenimos se necessário.
        // Aqui apenas evitamos múltiplos disparos em navegadores estranhos.
        e.preventDefault();
        adicionarAmigo();
      }
    });
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
