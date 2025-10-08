/**
 * Alterna a visibilidade dos detalhes de um serviço.
 * @param {string} id_servico - O ID do serviço (ex: 'consulta', 'cirurgia').
 */
function toggleDetalhe(id_servico) {
    // Constrói o ID completo do elemento de detalhe
    const detalheElement = document.getElementById(`detalhe-${id_servico}`);
    
    // Verifica se o elemento existe
    if (detalheElement) {
        // Altera a propriedade 'display' para mostrar ('block') ou esconder ('none')
        if (detalheElement.style.display === 'block') {
            detalheElement.style.display = 'none';
        } else {
            detalheElement.style.display = 'block';
        }
    } else {
        console.error(`Elemento com ID 'detalhe-${id_servico}' não encontrado.`);
    }
}

// O código abaixo é apenas um exemplo de como você pode executar funções 
// quando a página terminar de carregar, mas não é estritamente necessário 
// para o 'toggleDetalhe', que é chamado diretamente no HTML (onclick).

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página VetCare carregada com sucesso!");
    
    // Exemplo de como você poderia adicionar um evento via JS, 
    // em vez de usar 'onclick' no HTML:
    // const btnConsulta = document.querySelector('.servico-card[data-service="consulta"] .btn-detalhe');
    // if(btnConsulta) {
    //    btnConsulta.addEventListener('click', () => toggleDetalhe('consulta'));
    // }
});
