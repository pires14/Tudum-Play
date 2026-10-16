// Seleciona o botão do perfil do usuário
const profileButton = document.querySelector('#profileButton');
// Seleciona o botão de fechar o painel lateral
const closeButton = document.querySelector('#closeButton');
// Seleciona o container do painel do assistente
const assistantPanel = document.querySelector('#assistantPanel');
// Seleciona a camada escura de fundo do painel
const overlay = document.querySelector('#overlay');
// Seleciona o formulário de envio de mensagem
const form = document.querySelector('#messageForm');
// Seleciona o campo de entrada da mensagem
const input = document.querySelector('#messageInput');
// Seleciona o container do carrossel de filmes
const movieCarousel = document.querySelector('#movieCarousel');
// Seleciona o botão de voltar no carrossel
const previousButton = document.querySelector('.carousel-button.previous');
// Seleciona o botão de avançar no carrossel
const nextButton = document.querySelector('.carousel-button.next');

// Seleciona o elemento de título do destaque
const featuredTitle = document.querySelector('#featuredTitle');
// Seleciona o elemento de subtítulo do destaque
const featuredSubtitle = document.querySelector('#featuredSubtitle');
// Seleciona o elemento de descrição do destaque
const featuredDescription = document.querySelector('#featuredDescription');
// Seleciona o elemento do cartaz do destaque
const featuredPoster = document.querySelector('#featuredPoster');

// Seleciona o botão de assistir o destaque
const watchButton = document.querySelector('#watchButton');
// Seleciona o botão de informações do destaque
const infoButton = document.querySelector('#infoButton');

// Seleciona o cartaz no resultado de recomendação
const resultPoster = document.querySelector('#resultPoster');
// Seleciona o título no resultado de recomendação
const resultTitle = document.querySelector('#resultTitle');
// Seleciona os detalhes no resultado de recomendação
const resultDetails = document.querySelector('#resultDetails');
// Seleciona a descrição no resultado de recomendação
const resultDescription = document.querySelector('#resultDescription');
// Seleciona o botão de assistir a recomendação
const resultWatch = document.querySelector('#resultWatch');

// Seleciona a estrutura do modal
const modal = document.querySelector('#modal');
// Seleciona o título no cabeçalho do modal
const modalTitle = document.querySelector('#modalTitle');
// Seleciona o corpo de conteúdo do modal
const modalBody = document.querySelector('#modalBody');
// Seleciona o botão de fechar o modal
const modalClose = document.querySelector('#modalClose');

// Seleciona o botão para abrir a busca
const searchButton = document.querySelector('#searchButton');
// Seleciona o container da caixa de busca
const searchBox = document.querySelector('#searchBox');
// Seleciona o campo de digitação da busca
const searchInput = document.querySelector('#searchInput');
// Seleciona o botão de fechar a busca
const closeSearch = document.querySelector('#closeSearch');
// Seleciona o container da lista de busca
const searchResults = document.querySelector('#searchResults');

// Objeto contendo os dados do filme em destaque
let featured = {
  title: 'Os Mercenários',
  subtitle: 'Filme em destaque',
  description: 'Um grupo de combatentes de elite aceita uma missão extremamente perigosa.',
  image: 'poster/mercenarios.png',
  type: 'Filme',
  year: '2010',
  details: '1h 43min · Ação',
  platforms: [
    ['Prime Video', 'https://www.primevideo.com/'],
    ['Apple TV', 'https://tv.apple.com/br/'],
    ['JustWatch', 'https://www.justwatch.com/br/']
  ],
  info: 'Um grupo de mercenários recebe uma missão que envolve enfrentar uma organização militar em uma operação de alto risco.'
};

