
const blocosProduto = document.querySelectorAll('figure');
// Selecionamos as caixas que contêm todo o produto (imagem + legenda + preço)
const produtos = document.querySelectorAll('.um, .dois, .tres');

produtos.forEach(produto => {
  
  produto.addEventListener('mouseenter', () => {
    // Busca os elementos dentro desta caixa específica
    const img = produto.querySelector('img');
    const legenda = produto.querySelector('figcaption');
    const preco = produto.querySelector('.price p');

    // Aplica as classes de zoom
    if(img) img.classList.add('zoom-imagem');
    if(legenda) legenda.classList.add('zoom-legenda');
    if(preco) preco.classList.add('zoom-preco');
  });

  produto.addEventListener('mouseleave', () => {
    // Remove as classes quando o mouse sai
    const img = produto.querySelector('img');
    const legenda = produto.querySelector('figcaption');
    const preco = produto.querySelector('.price p');

    if(img) img.classList.remove('zoom-imagem');
    if(legenda) legenda.classList.remove('zoom-legenda');
    if(preco) preco.classList.remove('zoom-preco');
  });
  
});