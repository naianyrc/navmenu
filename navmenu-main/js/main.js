const toggleSearchBox = () => {

    // Seleciona o elemento da barra de pesquisa
    const searchBox = document.getElementById('search-box');

    // Se a caixa de pesquisa estiver fechada
    if (searchBox.classList.contains('search-box-closed')) {

        // Remove a classe provocando animação de abertura
        searchBox.classList.remove("search-box-closed");

        // Ao final da animação de 0.6 segundo reexibe o input
        setTimeout(() => searchBox.classList.remove("search-box-hidden-input"), 600);

    // Se a caixa de pesquisa estiver aberta
    } else {
        // Adiciona a classe que esconde o input
        searchBox.classList.add("search-box-hidden-input");
        // Adiciona a classe da animação de fechamento da barra de pesquisa
        searchBox.classList.add("search-box-closed");
    }
}

// Necessário para previnir a execução da animação quando a página é carregada
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => document.body.className="", 500);
});