// Lista contendo os dados dos filmes do carrossel
let movies = [
  {
    title: 'A Cinco Passos de Você',
    image: 'poster/cinco-passos.png',
    type: 'Filme',
    year: '2019',
    details: '1h 56min · Romance',
    description: 'Dois jovens se apaixonam enquanto enfrentam uma situação que exige distância entre eles.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Um romance dramático sobre dois jovens que desenvolvem uma relação enquanto convivem com limitações que impedem a proximidade física.'
  },
  {
    title: 'Supernatural',
    image: 'poster/supernatural.png',
    type: 'Série',
    year: '2005',
    details: '15 temporadas · 327 episódios',
    description: 'Dois irmãos percorrem o país enfrentando criaturas, mistérios e acontecimentos sobrenaturais.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Max', 'https://www.max.com/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'A série acompanha os irmãos Sam e Dean Winchester em suas viagens enfrentando acontecimentos sobrenaturais.'
  },
  {
    title: 'Ratatouille',
    image: 'poster/ratatouille.png',
    type: 'Filme',
    year: '2007',
    details: '1h 51min · Animação',
    description: 'Um rato apaixonado por culinária tenta realizar seu sonho de se tornar chef em Paris.',
    platforms: [
      ['Disney+', 'https://www.disneyplus.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Remy é um rato que possui grande talento para cozinhar e sonha em trabalhar em um restaurante de Paris.'
  },
  {
    title: 'Procurando Nemo',
    image: 'poster/procurando-nemo.png',
    type: 'Filme',
    year: '2003',
    details: '1h 44min · Animação',
    description: 'Um pai atravessa o oceano em uma aventura para encontrar seu filho.',
    platforms: [
      ['Disney+', 'https://www.disneyplus.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Após seu filho desaparecer, Marlin atravessa o oceano em uma jornada para encontrá-lo.'
  },
  {
    title: 'The Office',
    image: 'poster/the-office.png',
    type: 'Série',
    year: '2005',
    details: '9 temporadas · 203 episódios',
    description: 'Uma comédia sobre o cotidiano, os conflitos e as situações absurdas de um escritório.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Peacock', 'https://www.peacocktv.com/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Uma comédia que acompanha funcionários de uma empresa de papel e as situações inusitadas do ambiente de trabalho.'
  },
];

// Objeto que mapeia palavras-chave para títulos
const recommendations = {
  leve: 'Procurando Nemo',
  comedia: 'The Office',
  suspense: 'Supernatural',
  romance: 'A Cinco Passos de Você',
  familia: 'Ratatouille',
  acao: 'Os Mercenários',
  animacao: 'Ratatouille',
  ficcao: 'Supernatural'
};

// Função para atualizar os dados visuais do destaque
function renderFeatured() {
  // Define o título do destaque em letras maiúsculas
  featuredTitle.textContent = featured.title.toUpperCase();
  // Define o tipo e o ano do filme em destaque
  featuredSubtitle.textContent = `${featured.type} · ${featured.year}`;
  // Define a descrição do filme em destaque
  featuredDescription.textContent = featured.description;
  // Define a imagem de fundo do cartaz
  featuredPoster.style.backgroundImage = `url("${featured.image}")`;
  // Define o rótulo de acessibilidade da imagem
  featuredPoster.setAttribute('aria-label', featured.title);
}

// Função para gerar os cartões no carrossel
function renderMovies() {
  // Limpa o conteúdo anterior do carrossel
  movieCarousel.innerHTML = '';

  // Percorre cada filme da lista de filmes
  movies.forEach((movie, index) => {
    // Cria um elemento HTML do tipo article
    const card = document.createElement('article');

    // Atribui a classe CSS do cartão
    card.className = 'card';
    // Torna o cartão focável via navegação por teclado
    card.tabIndex = 0;
    // Define a função semântica de botão
    card.setAttribute('role', 'button');
    // Define o texto descritivo para leitores de tela
    card.setAttribute(
      'aria-label',
      `Colocar ${movie.title} em destaque`
    );

    // Insere a imagem e o título no HTML do cartão
    card.innerHTML = `
      <img
        src="${movie.image}"
        alt="${movie.title}"
        style="
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 9;
          object-fit: contain;
          object-position: center;
          display: block;
        "
      >
      <div class="card-title">${movie.title}</div>
    `;

    // Escuta o clique no cartão para trocar com o destaque
    card.addEventListener('click', () => swapFeatured(index));

    // Escuta as teclas para permitir seleção via teclado
    card.addEventListener('keydown', event => {
      // Verifica se as teclas Enter ou Espaço foram pressionadas
      if (event.key === 'Enter' || event.key === ' ') {
        // Evita a rolagens indesejadas da página
        event.preventDefault();
        // Troca o filme selecionado pelo destaque
        swapFeatured(index);
      }
    });

    // Adiciona o cartão pronto ao carrossel
    movieCarousel.appendChild(card);
  });

  // Atualiza o estado de ativação dos botões da seta
  updateCarouselButtons();
}

// Função para trocar o item do carrossel pelo destaque
function swapFeatured(index) {
  // Armazena temporariamente o filme clicado
  const selectedMovie = movies[index];

  // Copia o destaque atual para a posição do carrossel
  movies[index] = {
    title: featured.title,
    image: featured.image,
    type: featured.type,
    year: featured.year,
    details: featured.details,
    description: featured.description,
    platforms: featured.platforms,
    info: featured.info
  };

  // Define o novo destaque com o filme clicado
  featured = selectedMovie;

  // Atualiza os elementos na tela
  renderFeatured();
  // Re-renderiza a lista do carrossel
  renderMovies();
}

// Função para exibir a janela modal
function openModal(title, content) {
  // Insere o título fornecido na modal
  modalTitle.textContent = title;
  // Insere o conteúdo HTML interno na modal
  modalBody.innerHTML = content;
  // Exibe o elemento modal removendo o hidden
  modal.hidden = false;
  // Trava a rolagem da página de fundo
  document.body.style.overflow = 'hidden';
  // Move o foco para o botão de fechar a modal
  modalClose.focus();
}

// Função para ocultar a janela modal
function closeModal() {
  // Oculta a modal adicionando a propriedade hidden
  modal.hidden = true;
  // Destrava a rolagem da página de fundo
  document.body.style.overflow = '';
}

// Função para montar a visualização das plataformas
function showPlatforms(item) {
  // Cria links HTML para cada plataforma disponível
  const platforms = item.platforms.map(platform => `
    <a href="${platform[1]}" target="_blank" rel="noopener noreferrer">
      ${platform[0]} ↗
    </a>
  `).join('');

  // Abre a modal com os links gerados
  openModal(
    `Onde assistir: ${item.title}`,
    `
      <div class="platform-list">
        ${platforms}
      </div>

      <p class="info-text">
        A disponibilidade pode variar conforme a região e a data.
      </p>
    `
  );
}

// Função para exibir detalhes estendidos do título
function showInfo(item) {
  // Abre a modal exibindo a sinopse detalhada
  openModal(
    item.title,
    `
      <p class="info-text">
        <strong>${item.type} · ${item.year}</strong>
      </p>

      <p class="info-text">
        ${item.info}
      </p>
    `
  );
}

// Escuta o clique no botão assistir do destaque
watchButton.addEventListener('click', () => {
  // Mostra as plataformas do título em destaque
  showPlatforms(featured);
});

// Escuta o clique no botão de informações do destaque
infoButton.addEventListener('click', () => {
  // Mostra os detalhes do título em destaque
  showInfo(featured);
});

// Escuta o clique no botão fechar da modal
modalClose.addEventListener('click', event => {
  // Previne a ação padrão do evento
  event.preventDefault();
  // Evita propagação do evento para o fundo
  event.stopPropagation();
  // Executa o fechamento da modal
  closeModal();
});

// Escuta cliques dentro do container da modal
modal.addEventListener('click', event => {
  // Fecha a modal caso o clique ocorra na área externa
  if (event.target === modal) {
    closeModal();
  }
});

// Função para exibir o painel lateral
function openPanel() {
  // Exibe a camada escura de fundo
  overlay.hidden = false;
  // Adiciona a classe de abertura do painel
  assistantPanel.classList.add('open');
  // Atualiza atributo de acessibilidade para visível
  assistantPanel.setAttribute('aria-hidden', 'false');
  // Informa aos leitores de tela que o painel expandiu
  profileButton.setAttribute('aria-expanded', 'true');
  // Foca no botão de fechar do painel
  closeButton.focus();
}

// Função para esconder o painel lateral
function closePanel() {
  // Remove a classe que mantém o painel visível
  assistantPanel.classList.remove('open');
  // Atualiza atributo de acessibilidade para oculto
  assistantPanel.setAttribute('aria-hidden', 'true');
  // Informa aos leitores de tela que o painel recolheu
  profileButton.setAttribute('aria-expanded', 'false');

  // Aguarda a animação CSS terminar para ocultar a camada escura
  setTimeout(() => {
    overlay.hidden = true;
  }, 300);

  // Devolve o foco ao botão que abriu o painel
  profileButton.focus();
}

// Escuta o clique no botão do perfil para abrir o painel
profileButton.addEventListener('click', openPanel);
// Escuta o clique no botão X do painel para fechar
closeButton.addEventListener('click', closePanel);
// Escuta o clique na camada escura para fechar o painel
overlay.addEventListener('click', closePanel);

// Escuta o pressionamento de teclas em todo o documento
document.addEventListener('keydown', event => {
  // Verifica se a tecla acionada foi o Escape
  if (event.key === 'Escape') {
    // Se o painel estiver aberto, fecha o painel
    if (assistantPanel.classList.contains('open')) {
      closePanel();
    }

    // Se a modal estiver visível, fecha a modal
    if (!modal.hidden) {
      closeModal();
    }
  }
});

// Função para encontrar e exibir a recomendação do assistente
function showRecommendation(category) {
  // Obtém o título correspondente à categoria ou usa o padrão
  const movieTitle =
    recommendations[category] || recommendations.comedia;

  // Procura pelo título dentro do array de filmes
  const recommendation = movies.find(
    movie => movie.title === movieTitle
  );

  // Seleciona o filme do array ou o próprio destaque
  const selected =
    recommendation ||
    (featured.title === movieTitle ? featured : null);

  // Cancela a execução se não encontrar correspondência
  if (!selected) {
    return;
  }

  // Preenche o título recomendado na tela
  resultTitle.textContent = selected.title;
  // Preenche o ano e os detalhes do recomendado
  resultDetails.textContent =
    `${selected.year} · ${selected.details}`;

  // Preenche a sinopse do recomendado
  resultDescription.textContent = selected.description;

  // Atualiza a imagem do cartaz do recomendado
  resultPoster.style.backgroundImage =
    `url("${selected.image}")`;

  // Atualiza o texto descritivo da imagem recomendada
  resultPoster.setAttribute(
    'aria-label',
    selected.title
  );

  // Configura a ação de clique do botão assistir do recomendado
  resultWatch.onclick = () => {
    showPlatforms(selected);
  };
}

// Percorre todos os botões da lista de sugestões
document
  .querySelectorAll('.suggestions button')
  .forEach(button => {
    // Adiciona o evento de clique em cada botão sugestão
    button.addEventListener('click', () => {
      // Atribui a mensagem do botão ao campo de texto
      input.value = button.dataset.message;
      // Dispara o envio do formulário via código
      form.requestSubmit();
    });
  });

// Escuta o envio do formulário de mensagem
form.addEventListener('submit', event => {
  // Impede o recarregamento automático da página
  event.preventDefault();

  // Limpa, remove acentos e formata a mensagem do usuário
  const message = input.value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  // Define uma categoria padrão de fallback
  let category = 'comedia';

  // Analisa os termos usando expressões regulares
  if (
    /animacao|desenho|filme de animacao/.test(message)
  ) {
    category = 'animacao';

  } else if (
    /acao|aventura|luta|heroi|guerra/.test(message)
  ) {
    category = 'acao';

  } else if (
    /suspense|terror|misterio|investigacao|crime/.test(message)
  ) {
    category = 'suspense';

  } else if (
    /romance|romantico|amor|casal/.test(message)
  ) {
    category = 'romance';

  } else if (
    /familia|crianca|criancas|infantil/.test(message)
  ) {
    category = 'familia';

  } else if (
    /ficcao|espaco|futuro|cientifica/.test(message)
  ) {
    category = 'ficcao';

  } else if (
    /leve|divertido|divertida|comedia|engracado|engracada/.test(message)
  ) {
    category = 'leve';
  }

  // Atualiza o quadro de recomendação com a categoria achada
  showRecommendation(category);

  // Limpa o campo de entrada do formulário
  input.value = '';
});

// Função para rolar lateralmente o carrossel de filmes
function moveCarousel(direction) {
  // Executa uma rolagem suave baseada na largura visível
  movieCarousel.scrollBy({
    left: movieCarousel.clientWidth * 0.8 * direction,
    behavior: 'smooth'
  });
}

// Função para controlar a ativacao das setas do carrossel
function updateCarouselButtons() {
  // Calcula o limite máximo de rolagem da área
  const maxScroll =
    movieCarousel.scrollWidth -
    movieCarousel.clientWidth;

  // Desabilita a seta da esquerda ao alcançar o início
  previousButton.disabled =
    movieCarousel.scrollLeft <= 2;

  // Desabilita a seta da direita ao alcançar o fim
  nextButton.disabled =
    movieCarousel.scrollLeft >= maxScroll - 2;
}

// Escuta o clique no botão de voltar do carrossel
previousButton.addEventListener('click', () => {
  moveCarousel(-1);
});

// Escuta o clique no botão de avançar do carrossel
nextButton.addEventListener('click', () => {
  moveCarousel(1);
});

// Atualiza o estado dos botões ao rolar o carrossel
movieCarousel.addEventListener(
  'scroll',
  updateCarouselButtons
);

// Atualiza o estado dos botões ao redimensionar a janela
window.addEventListener(
  'resize',
  updateCarouselButtons
);

// Escuta o clique para abrir ou fechar a caixa de busca
searchButton.addEventListener('click', () => {
  // Alterna a classe de exibição no elemento
  searchBox.classList.toggle('open');

  // Move o foco para o campo de texto caso tenha aberto
  if (searchBox.classList.contains('open')) {
    searchInput.focus();
  }
});

// Escuta o clique no botão de fechar a busca
closeSearch.addEventListener('click', () => {
  // Remove a classe visível do container
  searchBox.classList.remove('open');
  // Limpa o texto digitado na busca
  searchInput.value = '';
  // Limpa a lista de resultados gerados
  searchResults.innerHTML = '';
});

// Escuta alterações de digitação no campo de busca
searchInput.addEventListener('input', () => {
  // Limpa espaços extras e converte texto em minúsculas
  const query = searchInput.value
    .toLowerCase()
    .trim();

  // Limpa os resultados se o campo estiver vazio
  if (!query) {
    searchResults.innerHTML = '';
    return;
  }

  // Procura o termo digitado em todos os títulos disponíveis
  const results = [featured, ...movies].filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  // Exibe mensagem caso nenhum título coincida com a busca
  if (!results.length) {
    searchResults.innerHTML =
      '<p>Nenhum título encontrado.</p>';

    return;
  }

  // Renderiza a lista de elementos com os resultados achados
  searchResults.innerHTML = results
    .map(movie => `
      <div class="search-result">
        ${movie.title} · ${movie.type}
      </div>
    `)
    .join('');

  // Adiciona ouvintes de clique nos itens da busca gerada
  document
    .querySelectorAll('.search-result')
    .forEach(result => {
      result.addEventListener('click', () => {
        // Extrai apenas o nome do filme do texto retornado
        const title =
          result.textContent
            .split(' · ')[0]
            .trim();

        // Localiza a posição do título na lista de filmes
        const index = movies.findIndex(
          movie => movie.title === title
        );

        // Se o filme estiver na lista, realiza a troca com o destaque
        if (index !== -1) {
          swapFeatured(index);
        }

        // Fecha a caixa e limpa a pesquisa após a escolha
        searchBox.classList.remove('open');
        searchInput.value = '';
        searchResults.innerHTML = '';
      });
    });
});

/* =========================
   INICIALIZAÇÃO
   ========================= */

// Renderiza o item em destaque inicial
renderFeatured();
// Renderiza o carrossel com a lista de filmes inicial
renderMovies();
