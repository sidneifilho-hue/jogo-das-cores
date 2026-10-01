const btnCalcular = document.getElementById('btnCalcular');
const inputPreco = document.getElementById('preco');
const inputQuantidade = document.getElementById('quantidade');
const inputDesconto = document.getElementById('desconto');
const divResultado = document.getElementById('resultado');

function calcularValorFinal() {
  const preco = parseFloat(inputPreco.value) || 0;
  const quantidade = parseInt(inputQuantidade.value) || 0;
  const desconto = parseFloat(inputDesconto.value) || 0;

  const subtotal = preco * quantidade;
  const valorDesconto = subtotal * (desconto / 100);
  const valorFinal = subtotal - valorDesconto;

  const valorFormatado = valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });


  divResultado.textContent = `Valor final: ${valorFormatado}`;
  divResultado.style.display = 'block';
}

btnCalcular.addEventListener('click', calcularValorFinal);