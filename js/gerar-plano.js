const btnGerar = document.getElementById('btnGerarPlano');
const planoSection = document.getElementById('planoGerado');
const planoPre = planoSection.querySelector('pre');

btnGerar.addEventListener('click', () => {
    const foco = document.getElementById('focoTreino').value;
    const dias = document.getElementById('diasTreino').value;
    const preferencia = document.getElementById('preferenciaAlimentar').value;
    const restricao = document.getElementById('restricao').value.trim();

    const plano = {
        treino: { foco, dias },
        nutricao: { preferencia, restricao }
    };

    // Salva no localStorage
    localStorage.setItem('planoPersonalizado', JSON.stringify(plano));

    // Exibe no DOM
    planoPre.textContent = JSON.stringify(plano, null, 2);
    planoSection.classList.remove('d-none');

    alert('Plano gerado e salvo com sucesso!');
});
