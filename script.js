// Objeto com as estatísticas dos jogadores
const jogadores = {
    bigode: { pts: 28.5, ast: 6.2, reb: 4.1 },
    zoio: { pts: 15.2, ast: 11.8, reb: 3.5 },
    ze: { pts: 10.1, ast: 2.5, reb: 14.7 }
};

const selector = document.getElementById('playerSelector');
const box = document.getElementById('statsBox');

function mostrarStats() {
    const player = selector.value;

    if (player) {
        // Preenche os dados
        document.getElementById('pts').innerText = jogadores[player].pts;
        document.getElementById('ast').innerText = jogadores[player].ast;
        document.getElementById('reb').innerText = jogadores[player].reb;
        
        // Mostra o painel
        box.style.display = 'block';
    } else {
        // Esconde o painel se nenhum jogador for selecionado
        box.style.display = 'none';
    }
}

// Escuta a mudança no select
selector.addEventListener('change', mostrarStats);