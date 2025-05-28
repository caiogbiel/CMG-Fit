document.addEventListener('DOMContentLoaded', function() {
  // Array de depoimentos (pode ser substituído por dados de API)
  const depoimentos = [
    {
      nome: "Marina",
      idade: 34,
      profissao: "Professora | Emagrecimento",
      texto: "O CMG Fit mudou minha vida! Perdi 18kg em 6 meses com a combinação perfeita de treinos e dieta. Hoje me sinto mais disposta e saudável.",
      rating: 5,
      data: "15/05/2023"
    },
    {
      nome: "Francisco",
      idade: 65,
      profissao: "Aposentado | Melhorar Resistência",
      texto: "Aos 65 anos, recuperei minha mobilidade e perdi a barriga. Os treinos e o acompanhamento nutricional foram essenciais para meu resultado.",
      rating: 5,
      data: "22/06/2023"
    },
    {
      nome: "Mário",
      idade: 26,
      profissao: "Desenvolvedor | Hipertrofia",
      texto: "Ganhei 7kg de massa muscular em 8 meses. O plano de treino evolui junto com meu condicionamento, sempre me desafiando na medida certa!",
      rating: 4,
      data: "10/07/2023"
    }
  ];

  // Elementos DOM
  const depoimentosContainer = document.getElementById('depoimentos-container');
  const depoimentoForm = document.getElementById('depoimentoForm');
  const formMessage = document.getElementById('form-message');
  const stars = document.querySelectorAll('.rating-stars i');
  const ratingInput = document.getElementById('rating');

  // Carregar depoimentos iniciais
  function carregarDepoimentos() {
    depoimentosContainer.innerHTML = '';
    
    depoimentos.forEach(depoimento => {
      const ratingStars = '★'.repeat(depoimento.rating) + '☆'.repeat(5 - depoimento.rating);
      
      const depoimentoHTML = `
        <div class="col-md-6 col-lg-4">
          <div class="depoimento-card">
            <div class="rating">${ratingStars}</div>
            <p class="depoimento-texto">"${depoimento.texto}"</p>
            <div class="depoimento-autor">
              <div class="autor-avatar">${depoimento.nome.charAt(0)}</div>
              <div class="autor-info">
                <h4>${depoimento.nome}, ${depoimento.idade} anos</h4>
                <p>${depoimento.profissao}</p>
              </div>
            </div>
          </div>
        </div>
      `;
      
      depoimentosContainer.insertAdjacentHTML('beforeend', depoimentoHTML);
    });
  }

  // Sistema de avaliação com estrelas
  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = this.getAttribute('data-rating');
      ratingInput.value = rating;
      
      stars.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  // Enviar novo depoimento
  depoimentoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar formulário
    if (!this.checkValidity() || !ratingInput.value) {
      if (!ratingInput.value) {
        formMessage.textContent = 'Por favor, avalie com as estrelas';
        formMessage.classList.remove('d-none', 'alert-success');
        formMessage.classList.add('alert-danger');
      }
      this.classList.add('was-validated');
      return;
    }
    
    // Criar novo depoimento
    const novoDepoimento = {
      nome: document.getElementById('nome').value,
      idade: document.getElementById('idade').value,
      profissao: document.getElementById('profissao').value,
      texto: document.getElementById('depoimento').value,
      rating: parseInt(ratingInput.value),
      data: new Date().toLocaleDateString('pt-BR')
    };
    
    // Adicionar ao array (simulando persistência)
    depoimentos.unshift(novoDepoimento);
    
    // Feedback ao usuário
    formMessage.textContent = 'Depoimento enviado com sucesso!';
    formMessage.classList.remove('d-none', 'alert-danger');
    formMessage.classList.add('alert-success');
    
    // Recarregar depoimentos
    carregarDepoimentos();
    
    // Resetar formulário
    setTimeout(() => {
      this.reset();
      this.classList.remove('was-validated');
      stars.forEach(star => star.classList.remove('active'));
      ratingInput.value = '';
      formMessage.classList.add('d-none');
    }, 3000);
  });

  // Inicializar
  carregarDepoimentos();
});