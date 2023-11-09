var $wrapper = document.querySelector('.wrapper'),
    // Pega a string do conteúdo atual
    HTMLTemporario = $wrapper.innerHTML,
    // Novo HTML que será inserido
    HTMLNovo = 'TesasdasdasdasdsaerHTML </br>';
 
// Concatena as strings colocando o novoHTML antes do HTMLTemporario
HTMLTemporario = HTMLNovo + HTMLTemporario;
 
// Coloca a nova string(que é o HTML) no DOM
$wrapper.innerHTML = HTMLTemporario;