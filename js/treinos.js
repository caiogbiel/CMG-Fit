const treinosPorObjetivo = {
    emagrecer: [
        ['Corrida', 'Abdominal', 'Polichinelo'],
        ['Bicicleta', 'Prancha', 'Mountain climbers'],
        ['HIIT', 'Flexões', 'Agachamentos'],
        ['Natação', 'Prancha lateral', 'Burpees'],
        ['Caminhada', 'Alongamento', 'Respiração']
    ],
    ganho: [
        ['Supino reto', 'Crucifixo', 'Flexão'],
        ['Agachamento', 'Leg press', 'Afundo'],
        ['Remada curvada', 'Puxada frente', 'Pullover'],
        ['Desenvolvimento', 'Elevação lateral', 'Arnold press'],
        ['Rosca direta', 'Tríceps testa', 'Abdominal']
    ],
    manutencao: [
        ['Caminhada', 'Alongamento', 'Respiração'],
        ['Circuito leve', 'Prancha', 'Alongamento'],
        ['Bicicleta', 'Agachamento leve', 'Flexão'],
        ['Corrida moderada', 'Elevação pélvica', 'Respiração'],
        ['Natação leve', 'Abdominal leve', 'Alongamento']
    ]
};

const selectObjetivo = document.getElementById('objetivo-select');
const treinoCards = document.querySelectorAll('.treino-card ul');

selectObjetivo.addEventListener('change', () => {
    const objetivo = selectObjetivo.value;

    if (treinosPorObjetivo[objetivo]) {
        treinosPorObjetivo[objetivo].forEach((treinoDia, index) => {
            treinoCards[index].innerHTML = treinoDia.map(ex => `<li>${ex}</li>`).join('');
        });
    } else {
        // Se não selecionar, limpa tudo
        treinoCards.forEach(card => card.innerHTML = '');
    }
});
