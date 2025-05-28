const dietaPorObjetivo = {
    emagrecer: [
        ['Iogurte', 'Frutas', 'Aveia'],
        ['Frango grelhado', 'Salada', 'Arroz integral'],
        ['Sopa leve', 'Chá verde']
    ],
    ganho: [
        ['Ovos mexidos', 'Pão integral', 'Vitamina de banana'],
        ['Carne vermelha', 'Macarrão integral', 'Legumes'],
        ['Omelete', 'Batata doce']
    ],
    manutencao: [
        ['Panqueca de aveia', 'Frutas'],
        ['Peixe grelhado', 'Purê de batata', 'Salada'],
        ['Sanduíche natural', 'Suco detox']
    ]
};

const selectDieta = document.getElementById('dieta-select');
const dietaCards = document.querySelectorAll('.dieta-card ul');

selectDieta.addEventListener('change', () => {
    const objetivo = selectDieta.value;

    if (dietaPorObjetivo[objetivo]) {
        dietaPorObjetivo[objetivo].forEach((refeicao, index) => {
            dietaCards[index].innerHTML = refeicao.map(item => `<li>${item}</li>`).join('');
        });
    } else {
        // Se não selecionar, limpa tudo
        dietaCards.forEach(card => card.innerHTML = '');
    }
});
