const treinosPorObjetivo = {
    emagrecimento: [
        { grupo: 'Cardio', exercicios: ['Corrida', 'Pular corda', 'Bicicleta ergométrica'] },
        { grupo: 'Full Body', exercicios: ['Burpees', 'Polichinelos', 'Mountain climbers'] }
    ],
    ganho: [
        { grupo: 'Peito', exercicios: ['Supino reto', 'Supino inclinado', 'Crucifixo'] },
        { grupo: 'Pernas', exercicios: ['Agachamento livre', 'Leg press', 'Afundo'] }
    ],
    manutencao: [
        { grupo: 'Costas', exercicios: ['Puxada frente', 'Remada curvada', 'Pullover'] },
        { grupo: 'Abdômen', exercicios: ['Prancha', 'Abdominal supra', 'Elevação de pernas'] }
    ]
};

const selectObjetivo = document.getElementById('objetivo-select');
const treinosDisplay = document.getElementById('treinos-display');

selectObjetivo.addEventListener('change', () => {
    const objetivo = selectObjetivo.value;
    treinosDisplay.innerHTML = ''; // Limpa o conteúdo atual

    if (treinosPorObjetivo[objetivo]) {
        treinosPorObjetivo[objetivo].forEach(treino => {
            const card = document.createElement('div');
            card.className = 'treino-card';
            card.innerHTML = `
                <h3>${treino.grupo}</h3>
                <ul>
                    ${treino.exercicios.map(ex => `<li>${ex}</li>`).join('')}
                </ul>
            `;
            treinosDisplay.appendChild(card);
        });
    }
});
